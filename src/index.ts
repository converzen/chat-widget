import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import styles from './styles/global.css';

export interface WidgetConfig {
  getToken: () => Promise<string>;
  onSaveMessages: (messages: any[]) => Promise<void>;
  onLoadMessages: () => Promise<any[]>;
}

let isInitialized = false;

export function init(config: WidgetConfig) {
  if (isInitialized) {
    console.warn('GMCWidget is already initialized.');
    return;
  }

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
