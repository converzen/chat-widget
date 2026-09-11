/**
 * @converzen/chat-widget/core - the framework-agnostic chat state machine
 * and its non-UI dependencies. No Preact, no React, no JSX - safe to import
 * from anywhere, including to build an adapter for a UI framework other
 * than the ones this package ships adapters for (see ../react/index.ts).
 */

export { createChatCore, type ChatCoreState, type ChatCoreStore } from './chatCore';
export type { WidgetConfig, WidgetStyle, WidgetIcons, TokenResponse, ChatMessage, ChatPersonaIdentifier } from '../types';
export type { CaptchaMount } from '../clientId';
export type { EndUserAuth } from '../endUserAuth';
export { getPositionStyles, getDialogSize, getFrameColor, getButtonColors, DIALOG_MAX_WIDTH, DIALOG_MAX_HEIGHT } from '../styleHelpers';
