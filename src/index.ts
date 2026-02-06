import { createElement, options } from 'preact';
import { render } from 'preact';
import App from './App';

// Configure Preact to ensure state updates trigger re-renders
// This helps with async state updates from generators
if (options) {
  // Ensure debounceRendering doesn't interfere with updates
  const originalDebounce = options.debounceRendering;
  options.debounceRendering = (callback: () => void) => {
    // Use requestAnimationFrame for smooth rendering
    requestAnimationFrame(callback);
  };
}
import styles from './styles/output.css';
import { ChatMessage } from "@/types";
export {ChatMessage};

const HOST_ELEMENT_ID: string = 'cvz-widget-host'

export interface TokenResponse {
  token: string;
  expiresAt?: number; // Unix timestamp in milliseconds, optional
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

export interface WidgetConfig {
  apiKey?: string; // Direct API key (for insecure/demo mode) - uses X-API-Key header
  getToken?: () => Promise<string | TokenResponse>; // Returns token string or TokenResponse with expiration
  onSaveMessages: (sessionId: string, messages: ChatMessage[]) => Promise<void>;
  onLoadMessages: () => Promise<{sessionId: string, messages: ChatMessage[]}>;
  headerMsg?: string;
  subheaderMsg?: string; // Optional subheader text below the title (default: "We typically reply in a few minutes")
  initialGreeting?: string;
  promptPlaceholder?: string;
  chatUrl?: string; // Optional - defaults to 'https://chat.converzent.de'
  persona?: string; // Optional persona identifier
  darkMode?: boolean; // Optional - enable dark mode theme (default: false)
  style?: WidgetStyle; // Optional styling customization
  enableMarkdown?: boolean; // Optional - enable markdown rendering in messages (default: false). Requires markdown build.
}

class WidgetManager {
    private hostElement: HTMLDivElement | null = null;

    init(config: WidgetConfig) {
        if (this.hostElement) {
            console.warn('cvzWidget is already initialized.');
            return;
        }

        console.log('init: Initializing cvzWidget...');
        console.log('CSS Length:', styles.length); // Debug log

        // Create the host element
        const hostElement = document.createElement('div');
        hostElement.id = HOST_ELEMENT_ID;
        document.body.appendChild(hostElement);


        // Attach Shadow DOM
        const shadowRoot = hostElement.attachShadow({mode: 'open'});

        // Inject Styles
        const styleTag = document.createElement('style');
        styleTag.textContent = styles;
        shadowRoot.appendChild(styleTag);

        // Create Preact Root
        const preactRootElement = document.createElement('div');
        preactRootElement.id = 'cvz-root';
        shadowRoot.appendChild(preactRootElement);

        // Render the App
        render(createElement(App, {config}), preactRootElement);
        this.hostElement = hostElement;
    }

    // ... methods ...

    hide() {
        if (!this.hostElement) {
            console.warn('destroy: cvzWidget is not initialized.');
            return;
        }

        if (this.hostElement) {
            this.hostElement.remove();
            this.hostElement = null;
        }
    }
}

// Create the single instance here
const cvzWidget = new WidgetManager();

// Expose it globally
declare global {
    interface Window {
        cvzWidget: WidgetManager;
    }
}

if (typeof window !== 'undefined') {
    (window as any).cvzWidget = cvzWidget;
}

// Export it as the default
export default cvzWidget;
