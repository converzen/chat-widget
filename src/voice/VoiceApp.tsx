import { useEffect, useRef } from 'preact/hooks';
import type { WidgetConfig } from '../types';
import { ChatShell } from '../chatUi';
import { useVoiceChatCore } from './useVoiceChatCore';
import { MicButton, VoiceStagePill } from './VoiceControls';

// --- Voice widget ---
// The exact same ChatShell as the text widget, driven by a voice-enabled
// adapter, plus a mic button, a stage pill, and the hidden <audio> the
// inbound remote track plays through. Typed chat still flows over SSE; voice
// turns flow over WebRTC; both share one conversation (see core/chatCore.ts).

interface VoiceAppProps {
  config: WidgetConfig;
}

const VoiceApp = ({ config }: VoiceAppProps) => {
  const core = useVoiceChatCore(config);
  const audioRef = useRef<HTMLAudioElement>(null);

  const active = core.voiceStatus === 'connecting' || core.voiceStatus === 'connected';

  const toggleVoice = () => {
    if (active) core.stopVoice();
    else void core.startVoice(audioRef.current);
  };

  // Optional: open a voice session as soon as the panel is opened.
  const autoStarted = useRef(false);
  useEffect(() => {
    if (!config.voiceAutoStart) return;
    if (core.isOpen && !autoStarted.current && core.voiceStatus === 'idle') {
      autoStarted.current = true;
      void core.startVoice(audioRef.current);
    }
    if (!core.isOpen) autoStarted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [core.isOpen, config.voiceAutoStart]);

  return (
    <ChatShell
      config={config}
      core={core}
      headerAccessory={
        <VoiceStagePill status={core.voiceStatus} stage={core.voiceStage} darkMode={config.darkMode} />
      }
      inputAccessory={
        <MicButton
          active={active}
          connecting={core.voiceStatus === 'connecting'}
          onClick={toggleVoice}
          label={config.voiceButtonLabel}
          darkMode={config.darkMode}
        />
      }
      footer={<audio ref={audioRef} autoPlay style={{ display: 'none' }} />}
    />
  );
};

export default VoiceApp;
