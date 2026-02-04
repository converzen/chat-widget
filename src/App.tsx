import React, { useState, useEffect, useRef } from 'react';
import { WidgetConfig } from './index';

// Icons
const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="gmc-w-6 gmc-h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>
);

const XMarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="gmc-w-6 gmc-h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PaperAirplaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="gmc-w-5 gmc-h-5">
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
        if (Array.isArray(history)) {
          setMessages(history);
        }
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
    <div className="gmc-fixed gmc-bottom-4 gmc-right-4 gmc-z-[9999] gmc-font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="gmc-absolute gmc-bottom-16 gmc-right-0 gmc-w-80 gmc-h-96 gmc-bg-white gmc-rounded-lg gmc-shadow-xl gmc-flex gmc-flex-col gmc-overflow-hidden gmc-border gmc-border-gray-200">
          {/* Header */}
          <div className="gmc-bg-blue-600 gmc-text-white gmc-p-4 gmc-flex gmc-justify-between gmc-items-center">
            <h3 className="gmc-font-bold">Support Chat</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="gmc-text-white gmc-hover:gmc-text-gray-200 gmc-transition-colors"
            >
              <XMarkIcon />
            </button>
          </div>

          {/* Messages Area */}
          <div className="gmc-flex-1 gmc-overflow-y-auto gmc-p-4 gmc-bg-gray-50 gmc-space-y-3">
            {messages.length === 0 && (
              <div className="gmc-text-center gmc-text-gray-500 gmc-mt-10 gmc-text-sm">
                No messages yet. Start a conversation!
              </div>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`gmc-flex ${msg.sender === 'user' ? 'gmc-justify-end' : 'gmc-justify-start'}`}
              >
                <div
                  className={`gmc-max-w-[80%] gmc-p-3 gmc-rounded-lg gmc-text-sm ${
                    msg.sender === 'user'
                      ? 'gmc-bg-blue-600 gmc-text-white gmc-rounded-br-none'
                      : 'gmc-bg-white gmc-text-gray-800 gmc-border gmc-border-gray-200 gmc-rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="gmc-flex gmc-justify-start">
                 <div className="gmc-bg-gray-200 gmc-p-2 gmc-rounded-lg gmc-animate-pulse">
                   <span className="gmc-invisible">...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="gmc-p-3 gmc-bg-white gmc-border-t gmc-border-gray-200 gmc-flex gmc-gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              className="gmc-flex-1 gmc-border gmc-border-gray-300 gmc-rounded-md gmc-px-3 gmc-py-2 gmc-text-sm gmc-focus:gmc-outline-none gmc-focus:gmc-border-blue-500"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="gmc-bg-blue-600 gmc-text-white gmc-p-2 gmc-rounded-md gmc-hover:gmc-bg-blue-700 gmc-disabled:gmc-opacity-50 gmc-transition-colors"
            >
              <PaperAirplaneIcon />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="gmc-bg-blue-600 gmc-text-white gmc-p-4 gmc-rounded-full gmc-shadow-lg gmc-hover:gmc-bg-blue-700 gmc-transition-all gmc-transform gmc-hover:gmc-scale-105"
      >
        {isOpen ? <XMarkIcon /> : <ChatIcon />}
      </button>
    </div>
  );
};

export default App;
