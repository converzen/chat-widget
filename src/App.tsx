
import { createElement } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import type { ComponentChildren, RefObject } from 'preact';
import { WidgetConfig, WidgetStyle, WidgetIcons, ChatMessage } from './types';
import { isEndUserAuthValid, loadLastKnownEmail } from './endUserAuth';
import { EndUserAuthModal } from './EndUserAuthModal';
import { useChatCoreAdapter } from './useChatCoreAdapter';
import { getPositionStyles, getDialogSize, getFrameColor, getButtonColors } from './styleHelpers';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Injected at build time (esbuild `define` in tsup.config.ts) - see index.ts.
// Declared again here since it's an ambient const scoped per-module.
declare const __CVZ_BUILD_ID__: string;
// Just the commit hash for display - __CVZ_BUILD_ID__ is `<hash>-<iso-timestamp>`,
// and the timestamp half is too long to sit next to "Powered by ConverZen".
const CVZ_BUILD_TAG = __CVZ_BUILD_ID__.split('-')[0];

// Only used here for EndUserAuthModal's baseUrl fallback prop - chatCore.ts
// has its own copy of this same constant for the same reason a single
// string constant isn't worth sharing a module over.
const DEFAULT_CHAT_API_URL = 'https://chat.converzen.de';

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cvz-w-6 cvz-h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>
);

const XMarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cvz-w-6 cvz-h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PaperAirplaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cvz-w-5 cvz-h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cvz-w-5 cvz-h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

// Renders a consumer-supplied icon override (raw SVG/HTML markup) in place of a
// built-in icon component, preserving the built-in's sizing when no override is given.
const IconSlot = ({ custom, fallback, className }: { custom?: string; fallback: ComponentChildren; className: string }) => (
  custom
    ? <span className={className} dangerouslySetInnerHTML={{ __html: custom }} />
    : fallback
);

// --- Types ---

interface AppProps {
  config: WidgetConfig;
}

// Type alias for Preact compatibility
type ReactNode = ComponentChildren;

// --- Components ---

const ChatHeader = ({
  title,
  subtitle,
  onClose,
  onClear,
  darkMode,
  icons,
  authControl,
}: {
  title: string;
  subtitle?: string;
  onClose: () => void;
  onClear: () => void;
  darkMode?: boolean;
  icons?: WidgetIcons;
  authControl?: ReactNode;
}) => (
  <div className={`cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start ${
    darkMode
      ? 'cvz-bg-gradient-to-b cvz-from-gray-900 cvz-to-gray-800 cvz-text-white'
      : 'cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white'
  }`}>
    <div className="cvz-flex cvz-items-center cvz-gap-3">
      <div className="cvz-relative">
        <div className={`cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 ${
          darkMode ? 'cvz-border-gray-800' : 'cvz-border-blue-600'
        }`}></div>
        <div className="cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"></div>
      </div>
      <div>
        <h3 className="cvz-font-bold cvz-text-lg cvz-leading-tight">{title}</h3>
        {subtitle && <p className={`cvz-text-xs cvz-mt-0.5 ${
          darkMode ? 'cvz-text-gray-300' : 'cvz-text-blue-100'
        }`}>{subtitle}</p>}
      </div>
    </div>
    <div className="cvz-flex cvz-gap-2 cvz-items-center">
      {authControl}
      <button
        onClick={onClear}
        className={`cvz-transition-colors cvz-p-1 cvz-rounded-md ${
          darkMode
            ? 'cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50'
            : 'cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50'
        }`}
        title="Clear History"
      >
        <IconSlot custom={icons?.clear} fallback={<TrashIcon />} className="cvz-w-5 cvz-h-5" />
      </button>
      <button
        onClick={onClose}
        className={`cvz-transition-colors cvz-p-1 cvz-rounded-md ${
          darkMode
            ? 'cvz-text-gray-400 cvz-hover:cvz-text-white cvz-hover:cvz-bg-gray-700/50'
            : 'cvz-text-blue-200 cvz-hover:cvz-text-white cvz-hover:cvz-bg-blue-600/50'
        }`}
        title="Close Chat"
      >
        <IconSlot custom={icons?.close} fallback={<XMarkIcon />} className="cvz-w-6 cvz-h-6" />
      </button>
    </div>
  </div>
);

