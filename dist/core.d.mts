interface ChatMessage {
    content: string;
    role: 'USER' | 'ASSISTANT' | 'SYSTEM';
    createdAt: string;
    sources?: string[];
}
interface ChatPersonaIdentifier {
    alias?: string;
    persona_id?: number;
    version_tag?: string;
}
interface TokenResponse {
    token: string;
    expiresAt?: number;
}
interface WidgetStyle {
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | {
        bottom?: string;
        top?: string;
        left?: string;
        right?: string;
    };
    dialogSize?: 'small' | 'medium' | 'large' | {
        width: number;
        height: number;
    };
    frameColor?: string;
    buttonColor?: {
        normal?: string;
        hover?: string;
        open?: string;
    };
}
interface WidgetIcons {
    launcher?: string;
    close?: string;
    send?: string;
    clear?: string;
}
interface WidgetConfig {
    apiKey?: string;
    getToken?: (clientId: string | null) => Promise<string | TokenResponse>;
    persistMessages?: boolean;
    headerMsg?: string;
    subheaderMsg?: string;
    initialGreeting?: string;
    promptPlaceholder?: string;
    chatUrl?: string;
    publicId?: string;
    persona?: string | ChatPersonaIdentifier;
    darkMode?: boolean;
    style?: WidgetStyle;
    icons?: WidgetIcons;
    enableMarkdown?: boolean;
    endUserLicensing?: boolean;
    onSaveMessages?: (sessionId: string, messages: ChatMessage[]) => Promise<void>;
    onLoadMessages?: () => Promise<{
        sessionId: string;
        messages: ChatMessage[];
    }>;
    extraContext?: Record<string, unknown>;
    autoOpen?: boolean;
}

interface EndUserAuth {
    token: string;
    /** Unix seconds, matching cvz-chat's `expires_at`. */
    expiresAt: number;
    email: string;
}

/**
 * Framework-agnostic chat state machine - auth/session/streaming logic only,
 * no rendering. This is what used to live inline in App.tsx's Preact hooks;
 * it's been moved here verbatim (not rewritten) so any UI framework can
 * drive it via a thin adapter (see ../react/useChatCore.ts for the React
 * one, App.tsx for the Preact one used by the default widget).
 *
 * Shape is deliberately the same as a Zustand vanilla store / Redux store:
 * getState() + subscribe() + action methods. getState() MUST return the
 * same object reference until something actually changes - React's
 * useSyncExternalStore (and similar patterns in other frameworks) will
 * infinite-loop otherwise.
 */

interface ChatCoreState {
    messages: ChatMessage[];
    sessionId: string | null;
    isOpen: boolean;
    isLoading: boolean;
    isStreaming: boolean;
    streamingMessage: string;
    thinkingMessage: string;
    activeToolCall: string | null;
    captchaPending: boolean;
    /** Only meaningful when config.endUserLicensing is set. */
    endUserAuth: EndUserAuth | null;
    showAuthNudge: boolean;
}
interface ChatCoreStore {
    getState(): ChatCoreState;
    subscribe(listener: () => void): () => void;
    sendMessage(text: string): Promise<void>;
    /** Also kicks off client-id resolution - see the comment at its call site
     *  in App.tsx's launcher button for why that's deferred to here rather
     *  than mount. */
    open(): void;
    close(): void;
    /** Just clears - a confirm-before-clear prompt is a presentation concern. */
    clearHistory(): Promise<void>;
    authenticateEndUser(auth: EndUserAuth): void;
    deauthenticateEndUser(): void;
    /** Exposed for EndUserAuthModal's getBaseAuth prop - the widget's own
     *  tenant-level auth, independent of any end-user identity. */
    getTenantAuthToken(forceRefresh?: boolean): Promise<{
        token: string;
        type: 'apiKey' | 'bearer';
    }>;
    /** Presentation calls this (e.g. from a ref callback) once it has a real
     *  DOM node for a CAPTCHA challenge to render into. */
    setCaptchaContainer(el: HTMLElement | null): void;
    /** Mutable flag, not part of reactive state - see its one read site in the
     *  default presentation for why (suppresses a one-frame flicker between
     *  the streaming bubble and the finalized message). */
    isFinalizingRef: {
        current: boolean;
    };
}
declare function createChatCore(config: WidgetConfig): ChatCoreStore;

/**
 * Lets a caller (App.tsx) give the captcha flow a real, visible place in its
 * own UI to render into, and know when to show/hide it. Turnstile is the
 * only provider that uses `getContainer` - it needs an actual container
 * element to render into, unlike reCAPTCHA v3's containerless `execute()`.
 * A hidden or off-screen container measurably hurts Turnstile's own
 * bot-likelihood scoring (confirmed live: 0 solves out of 24 challenges run
 * off-screen) - Cloudflare's challenge appears to weigh whether it ran
 * somewhere a real visitor could ever actually see it.
 */
interface CaptchaMount {
    /** Returns the live DOM node to render into, or `null` if not ready yet. */
    getContainer?: () => HTMLElement | null;
    /** `true` right before rendering a challenge into that container, `false` once it resolves (token or error) - drives showing/hiding UI around it. */
    onPending?: (pending: boolean) => void;
}
declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: {
                action: string;
            }) => Promise<string>;
        };
        turnstile?: {
            render: (container: HTMLElement, options: {
                sitekey: string;
                action?: string;
                size?: 'normal' | 'compact' | 'flexible';
                callback: (token: string) => void;
                'error-callback'?: (error: unknown) => void;
            }) => string;
            remove: (widgetId: string) => void;
        };
    }
}

/**
 * WidgetStyle -> inline-style-object resolution, framework-agnostic (a plain
 * object structurally compatible with both React's and Preact's style prop
 * types - no framework import here on purpose, so a React presentation can
 * use these without pulling in preact/compat's CSSProperties).
 */

type StyleObject = Record<string, string | number>;
declare const DIALOG_MAX_WIDTH = "calc(100vw - 2rem)";
declare const DIALOG_MAX_HEIGHT = "calc(100dvh - 8rem)";
declare const getPositionStyles: (style?: WidgetStyle) => StyleObject;
declare const getDialogSize: (style?: WidgetStyle) => StyleObject;
declare const getFrameColor: (style?: WidgetStyle) => string;
declare const getButtonColors: (style?: WidgetStyle, isOpen?: boolean) => StyleObject;

export { type CaptchaMount, type ChatCoreState, type ChatCoreStore, type ChatMessage, type ChatPersonaIdentifier, DIALOG_MAX_HEIGHT, DIALOG_MAX_WIDTH, type EndUserAuth, type TokenResponse, type WidgetConfig, type WidgetIcons, type WidgetStyle, createChatCore, getButtonColors, getDialogSize, getFrameColor, getPositionStyles };
