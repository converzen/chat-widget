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
import { ChatMessage, ChatPersonaIdentifier } from "@/types";
export {ChatMessage, ChatPersonaIdentifier};

const HOST_ELEMENT_ID: string = 'cvz-widget-host'

// Injected at build time by tsup.config.ts (esbuild `define`) - a short
// "what am I actually looking at" tag, not user-facing. Check it via
// `window.cvzWidget.buildId` in devtools, or the one console line init()
// prints.
declare const __CVZ_BUILD_ID__: string;


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
  // Optional - omit both to use the widget's own built-in persistence
  // (localStorage, lightly obfuscated, one shared key per origin). Supply
  // your own only if you need a backend, analytics, or storage the built-in
  // default doesn't cover; existing implementations keep working unchanged.
  onSaveMessages?: (sessionId: string, messages: ChatMessage[]) => Promise<void>;
  onLoadMessages?: () => Promise<{sessionId: string, messages: ChatMessage[]}>;
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
}

class WidgetManager {
    private hostElement: HTMLDivElement | null = null;
    readonly buildId: string = __CVZ_BUILD_ID__;

    init(config: WidgetConfig) {
        if (this.hostElement) {
            console.warn('cvzWidget is already initialized.');
            return;
        }

        console.log('init: Initializing cvzWidget...', this.buildId);
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
            console.warn('hide: cvzWidget is not initialized.');
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
