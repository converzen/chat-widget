// src/index.ts
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
        console.warn('ConverZent Widget is already initialized.');
        return;
    }

    const hostElement = document.createElement('div');
    hostElement.id = 'cvz-widget-host'; // Updated to CVZ
    document.body.appendChild(hostElement);

    const shadowRoot = hostElement.attachShadow({ mode: 'open' });

    const styleTag = document.createElement('style');
    styleTag.textContent = styles;
    shadowRoot.appendChild(styleTag);

    const reactRootElement = document.createElement('div');
    reactRootElement.id = 'cvz-root'; // Updated to CVZ
    shadowRoot.appendChild(reactRootElement);

    const root = createRoot(reactRootElement);
    root.render(React.createElement(App, { config }));

    isInitialized = true;
}

// THIS IS THE BRIDGE:
// It attaches your 'init' function to the global window object.
if (typeof window !== 'undefined') {
    (window as any).CVZWidget = { init };
}