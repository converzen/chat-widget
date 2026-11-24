import { useEffect, useRef } from 'preact/hooks';
import type { WidgetConfig } from '../types';
import { ChatShell } from '../chatUi';
import { useVoiceChatCore } from './useVoiceChatCore';
import { MicButton, SpeakerToggle, VoiceStagePill } from './VoiceControls';

// --- Voice widget ---
// The exact same ChatShell as the text widget, driven by a voice-enabled
// adapter, plus a mic button and speaker toggle (left of the text field),
// a stage pill (header), and the hidden <audio> the
// inbound remote track plays through. While a voice session is connected,
// typed messages go over it too (spoken answer, interrupts a reply); without
// one they flow over SSE. Both share one conversation (see core/chatCore.ts).

interface VoiceAppProps {
  config: WidgetConfig;
}

const VoiceApp = ({ config }: VoiceAppProps) => {
  const core = useVoiceChatCore(config);
  const audioRef = useRef<HTMLAudioElement>(null);

  const active = core.voiceStatus === 'connecting' || core.voiceStatus === 'connected';
  // Spoken replies: what the running session reports, else the visitor's
  // choice for the next one (unset = on, the persona default for voice).
  const speaking =
    core.voiceStatus === 'connected' && core.voiceTts !== null ? core.voiceTts : (core.voiceTtsPref ?? true);

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
        <VoiceStagePill
          status={core.voiceStatus}
          stage={core.voiceStage}
          darkMode={config.darkMode}
          error={core.voiceError}
        />
      }
      inputAccessory={
        <>
          <MicButton
            active={active}
            connecting={core.voiceStatus === 'connecting'}
            onClick={toggleVoice}
            label={config.voiceButtonLabel}
            darkMode={config.darkMode}
          />
          <SpeakerToggle
            enabled={speaking}
            onToggle={() => core.setVoiceTts(!speaking)}
            disabled={core.voiceStatus === 'connecting'}
            muteLabel={config.voiceMuteLabel}
            unmuteLabel={config.voiceUnmuteLabel}
            darkMode={config.darkMode}
          />
        </>
      }
      footer={<audio ref={audioRef} autoPlay style={{ display: 'none' }} />}
    />
  );
};

export default VoiceApp;
