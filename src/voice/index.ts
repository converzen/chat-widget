import { render } from 'preact';
import { mountApp } from '../mountApp';
import VoiceApp from './VoiceApp';
import { getMountedVoiceStore } from './useVoiceChatCore';
import {
  ChatMessage,
  ChatPersonaIdentifier,
  TokenResponse,
  WidgetConfig,
  WidgetStyle,
  WidgetIcons,
  ChatCard,
  AssistantMessageEvent,
} from '@/types';
export { ChatMessage, ChatPersonaIdentifier };
export type { ChatCard, AssistantMessageEvent };
export type { TokenResponse, WidgetConfig, WidgetStyle, WidgetIcons };
export type { VoiceStatus, VoiceStage, VoiceServerEvent } from '@/types';

// Injected at build time by tsup.config.ts (esbuild `define`).
declare const __CVZ_BUILD_ID__: string;

// Distinct host id + global from the text widget, so both can be loaded on
// one page without colliding.
const VOICE_HOST_ELEMENT_ID = 'cvz-voice-widget-host';

class VoiceWidgetManager {
  private hostElement: HTMLDivElement | null = null;
  private root: HTMLDivElement | null = null;
  readonly buildId: string = __CVZ_BUILD_ID__;

  init(config: WidgetConfig) {
    if (this.hostElement) {
      console.warn('cvzVoiceWidget is already initialized.');
      return;
    }

    console.log('init: Initializing cvzVoiceWidget...', this.buildId);

    ({ hostElement: this.hostElement, root: this.root } = mountApp(
      config,
      VoiceApp,
      VOICE_HOST_ELEMENT_ID,
    ));
  }

  // Attaches cards to the latest assistant message - same as the text widget.
  addCards(cards: ChatCard[]) {
    const store = getMountedVoiceStore();
    if (!store) {
      console.warn('addCards: cvzVoiceWidget is not initialized.');
      return;
    }
    store.addCards(cards);
  }

  hide() {
    if (!this.hostElement) {
      console.warn('hide: cvzVoiceWidget is not initialized.');
      return;
    }

    // Unmount first so effects clean up (aborting a stream, tearing down the
    // voice session) before the host goes.
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

const cvzVoiceWidget = new VoiceWidgetManager();

declare global {
  interface Window {
    cvzVoiceWidget: VoiceWidgetManager;
  }
}

if (typeof window !== 'undefined') {
  (window as any).cvzVoiceWidget = cvzVoiceWidget;
}

export default cvzVoiceWidget;
