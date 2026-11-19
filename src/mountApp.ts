import { createElement, options, render } from 'preact';
import type { ComponentType } from 'preact';
import styles from './styles/output.css';
import type { WidgetConfig } from './types';

// Configure Preact so async state updates from generators re-render smoothly.
// Module-level so it applies to every bundle that mounts a widget (the text
// widget and the voice widget both import this module). Harmless to set once.
if (options) {
  const _originalDebounce = options.debounceRendering;
  options.debounceRendering = (callback: () => void) => {
    requestAnimationFrame(callback);
  };
}

/**
 * Shared Shadow-DOM mounting sequence, parameterized on which component to
 * render - used by the default WidgetManager (index.ts), the voice
 * VoiceWidgetManager (voice/index.ts), and reusable by anyone building their
 * own thin manager around a different presentation. A consumer with its own
 * React/Next.js presentation doesn't need this at all - it renders as a
 * normal component in its own tree instead (no Shadow DOM isolation needed on
 * a page you already control the CSS of).
 *
 * `hostId` lets two managers (e.g. the text widget and the voice widget)
 * coexist on one page without colliding on a single host element id.
 */
export function mountApp(
  config: WidgetConfig,
  AppComponent: ComponentType<{ config: WidgetConfig }>,
  hostId = 'cvz-widget-host',
): { hostElement: HTMLDivElement; root: HTMLDivElement } {
  const hostElement = document.createElement('div');
  hostElement.id = hostId;
  document.body.appendChild(hostElement);

  const shadowRoot = hostElement.attachShadow({ mode: 'open' });

  const styleTag = document.createElement('style');
  styleTag.textContent = styles;
  shadowRoot.appendChild(styleTag);

  const preactRootElement = document.createElement('div');
  preactRootElement.id = 'cvz-root';
  shadowRoot.appendChild(preactRootElement);

  render(createElement(AppComponent, { config }), preactRootElement);
  return { hostElement, root: preactRootElement };
}
