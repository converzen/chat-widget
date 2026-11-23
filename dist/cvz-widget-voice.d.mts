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
type VoiceStatus = 'idle' | 'connecting' | 'connected' | 'failed' | 'stopped';
type VoiceStage = 'idle' | 'listening' | 'transcribing' | 'thinking' | 'speaking';
type VoiceServerEvent = {
    type: 'status';
    stage: 'listening' | 'transcribing' | 'thinking' | 'speaking';
} | {
    type: 'input';
    text: string;
    emotion?: unknown;
} | {
    type: 'response';
    text: string;
    session_id: string;
} | {
    type: 'error';
    message: string;
} | {
    type: 'duck';
    gain: number;
} | {
    type: 'unduck';
} | {
    type: 'interrupted';
} | {
    type: 'tts_state';
    enabled: boolean;
};
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
}

declare class VoiceWidgetManager {
    private hostElement;
    private root;
    readonly buildId: string;
    init(config: WidgetConfig): void;
    addCards(cards: ChatCard[]): void;
    hide(): void;
}
declare const cvzVoiceWidget: VoiceWidgetManager;
declare global {
    interface Window {
        cvzVoiceWidget: VoiceWidgetManager;
    }
}

export { type AssistantMessageEvent, type ChatCard, type ChatMessage, type ChatPersonaIdentifier, type TokenResponse, type VoiceServerEvent, type VoiceStage, type VoiceStatus, type WidgetConfig, type WidgetIcons, type WidgetStyle, cvzVoiceWidget as default };
