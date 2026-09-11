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

import type { WidgetConfig, TokenResponse, ChatMessage } from '../types';
import { streamChat } from '../services/streaming';
import { getOrCreateClientId, isInvalidClientIdError, refreshClientIdAfterRejection, type CaptchaMount } from '../clientId';
import { defaultSaveMessages, defaultLoadMessages } from '../history';
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
}

export function createChatCore(config: WidgetConfig): ChatCoreStore {
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
  };

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
  const saveMessages = config.onSaveMessages ?? (persistMessages ? defaultSaveMessages : async () => {});
  const loadMessagesFn =
    config.onLoadMessages ?? (persistMessages ? defaultLoadMessages : async () => ({ sessionId: '', messages: [] }));

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

  async function sendMessage(text: string): Promise<void> {
    if (!text.trim() || state.isStreaming) return;

    if (abortController) {
      abortController.abort();
    }

    const userMessage: ChatMessage = {
      content: text.trim(),
      role: 'USER',
      createdAt: new Date().toISOString(),
    };

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
    isFinalizingRef,
  };
}
