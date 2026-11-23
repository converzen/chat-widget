export interface ChatMessage {
  content: string
  role: 'USER' | 'ASSISTANT' | 'SYSTEM'
  createdAt: string
  sources?: string[]
  // Cards a host attached to this (assistant) message via onAssistantMessage
  // or cvzWidget.addCards() - rendered below the message bubble.
  cards?: ChatCard[]
  // Voice: the spoken reply was cut off (the caller talked over it, said a
  // stop command or typed). The text is complete; only part was heard.
  interrupted?: boolean
}

// A link card shown below an assistant message - e.g. a product
// recommendation. Rendered by the widget itself (never as raw HTML), so a
// sponsored card always carries its label and rel="sponsored".
export interface ChatCard {
  title: string
  url: string          // http(s) only - other cards are dropped
  description?: string
  imageUrl?: string    // http(s) only - ignored otherwise
  merchant?: string
  // Advertising/affiliate link. Default true: a sponsored card always shows
  // the `sponsoredLabel` (e.g. "Anzeige") and gets rel="sponsored". Only an
  // explicit `false` renders a plain, unlabelled card.
  sponsored?: boolean
}

// What onAssistantMessage receives once an answer is complete.
export interface AssistantMessageEvent {
  question: string     // the user message the answer replied to
  answer: string       // the complete answer text
  sessionId: string
}

// Selects which persona/version a chat request is routed to. Field names match the
// cvz-chat wire format (ChatPersonaIdentifier) verbatim - do not camelCase them.
export interface ChatPersonaIdentifier {
  alias?: string       // Persona alias, e.g. "customer-support". Used by test/prod API keys.
  persona_id?: number  // Numeric persona ID. Used by super/test API keys.
  version_tag?: string // e.g. "next" to select the draft version. Test/super keys only.
}


export type StreamErrorCode = 'session_expired' | 'auth_failed' | 'unavailable' | 'content_filtered' | 'rate_limited' | 'internal'

export interface StreamingData {
  type: 'session_created' | 'session_continued' | 'thinking' | 'tool_call_started' | 'token' | 'error' | 'done'
  content?: string
  session_id?: string
  sources?: string[]
  message?: string
  code?: StreamErrorCode
  id?: string    // tool_call_started: tool call identifier
  name?: string  // tool_call_started: tool name being called
}

// --- Voice (cvz-widget-voice build only) ---
// Mirrors cvz-chat's voice-core: the WebRTC transport at POST
// /api/voice/webrtc/offer runs Silero VAD -> Groq Whisper STT -> the normal
// persona/RAG/billing chat pipeline, pushing events over the WebRTC "events"
// data channel. The text-only widget never imports anything that references
// these (the WebRTC session factory is injected only by the voice build), so
// they add no weight to cvz-widget.js.

// High-level connection state of a voice session.
export type VoiceStatus = 'idle' | 'connecting' | 'connected' | 'failed' | 'stopped'

// Which turn phase the server last reported (maps to voice-core's VoiceStage,
// plus 'idle' for "between turns / not currently in a turn").
export type VoiceStage = 'idle' | 'listening' | 'transcribing' | 'thinking' | 'speaking'

// Events cvz-chat pushes over the "events" data channel. Mirrors voice-core's
// VoiceEvent (serde `tag = "type"`, snake_case). `input` carries the caller's
// own transcribed speech (rendered as a USER bubble).
//
// Barge-in: `duck` / `unduck` / `interrupted` report what the server did to
// the spoken reply. Over WebRTC the server applies volume and flushing to
// the audio track itself, so these are informational here. `tts_state`
// says whether replies are spoken (sent at session start, and after every
// `set_tts`; `false` for personas without a TTS handler).
export type VoiceServerEvent =
  | { type: 'status'; stage: 'listening' | 'transcribing' | 'thinking' | 'speaking' }
  | { type: 'input'; text: string; emotion?: unknown }
  | { type: 'response'; text: string; session_id: string }
  | { type: 'error'; message: string }
  | { type: 'duck'; gain: number }
  | { type: 'unduck' }
  | { type: 'interrupted' }
  | { type: 'tts_state'; enabled: boolean }

// Messages the widget sends on the "events" data channel (voice-core's
// ControlMessage). `text_input` makes a typed message a turn of the voice
// session: same chat session, spoken reply, and it interrupts a reply in
// progress like talking would. `set_tts` is the per-session mute switch.
export type VoiceClientMessage =
  | { type: 'text_input'; text: string }
  | { type: 'set_tts'; enabled: boolean }

export interface VoiceSessionCallbacks {
  onStatusChange: (status: VoiceStatus) => void
  onEvent: (event: VoiceServerEvent) => void
  onError: (message: string) => void
  onLog?: (message: string) => void
}

