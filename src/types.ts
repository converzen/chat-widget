export interface ChatMessage {
  content: string
  role: 'USER' | 'ASSISTANT' | 'SYSTEM'
  createdAt: string
  sources?: string[]
}

export interface ChatResponse {
  session_id?: string
  response?: string
  timestamp?: string
}

export interface StreamingData {
  type: 'session_created' | 'session_continued' | 'token' | 'error' | 'done'
  content?: string // For token events
  session_id?: string // For session_created and session_continued events
  message?: string // For error events
  usage?: {
    prompt_tokens?: number
    completion_tokens?: number
    total_tokens?: number
  } // For done events
  finish_reason?: string // For done events
  sources?: string[]
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
