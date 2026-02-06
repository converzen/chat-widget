interface ChatMessage {
    content: string;
    role: 'USER' | 'ASSISTANT' | 'SYSTEM';
    createdAt: string;
    sources?: string[];
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
interface WidgetConfig {
    apiKey?: string;
    getToken?: () => Promise<string | TokenResponse>;
    onSaveMessages: (sessionId: string, messages: ChatMessage[]) => Promise<void>;
    onLoadMessages: () => Promise<{
        sessionId: string;
        messages: ChatMessage[];
    }>;
    headerMsg?: string;
    subheaderMsg?: string;
    initialGreeting?: string;
    promptPlaceholder?: string;
    chatUrl?: string;
    persona?: string;
    darkMode?: boolean;
    style?: WidgetStyle;
    enableMarkdown?: boolean;
}
declare class WidgetManager {
    private hostElement;
    init(config: WidgetConfig): void;
    hide(): void;
}
declare const cvzWidget: WidgetManager;
declare global {
    interface Window {
        cvzWidget: WidgetManager;
    }
}

export { type ChatMessage, type TokenResponse, type WidgetConfig, type WidgetStyle, cvzWidget as default };