// MessageContent component that renders markdown (static import for markdown build)
const MessageContent = ({
  content,
  enableMarkdown,
  darkMode
}: {
  content: string;
  enableMarkdown?: boolean;
  darkMode?: boolean;
}) => {
  if (enableMarkdown) {
    return (
      <div className="cvz-markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }: any) => <p className={`cvz-mb-2 cvz-last:cvz-mb-0 ${darkMode ? 'cvz-text-gray-100' : ''}`}>{children}</p>,
            h1: ({ children }: any) => <h1 className={`cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0 ${darkMode ? 'cvz-text-gray-100' : ''}`}>{children}</h1>,
            h2: ({ children }: any) => <h2 className={`cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0 ${darkMode ? 'cvz-text-gray-100' : ''}`}>{children}</h2>,
            h3: ({ children }: any) => <h3 className={`cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0 ${darkMode ? 'cvz-text-gray-100' : ''}`}>{children}</h3>,
            ul: ({ children }: any) => <ul className={`cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1 ${darkMode ? 'cvz-text-gray-100' : ''}`}>{children}</ul>,
            ol: ({ children }: any) => <ol className={`cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1 ${darkMode ? 'cvz-text-gray-100' : ''}`}>{children}</ol>,
            li: ({ children }: any) => <li className="cvz-ml-2">{children}</li>,
            code: ({ children }: any) => <code className={`cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono ${
              darkMode ? 'cvz-bg-gray-700 cvz-text-gray-100' : 'cvz-bg-gray-100'
            }`}>{children}</code>,
            pre: ({ children }: any) => <pre className={`cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono ${
              darkMode ? 'cvz-bg-gray-700 cvz-text-gray-100' : 'cvz-bg-gray-100'
            }`}>{children}</pre>,
            blockquote: ({ children }: any) => <blockquote className={`cvz-border-l-4 cvz-pl-3 cvz-italic cvz-mb-2 ${
              darkMode ? 'cvz-border-gray-600 cvz-text-gray-300' : 'cvz-border-gray-300'
            }`}>{children}</blockquote>,
            strong: ({ children }: any) => <strong className="cvz-font-bold">{children}</strong>,
            em: ({ children }: any) => <em className="cvz-italic">{children}</em>,
            a: ({ children, href }: any) => <a href={href} className={`cvz-underline ${
              darkMode
                ? 'cvz-text-blue-400 cvz-hover:cvz-text-blue-300'
                : 'cvz-text-blue-600 cvz-hover:cvz-text-blue-800'
            }`} target="_blank" rel="noopener noreferrer">{children}</a>,
            table: ({ children }: any) => (
              <div className="cvz-overflow-x-auto cvz-mb-2">
                <table className={`cvz-w-full cvz-text-sm cvz-border-collapse ${
                  darkMode ? 'cvz-text-gray-100' : ''
                }`}>{children}</table>
              </div>
            ),
            thead: ({ children }: any) => <thead className={`${
              darkMode ? 'cvz-bg-gray-700' : 'cvz-bg-gray-100'
            }`}>{children}</thead>,
            tbody: ({ children }: any) => <tbody>{children}</tbody>,
            tr: ({ children }: any) => <tr className={`cvz-border-b ${
              darkMode ? 'cvz-border-gray-600' : 'cvz-border-gray-200'
            }`}>{children}</tr>,
            th: ({ children }: any) => <th className={`cvz-px-3 cvz-py-1.5 cvz-text-left cvz-font-semibold cvz-border ${
              darkMode ? 'cvz-border-gray-600' : 'cvz-border-gray-300'
            }`}>{children}</th>,
            td: ({ children }: any) => <td className={`cvz-px-3 cvz-py-1.5 cvz-border ${
              darkMode ? 'cvz-border-gray-600' : 'cvz-border-gray-300'
            }`}>{children}</td>,
          } as any}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }
  return createElement('span', null, content);
};

