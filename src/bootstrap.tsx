import { createElement } from 'preact';
import { render } from 'preact';
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

  render(createElement(App, {config}), rootContainer);
}
