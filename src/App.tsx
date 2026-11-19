import type { WidgetConfig } from './types';
import { useChatCoreAdapter } from './useChatCoreAdapter';
import { ChatShell } from './chatUi';

// --- Main App (text widget) ---
// All auth/session/streaming logic lives in ./core/chatCore.ts, reached here
// via ./useChatCoreAdapter.ts (a thin preact/compat useSyncExternalStore
// binding). The whole presentation now lives in ./chatUi.tsx's ChatShell, so
// the voice widget (voice/VoiceApp.tsx) renders the exact same layout from a
// voice-enabled adapter. This component is just the text wiring.

interface AppProps {
  config: WidgetConfig;
}

const App = ({ config }: AppProps) => {
  const core = useChatCoreAdapter(config);
  return <ChatShell config={config} core={core} />;
};

export default App;
