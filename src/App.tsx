import React, { useState, useEffect, useRef } from 'react';
import { WidgetConfig } from './index';

// Icons
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

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: number;
}

interface AppProps {
  config: WidgetConfig;
}

const App: React.FC<AppProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages on mount
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const history = await config.onLoadMessages();
        let initialMessages: Message[] = [];

        if (Array.isArray(history) && history.length > 0) {
          initialMessages = history;
        } else if (config.initialGreeting) {
          // Add initial greeting if history is empty
          initialMessages = [{
            id: 'init-greeting',
            text: config.initialGreeting || 'Hello! How can we help you today?',
            sender: 'agent',
            timestamp: Date.now(),
          }];
        }

        setMessages(initialMessages);
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };
      loadHistory();
  }, [config]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: Date.now(),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      // Authenticate (simulated usage)
      await config.getToken();
      
      // Save messages
      await config.onSaveMessages(updatedMessages);

      // Simulate agent response (optional, but makes it feel like a chat)
      setTimeout(async () => {
        const agentMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for your message! We'll get back to you shortly.",
          sender: 'agent',
          timestamp: Date.now(),
        };
        const withAgent = [...updatedMessages, agentMessage];
        setMessages(withAgent);
        await config.onSaveMessages(withAgent);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="cvz-fixed cvz-bottom-4 cvz-right-4 cvz-z-[9999] cvz-font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="cvz-absolute cvz-bottom-16 cvz-right-0 cvz-w-80 cvz-h-96 cvz-bg-white cvz-rounded-lg cvz-shadow-xl cvz-flex cvz-flex-col cvz-overflow-hidden cvz-border cvz-border-gray-200">
          {/* Header */}
          <div className="cvz-bg-blue-600 cvz-text-white cvz-p-4 cvz-flex cvz-justify-between cvz-items-center">
            <div className="cvz-flex cvz-items-center cvz-gap-2">
              <div className="cvz-relative">
                <div className="cvz-w-2 cvz-h-2 cvz-bg-green-400 cvz-rounded-full"></div>
                <div className="cvz-absolute cvz-top-0 cvz-left-0 cvz-w-2 cvz-h-2 cvz-bg-green-400 cvz-rounded-full cvz-animate-ping"></div>
              </div>
              <h3 className="cvz-font-bold">{config.headerMsg || 'Support Chat'}</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="cvz-text-white cvz-hover:cvz-text-gray-200 cvz-transition-colors"
            >
              <XMarkIcon />
            </button>
          </div>

          {/* Messages Area */}
          <div className="cvz-flex-1 cvz-overflow-y-auto cvz-p-4 cvz-bg-gray-50 cvz-space-y-3">
            {messages.length === 0 && (
              <div className="cvz-text-center cvz-text-gray-500 cvz-mt-10 cvz-text-sm">
                No messages yet. Start a conversation!
              </div>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`cvz-flex ${msg.sender === 'user' ? 'cvz-justify-end' : 'cvz-justify-start'}`}
              >
                <div
                  className={`cvz-max-w-[80%] cvz-p-3 cvz-rounded-lg cvz-text-sm ${
                    msg.sender === 'user'
                      ? 'cvz-bg-blue-600 cvz-text-white cvz-rounded-br-none'
                      : 'cvz-bg-white cvz-text-gray-800 cvz-border cvz-border-gray-200 cvz-rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="cvz-flex cvz-justify-start">
                 <div className="cvz-bg-gray-200 cvz-p-2 cvz-rounded-lg cvz-animate-pulse">
                   <span className="cvz-invisible">...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="cvz-p-3 cvz-bg-white cvz-border-t cvz-border-gray-200 cvz-flex cvz-gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={config.promptPlaceholder || "Type a message..."}
              className="cvz-flex-1 cvz-border cvz-border-gray-300 cvz-rounded-md cvz-px-3 cvz-py-2 cvz-text-sm cvz-focus:cvz-outline-none cvz-focus:cvz-border-blue-500"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="cvz-bg-blue-600 cvz-text-white cvz-p-2 cvz-rounded-md cvz-hover:cvz-bg-blue-700 cvz-disabled:cvz-opacity-50 cvz-transition-colors"
            >
              <PaperAirplaneIcon />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cvz-bg-blue-600 cvz-text-white cvz-p-4 cvz-rounded-full cvz-shadow-lg cvz-hover:cvz-bg-blue-700 cvz-transition-all cvz-transform cvz-hover:cvz-scale-105"
      >
        {isOpen ? <XMarkIcon /> : <ChatIcon />}
      </button>
    </div>
  );
};

export default App;
