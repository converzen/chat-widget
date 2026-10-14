interface ChatMessage {
    content: string;
    role: 'USER' | 'ASSISTANT' | 'SYSTEM';
    createdAt: string;
    sources?: string[];
    cards?: ChatCard[];
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
}

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

export { type AssistantMessageEvent, type ChatCard, type ChatMessage, type ChatPersonaIdentifier, type TokenResponse, type WidgetConfig, type WidgetIcons, type WidgetStyle, cvzWidget as default };
