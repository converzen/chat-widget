
import React, { useState, useEffect, useRef } from 'react';
import { WidgetConfig, WidgetStyle } from './index.markdown';
import { ChatMessage } from './types';
import { streamChatCompletion, streamChatContinuation } from './services/streaming';
import ReactMarkdown from 'react-markdown';

// --- Icons ---
const CHAT_API_URL = 'https://chat.converzent.de';

// --- Style Helper Functions ---

const getPositionStyles = (style?: WidgetStyle): React.CSSProperties => {
  if (!style?.position) {
    return { bottom: '1rem', right: '1rem' }; // Default: bottom-right
  }

  if (typeof style.position === 'string') {
    // Preset positions
    switch (style.position) {
      case 'bottom-right':
        return { bottom: '1rem', right: '1rem' };
      case 'bottom-left':
        return { bottom: '1rem', left: '1rem' };
      case 'top-right':
        return { top: '1rem', right: '1rem' };
      case 'top-left':
        return { top: '1rem', left: '1rem' };
      default:
        return { bottom: '1rem', right: '1rem' };
    }
  } else {
    // Custom position
    const pos: React.CSSProperties = {};
    if (style.position.bottom) pos.bottom = style.position.bottom;
    if (style.position.top) pos.top = style.position.top;
    if (style.position.left) pos.left = style.position.left;
    if (style.position.right) pos.right = style.position.right;
    return pos;
  }
};

const getDialogSize = (style?: WidgetStyle): React.CSSProperties => {
  if (!style?.dialogSize) {
    return { width: '350px', height: '500px' }; // Default: medium
  }

  if (typeof style.dialogSize === 'string') {
    // Preset sizes
    switch (style.dialogSize) {
      case 'small':
        return { width: '300px', height: '400px' };
      case 'medium':
        return { width: '350px', height: '500px' };
      case 'large':
        return { width: '400px', height: '600px' };
      default:
        return { width: '350px', height: '500px' };
    }
  } else {
    // Custom size
    return {
      width: `${Math.max(250, style.dialogSize.width)}px`, // Minimum 250px width
      height: `${Math.max(300, style.dialogSize.height)}px`, // Minimum 300px height
    };
  }
};

const getFrameColor = (style?: WidgetStyle): string => {
  return style?.frameColor || '#E5E7EB'; // Default: gray-200
};

const getButtonColors = (style?: WidgetStyle, isOpen?: boolean): React.CSSProperties => {
  const colors = style?.buttonColor;
  
  if (isOpen) {
    return {
      backgroundColor: colors?.open || '#1F2937', // Default: gray-800
    };
  }
  
  return {
    backgroundColor: colors?.normal || '#2563EB', // Default: blue-600
    '--hover-color': colors?.hover || '#1D4ED8', // Default: blue-700
  } as React.CSSProperties;
};

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

// --- Types ---


interface AppProps {
  config: WidgetConfig;
}

// --- Components ---

const ChatHeader = ({ 
  title, 
  subtitle, 
  onClose, 
  onClear 
}: { 
  title: string; 
  subtitle?: string; 
  onClose: () => void; 
  onClear: () => void; 
}) => (
  <div className="cvz-bg-gradient-to-b cvz-from-blue-600 cvz-to-blue-500 cvz-text-white cvz-p-4 cvz-shadow-md cvz-flex cvz-justify-between cvz-items-start">
    <div className="cvz-flex cvz-items-center cvz-gap-3">
      <div className="cvz-relative">
        <div className="cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-border-2 cvz-border-blue-600"></div>
        <div className="cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2.5 cvz-h-2.5 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping cvz-opacity-75"></div>
      </div>
      <div>
        <h3 className="cvz-font-bold cvz-text-lg cvz-leading-tight">{title}</h3>
        {subtitle && <p className="cvz-text-xs cvz-text-blue-100 cvz-mt-0.5">{subtitle}</p>}
      </div>
    </div>
    <div className="cvz-flex cvz-gap-2">
      <button 
        onClick={onClear}
        className="cvz-text-blue-200 cvz-hover:cvz-text-white cvz-transition-colors cvz-p-1 cvz-rounded-md cvz-hover:cvz-bg-blue-600/50"
        title="Clear History"
      >
        <TrashIcon />
      </button>
      <button 
        onClick={onClose}
        className="cvz-text-blue-200 cvz-hover:cvz-text-white cvz-transition-colors cvz-p-1 cvz-rounded-md cvz-hover:cvz-bg-blue-600/50"
        title="Close Chat"
      >
        <XMarkIcon />
      </button>
    </div>
  </div>
);

