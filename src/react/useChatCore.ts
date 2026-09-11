/**
 * Real React hook for @converzen/chat-widget/react - built on React's own
 * useSyncExternalStore (React 18+), so this works natively in Next.js and
 * any other React-based framework. No Preact anywhere in this file or its
 * dependency tree.
 *
 * Must be called from a Client Component - createChatCore touches
 * localStorage/fetch streaming/DOM, none of which exist during SSR. The
 * getServerSnapshot below exists only to give React's initial server-render
 * pass (which Next.js's App Router still does even for Client Components) a
 * safe, stable value to hydrate from.
 *
 * IMPORTANT: `config` must be a stable reference across renders (memoize it
 * with useMemo, or define it outside the component) - a new object literal
 * on every render creates a brand-new store every render, discarding all
 * chat state. This is the same footgun as any `useEffect(fn, [config])`
 * dependency array.
 */

import { useMemo, useSyncExternalStore } from 'react';
import { createChatCore, type ChatCoreState, type ChatCoreStore } from '../core/chatCore';
import type { WidgetConfig } from '../types';

export type UseChatCoreResult = ChatCoreState & Omit<ChatCoreStore, 'getState' | 'subscribe'>;

const SERVER_SNAPSHOT: ChatCoreState = {
  messages: [],
  sessionId: null,
  isOpen: false,
  isLoading: false,
  isStreaming: false,
  streamingMessage: '',
  thinkingMessage: '',
  activeToolCall: null,
  captchaPending: false,
  endUserAuth: null,
  showAuthNudge: false,
};

export function useChatCore(config: WidgetConfig): UseChatCoreResult {
  const store = useMemo(() => createChatCore(config), [config]);
  const state = useSyncExternalStore(store.subscribe, store.getState, () => SERVER_SNAPSHOT);

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