const ChatMessages = ({
  messages,
  isStreaming,
  streamingMessage,
  thinkingMessage,
  activeToolCall,
  isFinalizingRef,
  messagesEndRef,
  enableMarkdown,
  darkMode,
  icons
}: {
  messages: ChatMessage[];
  isStreaming: boolean;
  streamingMessage: string;
  thinkingMessage?: string;
  activeToolCall?: string | null;
  isFinalizingRef: RefObject<boolean>;
  messagesEndRef: RefObject<HTMLDivElement>;
  enableMarkdown?: boolean;
  darkMode?: boolean;
  icons?: WidgetIcons;
}) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  // Check if user is near bottom to determine auto-scroll
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShouldAutoScroll(isNearBottom);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll when streaming or new messages arrive
  useEffect(() => {
    if (shouldAutoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, streamingMessage, thinkingMessage, activeToolCall, shouldAutoScroll, messagesEndRef]);

  return (
    <div
      ref={messagesContainerRef}
      className={`cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-space-y-4 ${
        darkMode
          ? 'cvz-bg-gray-900 cvz-scrollbar-dark'
          : 'cvz-bg-gray-50 cvz-scrollbar-light'
      }`}
    >
      {messages.length === 0 && !streamingMessage && (
        <div className={`cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-space-y-2 ${
          darkMode ? 'cvz-text-gray-500' : 'cvz-text-gray-400'
        }`}>
          <IconSlot custom={icons?.launcher} fallback={<ChatIcon />} className="cvz-w-6 cvz-h-6" />
          <p className="cvz-text-sm">Start a conversation</p>
        </div>
      )}
      {messages.map((msg) => (
        <div
          key={msg.createdAt.toString()}
          className={`cvz-flex ${msg.role === 'USER' ? 'cvz-justify-end' : 'cvz-justify-start'}`}
        >
          <div
            className={`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-text-sm cvz-shadow-sm ${
              msg.role === 'USER'
                ? darkMode
                  ? 'cvz-bg-blue-500 cvz-text-white cvz-rounded-br-none'
                  : 'cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none'
                : darkMode
                  ? 'cvz-bg-gray-800 cvz-text-gray-100 cvz-border cvz-border-gray-700 cvz-rounded-bl-none'
                  : 'cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none'
            }`}
          >
            <MessageContent content={msg.content} enableMarkdown={enableMarkdown} darkMode={darkMode} />
          </div>
        </div>
      ))}
      {isStreaming && streamingMessage && !isFinalizingRef.current && (
        <div className="cvz-flex cvz-justify-start">
          <div className={`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-border ${
            darkMode
              ? 'cvz-bg-gray-800 cvz-text-gray-100 cvz-border-gray-700'
              : 'cvz-bg-white cvz-text-gray-800 cvz-border-gray-100'
          }`}>
            {streamingMessage}
          </div>
        </div>
      )}
      {isStreaming && !streamingMessage && (
        <div className="cvz-flex cvz-justify-start">
          <div className={`cvz-max-w-[85%] cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm cvz-border ${
            darkMode
              ? 'cvz-bg-gray-800 cvz-border-gray-700'
              : 'cvz-bg-white cvz-border-gray-100'
          }`}>
            {activeToolCall ? (
              <span className={`cvz-text-sm cvz-italic ${darkMode ? 'cvz-text-gray-400' : 'cvz-text-gray-500'}`}>
                Calling {activeToolCall}&hellip;
              </span>
            ) : thinkingMessage ? (
              <span className={`cvz-text-sm cvz-italic ${darkMode ? 'cvz-text-gray-400' : 'cvz-text-gray-500'}`}>
                {thinkingMessage}
              </span>
            ) : (
              <div className="cvz-flex cvz-space-x-1">
                <div className={`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${
                  darkMode ? 'cvz-bg-gray-500' : 'cvz-bg-gray-400'
                }`} style={{ animationDelay: '0ms' }}></div>
                <div className={`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${
                  darkMode ? 'cvz-bg-gray-500' : 'cvz-bg-gray-400'
                }`} style={{ animationDelay: '150ms' }}></div>
                <div className={`cvz-w-2 cvz-h-2 cvz-rounded-full cvz-animate-bounce ${
                  darkMode ? 'cvz-bg-gray-500' : 'cvz-bg-gray-400'
                }`} style={{ animationDelay: '300ms' }}></div>
              </div>
            )}
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

const ChatInput = ({
  value,
  onChange,
  onSubmit,
  isLoading,
  placeholder,
  darkMode,
  icons
}: {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (e?: Event) => void;
  isLoading: boolean;
  placeholder: string;
  darkMode?: boolean;
  icons?: WidgetIcons;
}) => (
  <form onSubmit={onSubmit} className={`cvz-p-4 cvz-border-t ${
    darkMode
      ? 'cvz-bg-gray-800 cvz-border-gray-700'
      : 'cvz-bg-white cvz-border-gray-100'
  }`}>
    <div className="cvz-relative cvz-flex cvz-items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        placeholder={placeholder}
        className={`cvz-w-full cvz-border cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-ring-1 cvz-transition-all ${
          darkMode
            ? 'cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100 cvz-placeholder-gray-400 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500'
            : 'cvz-bg-gray-50 cvz-border-gray-200 cvz-text-gray-900 cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-blue-500'
        }`}
      />
      <button
        type="submit"
        disabled={!value.trim() || isLoading}
        className={`cvz-absolute cvz-right-2 cvz-p-2 cvz-text-white cvz-rounded-full cvz-disabled:cvz-opacity-50 cvz-transition-colors cvz-shadow-sm ${
          darkMode
            ? 'cvz-bg-blue-500 cvz-hover:cvz-bg-blue-600 cvz-disabled:cvz-hover:cvz-bg-blue-500'
            : 'cvz-bg-blue-600 cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-hover:cvz-bg-blue-600'
        }`}
      >
        <IconSlot custom={icons?.send} fallback={<PaperAirplaneIcon />} className="cvz-w-5 cvz-h-5" />
      </button>
    </div>
    <div className="cvz-text-center cvz-mt-2">
      <p className={`cvz-text-[10px] ${
        darkMode ? 'cvz-text-gray-500' : 'cvz-text-gray-400'
      }`}>
        Powered by ConverZen
        {/* Inconspicuous build tag - which commit + build actually produced
            this bundle, for verifying a deploy actually took effect. Not
            meant to be noticed; just findable when you go looking. */}
        <span className={darkMode ? 'cvz-text-gray-600' : 'cvz-text-gray-300'}> · {CVZ_BUILD_TAG}</span>
      </p>
    </div>
  </form>
);

// --- Main App ---
// All auth/session/streaming logic lives in ./core/chatCore.ts now, reached
// here via ./useChatCoreAdapter.ts (a thin preact/compat useSyncExternalStore
// binding). This component is presentation only.

const App = ({ config }: AppProps) => {
  const core = useChatCoreAdapter(config);
  const [inputValue, setInputValue] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e?: Event) => {
    e?.preventDefault();
    if (!inputValue.trim() || core.isStreaming) return;
    const text = inputValue;
    setInputValue('');
    await core.sendMessage(text);
  };

  const handleClearHistory = async () => {
    if (window.confirm('Are you sure you want to clear your chat history?')) {
      await core.clearHistory();
    }
  };

  // Compute styles from config
  const positionStyles = getPositionStyles(config.style);
  const dialogSizeStyles = getDialogSize(config.style);
  const frameColor = getFrameColor(config.style);
  const buttonColors = getButtonColors(config.style, core.isOpen);

  // Determine dialog position relative to button based on main position
  const isBottomPosition = !config.style?.position ||
    (typeof config.style.position === 'string' && (config.style.position === 'bottom-right' || config.style.position === 'bottom-left')) ||
    (typeof config.style.position === 'object' && config.style.position.bottom);

  const isRightPosition = !config.style?.position ||
    (typeof config.style.position === 'string' && (config.style.position === 'bottom-right' || config.style.position === 'top-right')) ||
    (typeof config.style.position === 'object' && config.style.position.right);

  return (
    <div
      className="cvz-fixed cvz-z-[9999] cvz-font-sans"
      style={positionStyles}
    >
      {/* Chat Window Container with Transition Logic */}
      <div
        className={`
          cvz-absolute cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${config.darkMode ? 'cvz-bg-gray-800' : 'cvz-bg-white'}
          ${isBottomPosition ? 'cvz-bottom-20' : 'cvz-top-20'}
          ${isRightPosition ? 'cvz-right-0' : 'cvz-left-0'}
          ${isBottomPosition && isRightPosition ? 'cvz-origin-bottom-right' :
            isBottomPosition && !isRightPosition ? 'cvz-origin-bottom-left' :
            !isBottomPosition && isRightPosition ? 'cvz-origin-top-right' : 'cvz-origin-top-left'}
          ${core.isOpen
            ? 'cvz-opacity-100 cvz-scale-100 cvz-translate-y-0'
            : 'cvz-opacity-0 cvz-scale-95 cvz-translate-y-4 cvz-pointer-events-none'}
        `}
        style={{
          ...dialogSizeStyles,
          borderColor: frameColor,
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
      >
        <ChatHeader
          title={config.headerMsg || 'Support Chat'}
          subtitle={config.subheaderMsg || "We typically reply in a few minutes"}
          onClose={() => core.close()}
          onClear={handleClearHistory}
          darkMode={config.darkMode}
          icons={config.icons}
          authControl={
            config.endUserLicensing ? (
              <button
                onClick={() => setShowAuthModal(true)}
                className={`cvz-text-xs cvz-font-medium cvz-px-2 cvz-py-1 cvz-rounded-md cvz-transition-colors cvz-whitespace-nowrap ${
                  config.darkMode
                    ? 'cvz-text-gray-200 hover:cvz-bg-gray-700/50'
                    : 'cvz-text-white hover:cvz-bg-blue-600/50'
                }`}
                title={core.endUserAuth ? `Signed in as ${core.endUserAuth.email}` : 'Authenticate'}
              >
                {core.endUserAuth ? 'Account' : 'Authenticate'}
              </button>
            ) : undefined
          }
        />

        {/* Turnstile's real mount point - see CaptchaMount. Collapsed to
            nothing unless a CAPTCHA challenge is actually resolving, so
            it's invisible for every account that doesn't gate client_id
            issuance at all. */}
        <div
          ref={(el: HTMLDivElement | null) => core.setCaptchaContainer(el)}
          className={`cvz-flex cvz-justify-center cvz-overflow-hidden cvz-transition-all cvz-duration-200 ${
            core.captchaPending ? 'cvz-max-h-32 cvz-py-2' : 'cvz-max-h-0 cvz-py-0'
          }`}
        />

        <ChatMessages
          messages={core.messages}
          isStreaming={core.isStreaming}
          streamingMessage={core.streamingMessage}
          thinkingMessage={core.thinkingMessage}
          activeToolCall={core.activeToolCall}
          isFinalizingRef={core.isFinalizingRef}
          messagesEndRef={messagesEndRef}
          enableMarkdown={config.enableMarkdown}
          darkMode={config.darkMode}
          icons={config.icons}
        />

        {core.showAuthNudge && !isEndUserAuthValid(core.endUserAuth) && (
          <div className={`cvz-px-4 cvz-py-2 cvz-text-xs cvz-flex cvz-items-center cvz-justify-between cvz-gap-2 ${
            config.darkMode ? 'cvz-bg-amber-900/40 cvz-text-amber-200' : 'cvz-bg-amber-50 cvz-text-amber-800'
          }`}>
            <span>You've reached the free limit - authenticate to keep chatting.</span>
            <button
              onClick={() => setShowAuthModal(true)}
              className="cvz-underline cvz-font-medium cvz-shrink-0"
            >
              Authenticate
            </button>
          </div>
        )}

        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSendMessage}
          isLoading={core.isLoading || core.isStreaming}
          placeholder={config.promptPlaceholder || "Type a message..."}
          darkMode={config.darkMode}
          icons={config.icons}
        />

        {config.endUserLicensing && (
          <EndUserAuthModal
            open={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            darkMode={config.darkMode}
            baseUrl={config.chatUrl || DEFAULT_CHAT_API_URL}
            getBaseAuth={() => core.getTenantAuthToken()}
            endUserAuth={core.endUserAuth}
            onAuthenticated={core.authenticateEndUser}
            initialEmail={loadLastKnownEmail() ?? undefined}
          />
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => (core.isOpen ? core.close() : core.open())}
        className={`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${core.isOpen ? 'cvz-rotate-90' : 'cvz-hover:cvz-scale-105'}
        `}
        style={{
          backgroundColor: buttonColors.backgroundColor,
        }}
        onMouseEnter={(e) => {
          if (!core.isOpen && config.style?.buttonColor?.hover) {
            e.currentTarget.style.backgroundColor = config.style.buttonColor.hover;
          }
        }}
        onMouseLeave={(e) => {
          if (!core.isOpen) {
            e.currentTarget.style.backgroundColor = buttonColors.backgroundColor as string;
          }
        }}
      >
        <div className="cvz-text-white">
          {core.isOpen
            ? <IconSlot custom={config.icons?.close} fallback={<XMarkIcon />} className="cvz-w-6 cvz-h-6" />
            : <IconSlot custom={config.icons?.launcher} fallback={<ChatIcon />} className="cvz-w-6 cvz-h-6" />}
        </div>
      </button>
    </div>
  );
};

export default App;