// MessageContent component that renders markdown (static import for markdown build)
const MessageContent = ({ 
  content, 
  enableMarkdown 
}: { 
  content: string; 
  enableMarkdown?: boolean; 
}) => {
  if (enableMarkdown) {
    return (
      <div className="cvz-markdown-content">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="cvz-mb-2 cvz-last:cvz-mb-0">{children}</p>,
            h1: ({ children }) => <h1 className="cvz-text-xl cvz-font-bold cvz-mb-2 cvz-mt-4 cvz-first:cvz-mt-0">{children}</h1>,
            h2: ({ children }) => <h2 className="cvz-text-lg cvz-font-bold cvz-mb-2 cvz-mt-3 cvz-first:cvz-mt-0">{children}</h2>,
            h3: ({ children }) => <h3 className="cvz-text-base cvz-font-bold cvz-mb-1 cvz-mt-2 cvz-first:cvz-mt-0">{children}</h3>,
            ul: ({ children }) => <ul className="cvz-list-disc cvz-list-inside cvz-mb-2 cvz-space-y-1">{children}</ul>,
            ol: ({ children }) => <ol className="cvz-list-decimal cvz-list-inside cvz-mb-2 cvz-space-y-1">{children}</ol>,
            li: ({ children }) => <li className="cvz-ml-2">{children}</li>,
            code: ({ children }) => <code className="cvz-bg-gray-100 cvz-px-1 cvz-py-0.5 cvz-rounded cvz-text-sm cvz-font-mono">{children}</code>,
            pre: ({ children }) => <pre className="cvz-bg-gray-100 cvz-p-2 cvz-rounded cvz-overflow-x-auto cvz-mb-2 cvz-text-sm cvz-font-mono">{children}</pre>,
            blockquote: ({ children }) => <blockquote className="cvz-border-l-4 cvz-border-gray-300 cvz-pl-3 cvz-italic cvz-mb-2">{children}</blockquote>,
            strong: ({ children }) => <strong className="cvz-font-bold">{children}</strong>,
            em: ({ children }) => <em className="cvz-italic">{children}</em>,
            a: ({ children, href }) => <a href={href} className="cvz-text-blue-600 cvz-underline cvz-hover:cvz-text-blue-800" target="_blank" rel="noopener noreferrer">{children}</a>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }
  return <>{content}</>;
};

const ChatMessages = ({ 
  messages, 
  isStreaming,
  streamingMessage,
  messagesEndRef,
  enableMarkdown
}: { 
  messages: ChatMessage[];
  isStreaming: boolean;
  streamingMessage: string;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  enableMarkdown?: boolean;
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
  }, [messages, streamingMessage, shouldAutoScroll, messagesEndRef]);

  return (
    <div 
      ref={messagesContainerRef}
      className="cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-bg-gray-50 cvz-space-y-4"
    >
      {messages.length === 0 && !streamingMessage && (
        <div className="cvz-flex cvz-flex-col cvz-items-center cvz-justify-center cvz-h-full cvz-text-gray-400 cvz-space-y-2">
          <ChatIcon />
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
                ? 'cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none'
                : 'cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-100 cvz-rounded-bl-none'
            }`}
          >
            <MessageContent content={msg.content} enableMarkdown={enableMarkdown} />
          </div>
        </div>
      ))}
      {isStreaming && streamingMessage && (
        <div className="cvz-flex cvz-justify-start">
          <div className="cvz-max-w-[85%] cvz-bg-white cvz-border cvz-border-gray-100 cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-text-sm cvz-shadow-sm cvz-text-gray-800">
            {streamingMessage}
          </div>
        </div>
      )}
      {isStreaming && !streamingMessage && (
        <div className="cvz-flex cvz-justify-start">
          <div className="cvz-bg-white cvz-border cvz-border-gray-100 cvz-p-3 cvz-rounded-2xl cvz-rounded-bl-none cvz-shadow-sm">
            <div className="cvz-flex cvz-space-x-1">
              <div className="cvz-w-2 cvz-h-2 cvz-bg-gray-400 cvz-rounded-full cvz-animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="cvz-w-2 cvz-h-2 cvz-bg-gray-400 cvz-rounded-full cvz-animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="cvz-w-2 cvz-h-2 cvz-bg-gray-400 cvz-rounded-full cvz-animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
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
  placeholder 
}: { 
  value: string; 
  onChange: (val: string) => void; 
  onSubmit: (e?: React.FormEvent) => void; 
  isLoading: boolean; 
  placeholder: string; 
}) => (
  <form onSubmit={onSubmit} className="cvz-p-4 cvz-bg-white cvz-border-t cvz-border-gray-100">
    <div className="cvz-relative cvz-flex cvz-items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="cvz-w-full cvz-bg-gray-50 cvz-border cvz-border-gray-200 cvz-text-gray-900 cvz-text-sm cvz-rounded-full cvz-pl-4 cvz-pr-12 cvz-py-3 cvz-focus:cvz-outline-none cvz-focus:cvz-border-blue-500 cvz-focus:cvz-ring-1 cvz-focus:cvz-ring-blue-500 cvz-transition-all"
      />
      <button
        type="submit"
        disabled={!value.trim() || isLoading}
        className="cvz-absolute cvz-right-2 cvz-p-2 cvz-bg-blue-600 cvz-text-white cvz-rounded-full cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-opacity-50 cvz-disabled:cvz-hover:cvz-bg-blue-600 cvz-transition-colors cvz-shadow-sm"
      >
        <PaperAirplaneIcon />
      </button>
    </div>
    <div className="cvz-text-center cvz-mt-2">
      <p className="cvz-text-[10px] cvz-text-gray-400">Powered by ConverZent</p>
    </div>
  </form>
);

// --- Main App ---

const App: React.FC<AppProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState('');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const tokenCacheRef = useRef<{ token: string; expiresAt: number | null } | null>(null);

  // Load messages and session ID on mount
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const result = await config.onLoadMessages();
        let initialMessages: ChatMessage[] = [];
        let loadedSessionId: string | null = null;

        // Handle the new return format: {sessionId: string, messages: ChatMessage[]}
        if (result && typeof result === 'object' && 'messages' in result && 'sessionId' in result) {
          initialMessages = result.messages || [];
          loadedSessionId = result.sessionId || null;
        } else if (Array.isArray(result) && result.length > 0) {
          // Fallback for backward compatibility (if someone returns just an array)
          initialMessages = result;
        }

        // If no messages loaded and we have an initial greeting, use it
        if (initialMessages.length === 0 && config.initialGreeting) {
          initialMessages = [{
            content: config.initialGreeting,
            role: 'SYSTEM',
            createdAt: new Date().toISOString(),
          }];
        }

        setMessages(initialMessages);
        
        // Set session ID from loaded data, or fallback to localStorage
        if (loadedSessionId) {
          setSessionId(loadedSessionId);
          localStorage.setItem('cvz-widget-session-id', loadedSessionId);
        } else {
          const savedSessionId = localStorage.getItem('cvz-widget-session-id');
          if (savedSessionId) {
            setSessionId(savedSessionId);
          }
        }
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };
    loadHistory();
  }, [config]);


  // Helper function to get auth token with caching
  const getAuthToken = async (forceRefresh = false): Promise<{ token: string; type: 'apiKey' | 'bearer' }> => {
    if (config.apiKey) {
      return { token: config.apiKey, type: 'apiKey' };
    }
    
    if (!config.getToken) {
      throw new Error('Either apiKey or getToken must be provided');
    }

    // Check token cache first (unless forcing refresh)
    if (!forceRefresh) {
      const now = Date.now();
      const cached = tokenCacheRef.current;
      const isTokenValid = cached && (
        cached.expiresAt === null || // No expiration - always valid
        cached.expiresAt > now // Has expiration and not expired
      );
      
      if (isTokenValid) {
        return { token: cached.token, type: 'bearer' };
      }
    }

    // Fetch new token
    const tokenResult = await config.getToken();
    
    if (typeof tokenResult === 'string') {
      // Simple string token - no expiration, cache it
      tokenCacheRef.current = { token: tokenResult, expiresAt: null };
      return { token: tokenResult, type: 'bearer' };
    } else {
      // TokenResponse with expiration
      const expiresAt = tokenResult.expiresAt || null;
      tokenCacheRef.current = { token: tokenResult.token, expiresAt };
      return { token: tokenResult.token, type: 'bearer' };
    }
  };

  // Helper function to execute streaming with retry on auth errors
  const executeStreaming = async (
    userMessage: ChatMessage,
    updatedMessages: ChatMessage[],
    abortController: AbortController,
    retryCount = 0
  ): Promise<void> => {
    const maxRetries = 1; // Only retry once for token refresh
    
    try {
      // Get authentication token/key
      const auth = await getAuthToken(retryCount > 0); // Force refresh on retry
      const baseUrl = config.chatUrl || CHAT_API_URL; // Defaults to 'https://chat.converzent.de'
      
      // Determine which endpoint to use based on sessionId
      const useCompletion = !sessionId;
      
      let streamGenerator;
      if (useCompletion) {
        streamGenerator = streamChatCompletion({
          baseUrl,
          message: userMessage.content,
          persona: config.persona,
          authToken: auth.token,
          authType: auth.type,
          abortSignal: abortController.signal,
        });
      } else {
        streamGenerator = streamChatContinuation({
          baseUrl,
          sessionId: sessionId!,
          message: userMessage.content,
          authToken: auth.token,
          authType: auth.type,
          abortSignal: abortController.signal,
        });
      }

      // Process stream events
      let accumulatedContent = '';
      let hasUnauthorizedError = false;
      
      for await (const event of streamGenerator) {
        // Check if stream was aborted
        if (abortController.signal.aborted) {
          break;
        }

        switch (event.type) {
          case 'session_created':
          case 'session_continued':
            if (event.session_id) {
              setSessionId(event.session_id);
              // Persist session ID to localStorage
              localStorage.setItem('cvz-widget-session-id', event.session_id);
              console.log('Session ID:', event.session_id);
            }
            break;

          case 'token':
            if (event.content) {
              accumulatedContent += event.content;
              setStreamingMessage(accumulatedContent);
            }
            break;

          case 'done':
            // Finalize the assistant message
            if (accumulatedContent) {
              const assistantMessage: ChatMessage = {
                content: accumulatedContent,
                role: 'ASSISTANT',
                createdAt: new Date().toISOString(),
                sources: event.sources,
              };
              const finalMessages = [...updatedMessages, assistantMessage];
              setMessages(finalMessages);
              await config.onSaveMessages(finalMessages);
            }
            setStreamingMessage('');
            setIsStreaming(false);
            setIsLoading(false);
            abortControllerRef.current = null;
            return;

          case 'error':
            // Check if it's an unauthorized error (401 or 403)
            const errorMsg = event.message || '';
            if ((errorMsg.includes('401') || errorMsg.includes('403') || errorMsg.includes('Unauthorized') || errorMsg.includes('Forbidden')) && 
                retryCount < maxRetries && 
                config.getToken && 
                !config.apiKey) {
              // Clear token cache and retry once
              console.log('Unauthorized error detected, refreshing token and retrying...');
              tokenCacheRef.current = null;
              hasUnauthorizedError = true;
              break; // Exit the loop to retry
            }
            
            // Show error message to user
            console.error('Stream error:', errorMsg);
            const errorMessage: ChatMessage = {
              content: `Error: ${errorMsg || 'An error occurred'}`,
              role: 'SYSTEM',
              createdAt: new Date().toISOString(),
            };
            const errorMessages = [...updatedMessages, errorMessage];
            setMessages(errorMessages);
            // Pass sessionId to onSaveMessages (use current sessionId or empty string if null)
            await config.onSaveMessages(sessionId || '', errorMessages);
            setStreamingMessage('');
            setIsStreaming(false);
            setIsLoading(false);
            abortControllerRef.current = null;
            return;
        }
      }

      // If we got an unauthorized error, retry once
      if (hasUnauthorizedError && retryCount < maxRetries) {
        return executeStreaming(userMessage, updatedMessages, abortController, retryCount + 1);
      }

      // If we exit the loop without a 'done' event, something went wrong
      if (!abortController.signal.aborted && !hasUnauthorizedError) {
        console.error('Stream ended unexpectedly');
        setStreamingMessage('');
        setIsStreaming(false);
        setIsLoading(false);
        abortControllerRef.current = null;
      }

    } catch (error) {
      // Check if it's an unauthorized error from fetch
      if (error instanceof Error && 
          (error.message.includes('401') || error.message.includes('403')) &&
          retryCount < maxRetries && 
          config.getToken && 
          !config.apiKey) {
        // Clear token cache and retry once
        console.log('Unauthorized error detected, refreshing token and retrying...');
        tokenCacheRef.current = null;
        return executeStreaming(userMessage, updatedMessages, abortController, retryCount + 1);
      }
      
      throw error; // Re-throw if not a retryable auth error
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isStreaming) return;

    // Cancel any existing stream
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const userMessage: ChatMessage = {
      content: inputValue.trim(),
      role: 'USER',
      createdAt: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);
    setIsStreaming(true);
    setStreamingMessage('');

    try {
      // Create new abort controller for this request
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      // Execute streaming with retry logic
      await executeStreaming(userMessage, updatedMessages, abortController);

    } catch (error) {
      console.error('Error sending message:', error);
      
      // Handle abort errors gracefully
      if (error instanceof Error && error.name === 'AbortError') {
        setStreamingMessage('');
        setIsStreaming(false);
        setIsLoading(false);
        abortControllerRef.current = null;
        return;
      }

      // Show error to user
      const errorMessage: ChatMessage = {
        content: `Error: ${error instanceof Error ? error.message : 'Failed to send message'}`,
        role: 'SYSTEM',
        createdAt: new Date().toISOString(),
      };
      const errorMessages = [...updatedMessages, errorMessage];
      setMessages(errorMessages);
      // Pass sessionId to onSaveMessages (use current sessionId or empty string if null)
      await config.onSaveMessages(sessionId || '', errorMessages);
      setStreamingMessage('');
      setIsStreaming(false);
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleClearHistory = async () => {
    if (window.confirm('Are you sure you want to clear your chat history?')) {
      // Cancel any ongoing stream
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
      
      setMessages([]);
      setStreamingMessage('');
      const currentSessionId = sessionId || '';
      setSessionId(null);
      setIsStreaming(false);
      setIsLoading(false);
      // Clear persisted session ID
      localStorage.removeItem('cvz-widget-session-id');
      // Pass sessionId to onSaveMessages (empty string since we're clearing)
      await config.onSaveMessages('', []);
    }
  };

  // Compute styles from config
  const positionStyles = getPositionStyles(config.style);
  const dialogSizeStyles = getDialogSize(config.style);
  const frameColor = getFrameColor(config.style);
  const buttonColors = getButtonColors(config.style, isOpen);

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
          cvz-absolute cvz-bg-white cvz-rounded-2xl cvz-shadow-2xl cvz-flex cvz-flex-col cvz-overflow-hidden
          cvz-transition-all cvz-duration-300
          ${isBottomPosition ? 'cvz-bottom-20' : 'cvz-top-20'}
          ${isRightPosition ? 'cvz-right-0' : 'cvz-left-0'}
          ${isBottomPosition && isRightPosition ? 'cvz-origin-bottom-right' : 
            isBottomPosition && !isRightPosition ? 'cvz-origin-bottom-left' :
            !isBottomPosition && isRightPosition ? 'cvz-origin-top-right' : 'cvz-origin-top-left'}
          ${isOpen 
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
          subtitle="We typically reply in a few minutes"
          onClose={() => setIsOpen(false)}
          onClear={handleClearHistory}
        />

        <ChatMessages 
          messages={messages} 
          isStreaming={isStreaming}
          streamingMessage={streamingMessage}
          messagesEndRef={messagesEndRef}
          enableMarkdown={config.enableMarkdown}
        />

        <ChatInput 
          value={inputValue} 
          onChange={setInputValue} 
          onSubmit={handleSendMessage} 
          isLoading={isLoading || isStreaming}
          placeholder={config.promptPlaceholder || "Type a message..."}
        />
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          cvz-flex cvz-items-center cvz-justify-center
          cvz-w-14 cvz-h-14 cvz-rounded-full cvz-shadow-lg cvz-transition-all cvz-duration-300
          ${isOpen ? 'cvz-rotate-90' : 'cvz-hover:cvz-scale-105'}
        `}
        style={{
          backgroundColor: buttonColors.backgroundColor,
        }}
        onMouseEnter={(e) => {
          if (!isOpen && config.style?.buttonColor?.hover) {
            e.currentTarget.style.backgroundColor = config.style.buttonColor.hover;
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.backgroundColor = buttonColors.backgroundColor as string;
          }
        }}
      >
        <div className="cvz-text-white">
          {isOpen ? <XMarkIcon /> : <ChatIcon />}
        </div>
      </button>
    </div>
  );
};

export default App;
