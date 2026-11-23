/**
 * Framework-agnostic chat state machine - auth/session/streaming logic only,
 * no rendering. This is what used to live inline in App.tsx's Preact hooks;
 * it's been moved here verbatim (not rewritten) so any UI framework can
 * drive it via a thin adapter (see ../react/useChatCore.ts for the React
 * one, App.tsx for the Preact one used by the default widget).
 *
 * Shape is deliberately the same as a Zustand vanilla store / Redux store:
 * getState() + subscribe() + action methods. getState() MUST return the
 * same object reference until something actually changes - React's
 * useSyncExternalStore (and similar patterns in other frameworks) will
 * infinite-loop otherwise.
 */

import type {
  WidgetConfig,
  TokenResponse,
  ChatMessage,
  ChatCard,
  ChatPersonaIdentifier,
  VoiceStatus,
  VoiceStage,
  VoiceServerEvent,
  VoiceSessionFactory,
  VoiceSessionHandle,
} from '../types';
import { streamChat } from '../services/streaming';
import { getOrCreateClientId, isInvalidClientIdError, refreshClientIdAfterRejection, type CaptchaMount } from '../clientId';
import { createDefaultHistory } from '../history';
import {
  clearEndUserAuth,
  isEndUserAuthValid,
  loadEndUserAuth,
  loadPendingCheckout,
  clearPendingCheckout,
  saveEndUserAuth,
  waitForEndUserAction,
  type EndUserAuth,
} from '../endUserAuth';

const DEFAULT_CHAT_API_URL = 'https://chat.converzen.de';
const DEFAULT_INITIAL_GREETING = 'Hi, how can I help you ?';
const MAX_CARDS = 5;

function isHttpUrl(value: unknown): value is string {
  return typeof value === 'string' && /^https?:\/\//i.test(value.trim());
}

