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
import { ChatMessage, ChatPersonaIdentifier, TokenResponse, WidgetConfig, WidgetStyle, WidgetIcons } from "@/types";
export {ChatMessage, ChatPersonaIdentifier};
// WidgetConfig/WidgetStyle/WidgetIcons/TokenResponse now live in ./types (see
// core/chatCore.ts for why) - re-exported here so this stays a
// backward-compatible import site for existing consumers of the default entry.
export type {TokenResponse, WidgetConfig, WidgetStyle, WidgetIcons};

const HOST_ELEMENT_ID: string = 'cvz-widget-host'

// Injected at build time by tsup.config.ts (esbuild `define`) - a short
// "what am I actually looking at" tag, not user-facing. Check it via
// `window.cvzWidget.buildId` in devtools, or the one console line init()
// prints.
declare const __CVZ_BUILD_ID__: string;

/**
 * Shared Shadow-DOM mounting sequence, parameterized on which component to
 * render - used by the default WidgetManager below, and reusable by anyone
 * building their own thin manager around a different presentation. A
 * consumer with its own React/Next.js presentation doesn't need this at all
 * - it renders as a normal component in its own tree instead (no Shadow DOM
 * isolation needed on a page you already control the CSS of).
 */
function mountApp(config: WidgetConfig, AppComponent: typeof App): HTMLDivElement {
    const hostElement = document.createElement('div');
    hostElement.id = HOST_ELEMENT_ID;
    document.body.appendChild(hostElement);

    const shadowRoot = hostElement.attachShadow({mode: 'open'});

    const styleTag = document.createElement('style');
    styleTag.textContent = styles;
    shadowRoot.appendChild(styleTag);

    const preactRootElement = document.createElement('div');
    preactRootElement.id = 'cvz-root';
    shadowRoot.appendChild(preactRootElement);

    render(createElement(AppComponent, {config}), preactRootElement);
    return hostElement;
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

        this.hostElement = mountApp(config, App);
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
