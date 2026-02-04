import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// This import works because of the 'text' loader in tsup
import tailwindStyles from './styles/global.css'; 

export function mountWidget(config: any) {
  const host = document.createElement('div');
  const shadow = host.attachShadow({ mode: 'open' });

  // Create a style element and drop the string in
  const styleSheet = document.createElement('style');
  styleSheet.textContent = tailwindStyles;
  shadow.appendChild(styleSheet);

  const rootContainer = document.createElement('div');
  shadow.appendChild(rootContainer);

  const root = createRoot(rootContainer);
  root.render(<App config={config} />);
}
