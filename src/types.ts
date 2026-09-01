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


export type StreamErrorCode = 'session_expired' | 'auth_failed' | 'unavailable' | 'content_filtered' | 'internal'

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
