import { ComponentType } from 'preact';

interface ChatMessage {
    content: string;
    role: 'USER' | 'ASSISTANT' | 'SYSTEM';
    createdAt: string;
    sources?: string[];
    cards?: ChatCard[];
    interrupted?: boolean;
}
interface ChatCard {
    title: string;
    url: string;
    description?: string;
    imageUrl?: string;
    merchant?: string;
    sponsored?: boolean;
}
interface AssistantMessageEvent {
    question: string;
    answer: string;
    sessionId: string;
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
    historyKey?: string;
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
    onUserMessage?: (event: {
        question: string;
        sessionId: string | null;
    }) => void;
    onAssistantMessage?: (event: AssistantMessageEvent) => ChatCard[] | void | Promise<ChatCard[] | void>;
    sponsoredLabel?: string;
    voiceButtonLabel?: string;
    voiceAutoStart?: boolean;
    voiceInterruptedLabel?: string;
    voiceMuteLabel?: string;
    voiceUnmuteLabel?: string;
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
declare function mountApp(config: WidgetConfig, AppComponent: ComponentType<{
    config: WidgetConfig;
}>, hostId?: string): {
    hostElement: HTMLDivElement;
    root: HTMLDivElement;
};

declare class WidgetManager {
    private hostElement;
    private root;
    readonly buildId: string;
    init(config: WidgetConfig): void;
    addCards(cards: ChatCard[]): void;
    hide(): void;
}
declare const cvzWidget: WidgetManager;
declare global {
    interface Window {
        cvzWidget: WidgetManager;
    }
}

export { type AssistantMessageEvent, type ChatCard, type ChatMessage, type ChatPersonaIdentifier, type TokenResponse, type WidgetConfig, type WidgetIcons, type WidgetStyle, cvzWidget as default, mountApp };
