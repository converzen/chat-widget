/**
 * @converzen/chat-widget/react - a real React hook (React 18+, works
 * natively in Next.js and any other React-based framework) for building a
 * fully custom chat presentation on top of the shared core. See useChatCore
 * for usage notes (config must be a stable reference; must be called from a
 * Client Component).
 */

export { useChatCore, type UseChatCoreResult } from './useChatCore';
export type { WidgetConfig, WidgetStyle, WidgetIcons, TokenResponse, ChatMessage, ChatPersonaIdentifier } from '../types';
export { getPositionStyles, getDialogSize, getFrameColor, getButtonColors, DIALOG_MAX_WIDTH, DIALOG_MAX_HEIGHT } from '../styleHelpers';
