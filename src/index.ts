import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import styles from './styles/output.css';
import {ChatMessage} from "@/types";

export interface WidgetConfig {
  apiKey?: string,
  getToken?: () => Promise<string>;
  onSaveMessages: (messages: ChatMessage[]) => Promise<void>;
  onLoadMessages: () => Promise<ChatMessage[]>;
  headerMsg?: string;
  initialGreeting?: string;
  promptPlaceholder?: string;
  chatUrl: string; // Required for streaming
  persona?: string; // Optional persona identifier
  authType?: 'apiKey' | 'bearer'; // Authentication method, defaults to 'bearer'
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