export interface VoiceSessionStartParams {
  baseUrl: string
  // A bearer chat-JWT - the voice routes require `Authorization: Bearer`,
  // never X-API-Key (see getVoiceAuthToken in core/chatCore.ts).
  token: string
  sessionId?: string | null
  // The <audio> element the inbound remote track is attached to. Silent until
  // the backend grows TTS, but wired now so spoken replies "just work" later.
  audioElement?: HTMLAudioElement | null
  // Speak replies (true) or text only (false); unset = the persona's default.
  tts?: boolean | null
  callbacks: VoiceSessionCallbacks
}

export interface VoiceSessionHandle {
  stop(): void
  // Send a control message; false when the data channel is not open (yet),
  // so the caller can fall back.
  send(message: VoiceClientMessage): boolean
}

// Injected into createChatCore by the voice build only (src/voice/*), so the
// text-only bundle never pulls in any WebRTC/getUserMedia code - esbuild
// tree-shakes it out when no factory is passed.
export type VoiceSessionFactory = (params: VoiceSessionStartParams) => Promise<VoiceSessionHandle>

// --- WidgetConfig and friends ---
// Moved here (out of index.ts) so core/chatCore.ts and the framework
// adapters can import these types without pulling in index.ts's side
// effects (Preact render, window.cvzWidget registration, the bundled CSS
// text import) - index.ts re-exports them for backward compatibility.

export interface TokenResponse {
  token: string;
  expiresAt?: number; // Unix timestamp in milliseconds. Omit for a token that never expires.
}

export interface WidgetStyle {
  // Position: preset or custom
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | {
    bottom?: string; // e.g., "16px", "1rem"
    top?: string;
    left?: string;
    right?: string;
  };

  // Dialog size: preset or custom
  dialogSize?: 'small' | 'medium' | 'large' | {
    width: number; // pixels
    height: number; // pixels
  };

  // Frame/border color (hex)
  frameColor?: string; // hex code, e.g., "#E5E7EB"

  // Button colors (hex codes)
  buttonColor?: {
    normal?: string; // hex code, e.g., "#2563EB"
    hover?: string; // hex code, e.g., "#1D4ED8"
    open?: string; // hex code, e.g., "#1F2937"
  };
}

export interface WidgetIcons {
  // Raw SVG (or other inline HTML) markup, inserted in place of the built-in icon.
  // Use `stroke="currentColor"` / `fill="currentColor"` in your markup to inherit
  // the surrounding icon color the same way the built-in icons do.
  launcher?: string; // Closed launcher-button icon; also used for the empty-conversation placeholder
  close?: string;    // Open launcher-button icon and the header's close-chat icon
  send?: string;     // Message input's send-button icon
  clear?: string;    // Header's clear-history icon
}

