/**
 * Preact adapter used only by the default widget's own App.tsx - the
 * default entry's bundle already aliases react/react-dom to preact/compat
 * (see tsup.config.ts, for react-markdown), and preact/compat re-exports
 * preact/hooks plus its own useSyncExternalStore, so this is the exact same
 * shape as ../react/useChatCore.ts, just sourced from preact/compat instead
 * of react. Not part of the public package surface.
 */

import { useMemo, useSyncExternalStore } from 'preact/compat';
import { createChatCore, type ChatCoreState, type ChatCoreStore } from './core/chatCore';
import type { WidgetConfig } from './types';

export type ChatCoreAdapterResult = ChatCoreState & Omit<ChatCoreStore, 'getState' | 'subscribe'>;

export function useChatCoreAdapter(config: WidgetConfig): ChatCoreAdapterResult {
  const store = useMemo(() => createChatCore(config), [config]);
  // No getServerSnapshot here - preact/compat's shim (unlike React's real
  // useSyncExternalStore) only ever runs client-side, no SSR concept to
  // reconcile against, which is fine: the default widget only ever mounts
  // client-side via WidgetManager.init() in the first place.
  const state = useSyncExternalStore(store.subscribe, store.getState);

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
    isFinalizingRef: store.isFinalizingRef,
  };
}
