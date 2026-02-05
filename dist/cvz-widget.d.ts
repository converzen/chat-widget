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
    initialGreeting?: string;
    promptPlaceholder?: string;
    chatUrl?: string;
    persona?: string;
    style?: WidgetStyle;
}
declare function init(config: WidgetConfig): void;

export { type TokenResponse, type WidgetConfig, type WidgetStyle, init };