export interface WidgetConfig {
  apiKey?: string; // Direct API key (for insecure/demo mode) - uses X-API-Key header
  // Returns a raw JWT string, or a TokenResponse with expiration. Receives the
  // widget's per-browser client-id - forward it to your backend's
  // POST /api/chat/get_token call (as `client_id`) so per-visitor rate
  // limiting can identify this visitor across requests. `null` when no
  // client_id is available right now (e.g. `publicId` isn't configured, or
  // cvz-chat couldn't be reached to issue one) - forward it through as-is
  // rather than substituting your own value; cvz-chat treats a missing
  // client_id as "not yet provided", not as an error, until enforcement is
  // turned on for your account.
  // Existing zero-arg implementations keep working unchanged.
  getToken?: (clientId: string | null) => Promise<string | TokenResponse>;
  // Whether to persist conversation history across reloads at all - the
  // widget's own localStorage, lightly obfuscated, one shared key per
  // origin. Default true. Set false for session-only history (nothing
  // written, nothing restored - a fresh conversation every page load).
  persistMessages?: boolean;
  // localStorage key the built-in persistence uses (default
  // 'cvz_chat_history'). Give each persona its own key when one page
  // switches between several - otherwise they share one conversation, and
  // the restored sessionId keeps talking to whichever persona created it.
  // Ignored when onSaveMessages/onLoadMessages are supplied.
  historyKey?: string;
  headerMsg?: string;
  subheaderMsg?: string; // Optional subheader text below the title (default: "We typically reply in a few minutes")
  initialGreeting?: string;
  promptPlaceholder?: string;
  chatUrl?: string; // Optional - defaults to 'https://chat.converzen.de'
  // The non-secret id (from your ConverZen dashboard, next to your API key)
  // that lets the widget request a client_id directly from cvz-chat instead
  // of generating one itself. Required to get a cvz-chat-issued,
  // spoof-resistant client_id in getToken/JWT mode; without it the widget
  // falls back to a self-generated one, same as before this existed.
  publicId?: string;
  // Optional persona/version selector. A plain string is shorthand for { alias: string }.
  // Only takes effect in apiKey mode, and only on the first message of a new session -
  // continuation requests reuse the persona the session was created with, and in
  // getToken/JWT mode the persona is selected server-side when your backend requests
  // the token (POST /api/get_token), not by the widget.
  persona?: string | ChatPersonaIdentifier;
  darkMode?: boolean; // Optional - enable dark mode theme (default: false)
  style?: WidgetStyle; // Optional styling customization
  icons?: WidgetIcons; // Optional icon overrides (default: built-in outline icon set)
  enableMarkdown?: boolean; // Optional - enable markdown rendering in messages (default: false). Requires markdown build.
  // Enables ConverZen's own end-user subscription/credits monetization: a
  // persistent "Authenticate" control in the header that lets a visitor log
  // in via emailed magic link, see their vToken balance/renewal, and buy a
  // plan - independent of this widget's own apiKey/getToken tenant auth.
  // Default false (no UI, no behavior change) - only turn this on for
  // accounts that have set up end-user billing plans in the dashboard.
  endUserLicensing?: boolean;
  // Pluggable history persistence, for a host app that wants its own
  // backend (e.g. cross-device sync for a logged-in user) instead of the
  // built-in `persistMessages` localStorage default. Either callback takes
  // priority over `persistMessages` when supplied; omit both to keep using
  // the built-in behavior. `onLoadMessages` must return `sessionId: ''`
  // (never a fabricated id) when there's nothing to restore - see
  // src/history.ts's defaultLoadMessages for why.
  onSaveMessages?: (sessionId: string, messages: ChatMessage[]) => Promise<void>;
  onLoadMessages?: () => Promise<{ sessionId: string; messages: ChatMessage[] }>;
  // Arbitrary extra fields merged verbatim into every completion/continuation
  // request body - e.g. a host app's own RAG-grounding hints. Field names
  // must match cvz-chat's wire format exactly, same as `persona`.
  extraContext?: Record<string, unknown>;
  // Start the chat panel already open on mount, instead of waiting for a
  // launcher click - e.g. a host app's own "ask about this" button that
  // re-inits the widget with different `extraContext`. Default false.
  autoOpen?: boolean;
  // Called with the user's message right after it is sent. Reporting only -
  // the return value is ignored and errors are swallowed.
  onUserMessage?: (event: { question: string; sessionId: string | null }) => void;
  // Called once per completed assistant answer (not for errors or aborted
  // replies). May return cards (or a Promise of them) to show below that
  // answer - e.g. product recommendations a host looks up on its own
  // backend. Runs after the answer is finalized and never delays or breaks
  // the chat: a rejected/slow Promise just means no cards. Invalid cards
  // (no title, non-http(s) url) are dropped, at most 5 are shown.
  onAssistantMessage?: (event: AssistantMessageEvent) => ChatCard[] | void | Promise<ChatCard[] | void>;
  // Label shown on every sponsored card (default "Anzeige").
  sponsoredLabel?: string;
  // --- Voice build (cvz-widget-voice) only; ignored by the text widget. ---
  // Tooltip/accessible label for the microphone control (default "Talk").
  voiceButtonLabel?: string;
  // Start a voice session automatically as soon as the panel is opened,
  // instead of waiting for a mic-button press. Default false (push-to-talk).
  voiceAutoStart?: boolean;
  // Note shown under a spoken reply that was cut off by the caller
  // (default "Interrupted").
  voiceInterruptedLabel?: string;
}

export interface ChatModalConfig {
  // API Configuration
  apiUrl: string
  tokenEndpoint: string
  
  // Authentication
  auth?: {
    isLoggedIn: boolean
    userId?: string | null
  }
  
  // reCAPTCHA Configuration
  recaptcha?: {
    siteKey: string
    execute: (action: string, siteKey: string) => Promise<string>
    ready?: boolean
  }
  
  // UI Configuration
  ui?: {
    greeting?: string
    streamChars?: number
    streamDelay?: number
    placeholder?: string
    title?: string
    subtitle?: string
  }
  
  // Theme/CSS (optional - can use Tailwind classes)
  theme?: {
    primaryColor?: string
    secondaryColor?: string
    [key: string]: string | undefined
  }
  
  // Storage keys (for localStorage)
  storage?: {
    historyKey?: string
    sessionKey?: string
    userIdKey?: string
  }
}

export interface ChatModalProps {
  isOpen: boolean
  onClose: () => void
  config: ChatModalConfig
}
