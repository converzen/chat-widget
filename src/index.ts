import { render } from 'preact';
import App from './App';
import { mountApp } from './mountApp';
import { ChatMessage, ChatPersonaIdentifier, TokenResponse, WidgetConfig, WidgetStyle, WidgetIcons, ChatCard, AssistantMessageEvent } from "@/types";
import { getMountedStore } from './useChatCoreAdapter';
export {ChatMessage, ChatPersonaIdentifier};
export type {ChatCard, AssistantMessageEvent};
// WidgetConfig/WidgetStyle/WidgetIcons/TokenResponse now live in ./types (see
// core/chatCore.ts for why) - re-exported here so this stays a
// backward-compatible import site for existing consumers of the default entry.
export type {TokenResponse, WidgetConfig, WidgetStyle, WidgetIcons};
// The shared Shadow-DOM mount now lives in ./mountApp (side-effect-free, so
// the voice bundle can reuse it without also running this file's
// window.cvzWidget registration). Re-exported for backward compatibility.
export { mountApp };

// Injected at build time by tsup.config.ts (esbuild `define`) - a short
// "what am I actually looking at" tag, not user-facing. Check it via
// `window.cvzWidget.buildId` in devtools, or the one console line init()
// prints.
declare const __CVZ_BUILD_ID__: string;

class WidgetManager {
    private hostElement: HTMLDivElement | null = null;
    private root: HTMLDivElement | null = null;
    readonly buildId: string = __CVZ_BUILD_ID__;

    init(config: WidgetConfig) {
        if (this.hostElement) {
            console.warn('cvzWidget is already initialized.');
            return;
        }

        console.log('init: Initializing cvzWidget...', this.buildId);

        ({ hostElement: this.hostElement, root: this.root } = mountApp(config, App));
    }

    // Attaches cards (e.g. product recommendations) to the latest assistant
    // message - the imperative alternative to returning them from
    // config.onAssistantMessage. See ChatCard for the shape.
    addCards(cards: ChatCard[]) {
        const store = getMountedStore();
        if (!store) {
            console.warn('addCards: cvzWidget is not initialized.');
            return;
        }
        store.addCards(cards);
    }

    hide() {
        if (!this.hostElement) {
            console.warn('hide: cvzWidget is not initialized.');
            return;
        }

        // Unmount first, so effects clean up (aborting a still-streaming
        // reply) before the host goes - a hide() followed by init() with a
        // different config (e.g. another persona) then starts truly fresh.
        if (this.root) {
            render(null, this.root);
            this.root = null;
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
