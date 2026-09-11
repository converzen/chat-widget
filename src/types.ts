export interface ChatMessage {
  content: string
  role: 'USER' | 'ASSISTANT' | 'SYSTEM'
  createdAt: string
  sources?: string[]
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
