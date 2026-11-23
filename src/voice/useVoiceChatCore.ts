/**
 * Preact adapter for the voice widget - the same shape as
 * ../useChatCoreAdapter.ts, but it creates the store WITH the WebRTC voice
 * session factory injected. This is the only module that imports
 * ./voiceSession, so all WebRTC/getUserMedia code lands exclusively in the
 * voice bundle.
 */

import { useEffect, useMemo, useSyncExternalStore } from 'preact/compat';
import { createChatCore, type ChatCoreStore } from '../core/chatCore';
import type { ChatCoreAdapterResult } from '../useChatCoreAdapter';
import type { WidgetConfig } from '../types';
import { createVoiceSession } from './voiceSession';

// The voice widget's live store, so VoiceWidgetManager can reach it for
// imperative calls like addCards(). Separate from the text widget's mounted
// store so both can coexist on one page.
let mountedVoiceStore: ChatCoreStore | null = null;

export function getMountedVoiceStore(): ChatCoreStore | null {
  return mountedVoiceStore;
}

export function useVoiceChatCore(config: WidgetConfig): ChatCoreAdapterResult {
  const store = useMemo(
    () => createChatCore(config, { voiceSessionFactory: createVoiceSession }),
    [config],
  );
  const state = useSyncExternalStore(store.subscribe, store.getState);

  useEffect(() => {
    mountedVoiceStore = store;
    return () => {
      if (mountedVoiceStore === store) mountedVoiceStore = null;
      // Also tears down any active voice session (dispose() calls stopVoice()).
      store.dispose();
    };
  }, [store]);

  return {
    ...state,
    sendMessage: store.sendMessage,
    open: store.open,
    close: store.close,
    clearHistory: store.clearHistory,
    authenticateEndUser: store.authenticateEndUser,
    deauthenticateEndUser: store.deauthenticateEndUser,
    getTenantAuthToken: store.getTenantAuthToken,
    setCaptchaContainer: store.setCaptchaContainer,
    addCards: store.addCards,
    startVoice: store.startVoice,
    stopVoice: store.stopVoice,
    setVoiceTts: store.setVoiceTts,
    isFinalizingRef: store.isFinalizingRef,
    dispose: store.dispose,
  };
}