function optionalText(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

/**
 * Keeps only well-formed cards (non-empty title, http(s) url), normalized to
 * plain data - whatever a host hands in, the presentation only ever sees
 * these fields. Exported for tests and alternative presentations.
 */
export function sanitizeCards(input: unknown): ChatCard[] {
  if (!Array.isArray(input)) return [];
  const cards: ChatCard[] = [];
  for (const raw of input) {
    if (cards.length >= MAX_CARDS) break;
    if (!raw || typeof raw !== 'object') continue;
    const c = raw as Record<string, unknown>;
    const title = optionalText(c.title);
    if (!title || !isHttpUrl(c.url)) continue;
    cards.push({
      title,
      url: c.url.trim(),
      description: optionalText(c.description),
      imageUrl: isHttpUrl(c.imageUrl) ? c.imageUrl.trim() : undefined,
      merchant: optionalText(c.merchant),
      sponsored: c.sponsored !== false,
    });
  }
  return cards;
}

export interface ChatCoreState {
  messages: ChatMessage[];
  sessionId: string | null;
  isOpen: boolean;
  isLoading: boolean;
  isStreaming: boolean;
  streamingMessage: string;
  thinkingMessage: string;
  activeToolCall: string | null;
  captchaPending: boolean;
  /** Only meaningful when config.endUserLicensing is set. */
  endUserAuth: EndUserAuth | null;
  showAuthNudge: boolean;
  /** Voice connection state. Always 'idle' in the text-only build (no voice
   *  session factory is injected, so startVoice is a no-op). */
  voiceStatus: VoiceStatus;
  /** Which turn phase the voice server last reported. */
  voiceStage: VoiceStage;
  /** Last voice error, surfaced to the presentation; cleared on each start. */
  voiceError: string | null;
  /** Whether the voice session speaks its replies, as the server last
   *  reported (`tts_state`); null while no session is connected. */
  voiceTts: boolean | null;
}

export interface ChatCoreStore {
  getState(): ChatCoreState;
  subscribe(listener: () => void): () => void;
  sendMessage(text: string): Promise<void>;
  /** Also kicks off client-id resolution - see the comment at its call site
   *  in App.tsx's launcher button for why that's deferred to here rather
   *  than mount. */
  open(): void;
  close(): void;
  /** Just clears - a confirm-before-clear prompt is a presentation concern. */
  clearHistory(): Promise<void>;
  authenticateEndUser(auth: EndUserAuth): void;
  deauthenticateEndUser(): void;
  /** Exposed for EndUserAuthModal's getBaseAuth prop - the widget's own
   *  tenant-level auth, independent of any end-user identity. */
  getTenantAuthToken(forceRefresh?: boolean): Promise<{ token: string; type: 'apiKey' | 'bearer' }>;
  /** Presentation calls this (e.g. from a ref callback) once it has a real
   *  DOM node for a CAPTCHA challenge to render into. */
  setCaptchaContainer(el: HTMLElement | null): void;
  /** Mutable flag, not part of reactive state - see its one read site in the
   *  default presentation for why (suppresses a one-frame flicker between
   *  the streaming bubble and the finalized message). */
  isFinalizingRef: { current: boolean };
  /** Attaches cards to the latest assistant message (replacing any it had)
   *  and persists them - the imperative counterpart to returning cards from
   *  config.onAssistantMessage. Invalid cards are dropped. */
  addCards(cards: ChatCard[]): void;
  /** Starts a voice session (WebRTC), wiring its transcript/response/error
   *  events into this same conversation (shared messages + sessionId). No-op
   *  in the text-only build (no session factory injected). `audioElement` is
   *  where the inbound remote track (the spoken replies) is attached. */
  startVoice(audioElement: HTMLAudioElement | null): Promise<void>;
  /** Tears down the active voice session, if any. */
  stopVoice(): void;
  /** Mute / unmute spoken replies. Applies to the running voice session
   *  (cutting off a reply being spoken) and is remembered for the next one. */
  setVoiceTts(enabled: boolean): void;
  /** Aborts any in-flight stream and drops pending frame callbacks - call
   *  when the presentation unmounts (e.g. WidgetManager.hide() before a
   *  re-init with a different persona), so a reply still streaming for the
   *  old config doesn't keep running in the background. */
  dispose(): void;
}

/** Non-serializable dependencies injected at store-creation time. The voice
 *  session factory is passed only by the voice build (src/voice/*), so the
 *  text-only bundle never references any WebRTC code and esbuild drops it. */
export interface ChatCoreOptions {
  voiceSessionFactory?: VoiceSessionFactory;
}

export function createChatCore(config: WidgetConfig, options: ChatCoreOptions = {}): ChatCoreStore {
  const voiceSessionFactory = options.voiceSessionFactory;
  const listeners = new Set<() => void>();

  let captchaContainer: HTMLElement | null = null;
  const captchaMount: CaptchaMount = {
    getContainer: () => captchaContainer,
    onPending: (pending) => setState({ captchaPending: pending }),
  };

  let state: ChatCoreState = {
    messages: [],
    sessionId: null,
    isOpen: config.autoOpen ?? false,
    isLoading: false,
    isStreaming: false,
    streamingMessage: '',
    thinkingMessage: '',
    activeToolCall: null,
    captchaPending: false,
    endUserAuth: (() => {
      const stored = loadEndUserAuth();
      return isEndUserAuthValid(stored) ? stored : null;
    })(),
    showAuthNudge: false,
    voiceStatus: 'idle',
    voiceStage: 'idle',
    voiceError: null,
    voiceTts: null,
  };

  let voiceHandle: VoiceSessionHandle | null = null;
  // The caller's mute choice, sent with the next session's offer (null =
  // persona default).
  let voiceTtsPref: boolean | null = null;
  // The server cut off the spoken reply in progress; its `response` (which
  // still arrives, complete) is marked as interrupted.
  let replyInterrupted = false;

  function notify() {
    listeners.forEach((l) => l());
  }

  function setState(patch: Partial<ChatCoreState>) {
    state = { ...state, ...patch };
    notify();
  }

  const isFinalizingRef = { current: false };

  // config.onSaveMessages/onLoadMessages (a host app's own backend) take
  // priority over the built-in persistMessages/localStorage default.
  const persistMessages = config.persistMessages !== false;
  const defaultHistory = createDefaultHistory(config.historyKey);
  const saveMessages = config.onSaveMessages ?? (persistMessages ? defaultHistory.save : async () => {});
  const loadMessagesFn =
    config.onLoadMessages ?? (persistMessages ? defaultHistory.load : async () => ({ sessionId: '', messages: [] }));

  let abortController: AbortController | null = null;
  let tokenCache: TokenResponse | null = null;
  let clientIdPromise: Promise<string | null> | null = null;
  let streamBuffer = '';
  let rAF: number | null = null;
  let thinkingBuffer = '';
  let thinkingRAF: number | null = null;

  function getClientId(): Promise<string | null> {
    if (!clientIdPromise) {
      const baseUrl = config.chatUrl || DEFAULT_CHAT_API_URL;
      clientIdPromise = getOrCreateClientId(baseUrl, config.publicId, captchaMount);
    }
    return clientIdPromise;
  }

  async function getTenantAuthToken(forceRefresh = false): Promise<{ token: string; type: 'apiKey' | 'bearer' }> {
    if (config.apiKey) {
      return { token: config.apiKey, type: 'apiKey' };
    }

    if (!config.getToken) {
      throw new Error('Either apiKey or getToken must be provided');
    }
    const getToken = config.getToken;

    if (!forceRefresh) {
      const now = Date.now() / 1000 + 5;
      const cached = tokenCache;
      const isTokenValid = cached && (cached.expiresAt == null || cached.expiresAt > now);
      if (isTokenValid) {
        return { token: cached.token, type: 'bearer' };
      }
    }

    const fetchToken = async (): Promise<TokenResponse> => {
      const rawResult = await getToken(await getClientId());
      return typeof rawResult === 'string' ? { token: rawResult, expiresAt: undefined } : rawResult;
    };

    let tokenResult: TokenResponse;
    try {
      tokenResult = await fetchToken();
    } catch (err) {
      // Only a client_id cvz-chat itself rejected is worth reacting to here -
      // anything else wouldn't be fixed by a new client_id.
      if (!isInvalidClientIdError(err)) {
        throw err;
      }
      const baseUrl = config.chatUrl || DEFAULT_CHAT_API_URL;
      clientIdPromise = Promise.resolve(await refreshClientIdAfterRejection(baseUrl, config.publicId, captchaMount));
      tokenResult = await fetchToken(); // one retry with the (possibly still-null) client_id
    }

    tokenCache = tokenResult;
    return { token: tokenResult.token, type: 'bearer' };
  }

  // An authenticated end-user identity (magic-link login) takes priority
  // over this widget's own tenant-level apiKey/getToken.
  async function getAuthToken(forceRefresh = false): Promise<{ token: string; type: 'apiKey' | 'bearer' }> {
    if (!forceRefresh && isEndUserAuthValid(state.endUserAuth)) {
      return { token: state.endUserAuth.token, type: 'bearer' };
    }
    return getTenantAuthToken(forceRefresh);
  }

  // --- Voice (WebRTC) ---------------------------------------------------
  // Only wired when a voice session factory was injected (the voice build).
  // Everything here shares this store's `messages`/`sessionId`, so a spoken
  // turn and a typed turn land in one conversation.

  function normalizeVoicePersona(): ChatPersonaIdentifier | null {
    const p = config.persona;
    if (!p) return null;
    return typeof p === 'string' ? { alias: p } : p;
  }

  /** The voice routes require `Authorization: Bearer <chat-jwt>` (never
   *  X-API-Key). In getToken/secure mode the host-minted JWT already is one;
   *  in apiKey/demo mode we exchange the API key for a short-lived chat-JWT
   *  via POST /api/chat/get_token (mirrors cvz-admin's getVoiceToken). */
  async function getVoiceAuthToken(): Promise<string> {
    if (!config.apiKey && config.getToken) {
      const auth = await getTenantAuthToken();
      return auth.token;
    }
    if (!config.apiKey) {
      throw new Error('Either apiKey or getToken must be provided');
    }
    const baseUrl = config.chatUrl || DEFAULT_CHAT_API_URL;
    const clientId = await getClientId();
    const res = await fetch(`${baseUrl}/api/chat/get_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-API-Key': config.apiKey },
      body: JSON.stringify({
        user_id: 'voice-widget',
        media_type: 'voice',
        client_id: clientId ?? undefined,
        persona: normalizeVoicePersona(),
      }),
    });
    if (!res.ok) {
      throw new Error(`voice token request failed (${res.status}): ${await res.text()}`);
    }
    const data = await res.json();
    if (!data || typeof data.token !== 'string') {
      throw new Error('voice token response missing token');
    }
    return data.token as string;
  }

  /** Finalizes a voice assistant turn into the shared conversation - same
   *  shape/persist/hook path as the `done` case of executeStreaming. */
  async function commitVoiceResponse(content: string, sid: string): Promise<void> {
    const interrupted = replyInterrupted;
    replyInterrupted = false;
    if (!content) {
      setState({ voiceStage: 'idle' });
      return;
    }
    isFinalizingRef.current = true;
    const prevMessages = state.messages;
    const lastUser = [...prevMessages].reverse().find((m) => m.role === 'USER');
    const assistantMessage: ChatMessage = {
      content,
      role: 'ASSISTANT',
      createdAt: new Date().toISOString(),
      ...(interrupted ? { interrupted: true } : {}),
    };
    const finalMessages = [...prevMessages, assistantMessage];
    const nextSid = sid || state.sessionId || '';
    setState({ messages: finalMessages, sessionId: sid || state.sessionId, voiceStage: 'idle' });
    setTimeout(() => {
      isFinalizingRef.current = false;
    }, 0);
    await saveMessages(nextSid, finalMessages);
    runAssistantMessageHook(lastUser?.content ?? '', assistantMessage, nextSid);
  }

  function handleVoiceEvent(event: VoiceServerEvent): void {
    switch (event.type) {
      case 'status':
        setState({ voiceStage: event.stage });
        break;
      case 'input': {
        // The caller's own transcribed speech, shown as a USER bubble.
        // (Typed turns sent over the voice session get no `input` echo -
        // sendMessage already added them.)
        const text = event.text?.trim();
        if (!text) break;
        const msgs = [
          ...state.messages,
          { content: text, role: 'USER' as const, createdAt: new Date().toISOString() },
        ];
        setState({ messages: msgs });
        void saveMessages(state.sessionId || '', msgs);
        if (config.onUserMessage) {
          try {
            config.onUserMessage({ question: text, sessionId: state.sessionId });
          } catch (error) {
            console.error('cvzWidget: onUserMessage failed', error);
          }
        }
        break;
      }
      case 'response':
        void commitVoiceResponse(event.text, event.session_id);
        break;
      case 'interrupted':
        replyInterrupted = true;
        break;
      case 'tts_state':
        setState({ voiceTts: event.enabled });
        break;
      case 'duck':
      case 'unduck':
        // WebRTC: the server lowers / restores the reply's volume itself.
        break;
      case 'error': {
        replyInterrupted = false;
        const msgs = [
          ...state.messages,
          { content: event.message || 'Voice error', role: 'SYSTEM' as const, createdAt: new Date().toISOString() },
        ];
        setState({ messages: msgs, voiceStage: 'idle' });
        void saveMessages(state.sessionId || '', msgs);
        break;
      }
    }
  }

  async function startVoice(audioElement: HTMLAudioElement | null): Promise<void> {
    if (!voiceSessionFactory) return; // text-only build: no-op
    if (voiceHandle || state.voiceStatus === 'connecting' || state.voiceStatus === 'connected') return;
    setState({ voiceStatus: 'connecting', voiceStage: 'idle', voiceError: null, voiceTts: null });
    replyInterrupted = false;
    try {
      const token = await getVoiceAuthToken();
      const baseUrl = config.chatUrl || DEFAULT_CHAT_API_URL;
      voiceHandle = await voiceSessionFactory({
        baseUrl,
        token,
        sessionId: state.sessionId,
        audioElement,
        tts: voiceTtsPref,
        callbacks: {
          onStatusChange: (status) =>
            setState(status === 'connected' ? { voiceStatus: status } : { voiceStatus: status, voiceStage: 'idle' }),
          onEvent: handleVoiceEvent,
          onError: (message) => setState({ voiceError: message }),
        },
      });
    } catch (err) {
      voiceHandle = null;
      setState({
        voiceStatus: 'failed',
        voiceStage: 'idle',
        voiceError: err instanceof Error ? err.message : String(err),
      });
    }
  }

  function stopVoice(): void {
    if (voiceHandle) {
      voiceHandle.stop();
      voiceHandle = null;
    }
    setState({ voiceStatus: 'stopped', voiceStage: 'idle', voiceTts: null });
  }

  function setVoiceTts(enabled: boolean): void {
    voiceTtsPref = enabled;
    if (voiceHandle?.send({ type: 'set_tts', enabled })) {
      // optimistic; the server's `tts_state` answer is authoritative (it
      // stays false for a persona without a TTS handler)
      setState({ voiceTts: enabled });
    }
  }

  /** A typed message while a voice session is connected goes over the
   *  session itself: it interrupts a reply being spoken (like talking
   *  would), gets a spoken answer, and is ordered with the spoken turns in
   *  the same chat session - no concurrent SSE turn racing a voice turn.
   *  Returns false when the data channel is not usable (caller falls back
   *  to SSE). */
  function sendTypedOverVoice(text: string): boolean {
    if (state.voiceStatus !== 'connected' || !voiceHandle) return false;
    if (!voiceHandle.send({ type: 'text_input', text })) return false;
    if (config.onUserMessage) {
      try {
        config.onUserMessage({ question: text, sessionId: state.sessionId });
      } catch (error) {
        console.error('cvzWidget: onUserMessage failed', error);
      }
    }
    const msgs = [
      ...state.messages,
      { content: text, role: 'USER' as const, createdAt: new Date().toISOString() },
    ];
    setState({ messages: msgs, voiceStage: 'thinking' });
    void saveMessages(state.sessionId || '', msgs);
    return true;
  }

  async function executeStreaming(
    userMessage: ChatMessage,
    updatedMessages: ChatMessage[],
    controller: AbortController,
    retryCount = 0,
  ): Promise<void> {
    const maxRetries = 1;
    try {
      const auth = await getAuthToken(retryCount > 0);
      const baseUrl = config.chatUrl || DEFAULT_CHAT_API_URL;
      let currentSessionId = state.sessionId || '';

      const streamGenerator = streamChat({
        baseUrl,
        sessionId: currentSessionId,
        message: userMessage.content,
        persona: config.persona,
        authToken: auth.token,
        authType: auth.type,
        clientId: (await getClientId()) ?? undefined,
        extraContext: config.extraContext,
        abortSignal: controller.signal,
      });

      let accumulatedContent = '';
      let hasUnauthorizedError = false;
      let hasFillerContent = false;
      // See App.tsx's original comment: multiple SSE events parsed from the
      // same network chunk can otherwise overwrite each other's filler text
      // before the user ever sees it - wait out a minimum dwell time before
      // replacing one filler state with another.
      let fillerVisibleSince = 0;
      const FILLER_MIN_DWELL_MS = 350;
      const waitOutFillerDwell = async () => {
        if (!fillerVisibleSince) return;
        const remaining = FILLER_MIN_DWELL_MS - (Date.now() - fillerVisibleSince);
        if (remaining > 0) {
          await new Promise((resolve) => setTimeout(resolve, remaining));
        }
      };

      for await (const event of streamGenerator) {
        if (controller.signal.aborted) {
          break;
        }

        switch (event.type) {
          case 'session_created':
          case 'session_continued':
            if (event.session_id && event.session_id !== currentSessionId) {
              currentSessionId = event.session_id;
              setState({ sessionId: event.session_id });
            }
            break;

          case 'thinking':
            if (event.content) {
              if (!hasFillerContent) {
                fillerVisibleSince = Date.now();
              }
              hasFillerContent = true;
              thinkingBuffer += event.content;
              if (!thinkingRAF) {
                thinkingRAF = requestAnimationFrame(() => {
                  const newText = thinkingBuffer;
                  thinkingBuffer = '';
                  thinkingRAF = null;
                  setState({ thinkingMessage: state.thinkingMessage + newText });
                });
              }
            }
            break;

          case 'tool_call_started':
            if (event.name) {
              await waitOutFillerDwell();
              hasFillerContent = true;
              fillerVisibleSince = Date.now();
              setState({ activeToolCall: event.name });
            }
            break;

          case 'token':
            if (event.content) {
              if (hasFillerContent) {
                await waitOutFillerDwell();
                hasFillerContent = false;
                fillerVisibleSince = 0;
                thinkingBuffer = '';
                setState({ thinkingMessage: '', activeToolCall: null });
              }
              streamBuffer += event.content;
              accumulatedContent += event.content;

              if (!rAF) {
                rAF = requestAnimationFrame(() => {
                  const newText = streamBuffer;
                  streamBuffer = '';
                  rAF = null;
                  setState({ streamingMessage: state.streamingMessage + newText });
                });
              }
            }
            break;

          case 'done': {
            if (accumulatedContent && currentSessionId) {
              isFinalizingRef.current = true;

              const assistantMessage: ChatMessage = {
                content: accumulatedContent,
                role: 'ASSISTANT',
                createdAt: new Date().toISOString(),
                sources: event.sources,
              };
              const finalMessages = [...updatedMessages, assistantMessage];

              setState({
                messages: finalMessages,
                streamingMessage: '',
                thinkingMessage: '',
                activeToolCall: null,
                isStreaming: false,
                isLoading: false,
              });
              thinkingBuffer = '';

              setTimeout(() => {
                isFinalizingRef.current = false;
              }, 0);

              await saveMessages(currentSessionId, finalMessages);
              runAssistantMessageHook(userMessage.content, assistantMessage, currentSessionId);
            } else {
              setState({
                streamingMessage: '',
                thinkingMessage: '',
                activeToolCall: null,
                isStreaming: false,
                isLoading: false,
              });
              thinkingBuffer = '';
            }
            abortController = null;
            return;
          }

          case 'error': {
            const errorCode = event.code || '';
            const errorMsg = event.message || '';
            const wasUsingEndUserAuth = retryCount === 0 && isEndUserAuthValid(state.endUserAuth);

            if (
              (errorCode === 'auth_failed' ||
                errorMsg.includes('401') ||
                errorMsg.includes('403') ||
                errorMsg.includes('Unauthorized') ||
                errorMsg.includes('Forbidden')) &&
              retryCount < maxRetries &&
              ((config.getToken && !config.apiKey) || wasUsingEndUserAuth)
            ) {
              tokenCache = null;
              if (wasUsingEndUserAuth) {
                // The visitor's own token was rejected - fall back to
                // tenant auth on retry rather than looping on the same bad
                // token, and drop the stale identity.
                deauthenticateEndUser();
              }
              hasUnauthorizedError = true;
              break;
            }

            if (errorCode === 'rate_limited' && config.endUserLicensing) {
              setState({
                showAuthNudge: true,
                streamingMessage: '',
                thinkingMessage: '',
                activeToolCall: null,
                isStreaming: false,
                isLoading: false,
              });
              thinkingBuffer = '';
              abortController = null;
              return;
            }

            const errorMessage: ChatMessage = {
              content: errorMsg || 'An error occurred',
              role: 'SYSTEM',
              createdAt: new Date().toISOString(),
            };
            const errorMessages = [...updatedMessages, errorMessage];
            setState({
              messages: errorMessages,
              streamingMessage: '',
              thinkingMessage: '',
              activeToolCall: null,
              isStreaming: false,
              isLoading: false,
            });
            thinkingBuffer = '';
            await saveMessages(currentSessionId || '', errorMessages);
            abortController = null;
            return;
          }
        }
      }

      if (hasUnauthorizedError && retryCount < maxRetries) {
        return executeStreaming(userMessage, updatedMessages, controller, retryCount + 1);
      }

      if (!controller.signal.aborted && !hasUnauthorizedError) {
        setState({
          streamingMessage: '',
          thinkingMessage: '',
          activeToolCall: null,
          isStreaming: false,
          isLoading: false,
        });
        thinkingBuffer = '';
        abortController = null;
      }
    } catch (error) {
      const wasUsingEndUserAuth = retryCount === 0 && isEndUserAuthValid(state.endUserAuth);
      if (
        error instanceof Error &&
        (error.message.includes('401') || error.message.includes('403')) &&
        retryCount < maxRetries &&
        ((config.getToken && !config.apiKey) || wasUsingEndUserAuth)
      ) {
        tokenCache = null;
        if (wasUsingEndUserAuth) {
          deauthenticateEndUser();
        }
        return executeStreaming(userMessage, updatedMessages, controller, retryCount + 1);
      }

      throw error;
    }
  }

  /** Replaces `target`'s cards (matched by identity, so a message that was
   *  cleared away meanwhile is simply not found) and persists. */
  function attachCards(target: ChatMessage, cards: ChatCard[]): void {
    if (cards.length === 0) return;
    const index = state.messages.indexOf(target);
    if (index === -1) return;
    const messages = state.messages.slice();
    messages[index] = { ...target, cards };
    setState({ messages });
    void saveMessages(state.sessionId || '', messages).catch((error) =>
      console.error('cvzWidget: failed to save cards', error),
    );
  }

  /** Fire-and-forget: a host hook must never delay or break the chat. */
  function runAssistantMessageHook(question: string, message: ChatMessage, sessionId: string): void {
    const hook = config.onAssistantMessage;
    if (!hook) return;
    Promise.resolve()
      .then(() => hook({ question, answer: message.content, sessionId }))
      .then((result) => attachCards(message, sanitizeCards(result)))
      .catch((error) => console.error('cvzWidget: onAssistantMessage failed', error));
  }

  function addCards(cards: ChatCard[]): void {
    const latest = [...state.messages].reverse().find((m) => m.role === 'ASSISTANT');
    if (latest) attachCards(latest, sanitizeCards(cards));
  }

  async function sendMessage(text: string): Promise<void> {
    if (!text.trim() || state.isStreaming) return;
    if (sendTypedOverVoice(text.trim())) return;

    if (abortController) {
      abortController.abort();
    }

    const userMessage: ChatMessage = {
      content: text.trim(),
      role: 'USER',
      createdAt: new Date().toISOString(),
    };

    if (config.onUserMessage) {
      try {
        config.onUserMessage({ question: userMessage.content, sessionId: state.sessionId });
      } catch (error) {
        console.error('cvzWidget: onUserMessage failed', error);
      }
    }

    const updatedMessages = [...state.messages, userMessage];
    setState({
      messages: updatedMessages,
      isLoading: true,
      isStreaming: true,
      streamingMessage: '',
      thinkingMessage: '',
      activeToolCall: null,
    });
    thinkingBuffer = '';

    try {
      const controller = new AbortController();
      abortController = controller;
      await executeStreaming(userMessage, updatedMessages, controller);
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        setState({
          streamingMessage: '',
          thinkingMessage: '',
          activeToolCall: null,
          isStreaming: false,
          isLoading: false,
        });
        thinkingBuffer = '';
        abortController = null;
        return;
      }

      const errorMessage: ChatMessage = {
        content: `Error: ${error instanceof Error ? error.message : 'Failed to send message'}`,
        role: 'SYSTEM',
        createdAt: new Date().toISOString(),
      };
      const errorMessages = [...updatedMessages, errorMessage];
      setState({
        messages: errorMessages,
        streamingMessage: '',
        thinkingMessage: '',
        activeToolCall: null,
        isStreaming: false,
        isLoading: false,
      });
      thinkingBuffer = '';
      await saveMessages(state.sessionId || '', errorMessages);
      abortController = null;
    }
  }

  async function clearHistory(): Promise<void> {
    if (abortController) {
      abortController.abort();
      abortController = null;
    }

    setState({
      messages: [
        {
          content: config.initialGreeting || DEFAULT_INITIAL_GREETING,
          role: 'SYSTEM',
          createdAt: new Date().toISOString(),
        },
      ],
      streamingMessage: '',
      thinkingMessage: '',
      activeToolCall: null,
      sessionId: null,
      isStreaming: false,
      isLoading: false,
    });
    thinkingBuffer = '';
    await saveMessages('', []);
  }

  function open(): void {
    setState({ isOpen: true });
    // Deliberately not resolved at store-creation time - see the original
    // comment on App.tsx's launcher button: an immediate client_id
    // resolution on mount would run a CAPTCHA challenge before the visitor
    // has done anything, which appears to hurt Cloudflare's bot-likelihood
    // scoring. getClientId() memoizes, so reopening is a no-op once resolved.
    void getClientId();
  }

  function close(): void {
    setState({ isOpen: false });
  }

  function authenticateEndUser(auth: EndUserAuth): void {
    saveEndUserAuth(auth);
    setState({ endUserAuth: auth, showAuthNudge: false });
  }

  function deauthenticateEndUser(): void {
    clearEndUserAuth();
    setState({ endUserAuth: null });
  }

  function setCaptchaContainer(el: HTMLElement | null): void {
    captchaContainer = el;
  }

  // --- one-time setup, equivalent to App.tsx's mount effects. Safe to run
  // once here rather than per-mount, since config is treated as immutable
  // for a store's lifetime (a new WidgetConfig means a new store - see the
  // React adapter's useMemo). ---

  (async () => {
    try {
      const result = await loadMessagesFn();
      let initialMessages: ChatMessage[] = [];
      let loadedSessionId: string | null = null;

      if (result && typeof result === 'object' && 'messages' in result && 'sessionId' in result) {
        initialMessages = result.messages || [];
        loadedSessionId = result.sessionId || null;
      } else if (Array.isArray(result)) {
        initialMessages = result;
      }

      // Show the greeting only when there's genuinely no history to restore.
      if (initialMessages.length === 0) {
        initialMessages = [
          {
            content: config.initialGreeting || DEFAULT_INITIAL_GREETING,
            role: 'SYSTEM',
            createdAt: new Date().toISOString(),
          },
        ];
      }
      setState({ sessionId: loadedSessionId, messages: initialMessages });
    } catch (error) {
      console.error('Failed to load messages:', error);
    }
  })();

  if (config.endUserLicensing) {
    const pending = loadPendingCheckout();
    if (pending) {
      const baseUrl = config.chatUrl || DEFAULT_CHAT_API_URL;
      waitForEndUserAction(baseUrl, pending.pendingId).finally(() => {
        clearPendingCheckout();
      });
    }
  }

  function dispose(): void {
    if (voiceHandle) {
      voiceHandle.stop();
      voiceHandle = null;
    }
    if (abortController) {
      abortController.abort();
      abortController = null;
    }
    if (rAF) {
      cancelAnimationFrame(rAF);
      rAF = null;
    }
    if (thinkingRAF) {
      cancelAnimationFrame(thinkingRAF);
      thinkingRAF = null;
    }
  }

  return {
    getState: () => state,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    sendMessage,
    open,
    close,
    clearHistory,
    authenticateEndUser,
    deauthenticateEndUser,
    getTenantAuthToken,
    setCaptchaContainer,
    addCards,
    startVoice,
    stopVoice,
    setVoiceTts,
    isFinalizingRef,
    dispose,
  };
}
