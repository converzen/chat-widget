import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import styles from './styles/output.css';
import { ChatMessage } from "@/types";

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
  initialGreeting?: string;
  promptPlaceholder?: string;
  chatUrl?: string; // Optional - defaults to 'https://chat.converzent.de'
  persona?: string; // Optional persona identifier
  style?: WidgetStyle; // Optional styling customization
}

let isInitialized = false;

export function init(config: WidgetConfig) {
  if (isInitialized) {
    console.warn('GMCWidget is already initialized.');
    return;
  }

  console.log('Initializing GMCWidget...');
  console.log('CSS Length:', styles.length); // Debug log

  // Create the host element
  const hostElement = document.createElement('div');
  hostElement.id = 'cvz-widget-host';
  document.body.appendChild(hostElement);

  // Attach Shadow DOM
  const shadowRoot = hostElement.attachShadow({ mode: 'open' });

  // Inject Styles
  const styleTag = document.createElement('style');
  styleTag.textContent = styles;
  shadowRoot.appendChild(styleTag);

  // Create React Root
  const reactRootElement = document.createElement('div');
  reactRootElement.id = 'cvz-root';
  shadowRoot.appendChild(reactRootElement);

  // Render the App
  const root = createRoot(reactRootElement);
  root.render(React.createElement(App, { config }));

  isInitialized = true;
}
