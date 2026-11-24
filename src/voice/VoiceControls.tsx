/**
 * Voice-specific presentation bits - the mic button and the speaker toggle
 * (ChatInput's accessory slot, left of the text field) and the stage pill
 * (ChatHeader's accessory slot).
 * Everything else is the shared ChatShell.
 */

import type { VoiceStage, VoiceStatus } from '../types';

const MicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cvz-w-5 cvz-h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
);

const StopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cvz-w-5 cvz-h-5">
    <rect x="6" y="6" width="12" height="12" rx="2" />
  </svg>
);

export const MicButton = ({
  active,
  connecting,
  onClick,
  label,
  darkMode,
}: {
  active: boolean;
  connecting: boolean;
  onClick: () => void;
  label?: string;
  darkMode?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    title={label || (active ? 'Stop voice' : 'Talk')}
    aria-label={label || (active ? 'Stop voice' : 'Talk')}
    className={`cvz-flex cvz-items-center cvz-justify-center cvz-w-11 cvz-h-11 cvz-rounded-full cvz-shrink-0 cvz-transition-colors cvz-shadow-sm ${
      active
        ? 'cvz-bg-red-600 cvz-text-white hover:cvz-bg-red-700'
        : darkMode
          ? 'cvz-bg-gray-700 cvz-text-gray-100 hover:cvz-bg-gray-600'
          : 'cvz-bg-gray-100 cvz-text-gray-700 hover:cvz-bg-gray-200'
    } ${connecting ? 'cvz-animate-pulse' : ''}`}
  >
    {active ? <StopIcon /> : <MicIcon />}
  </button>
);

const SpeakerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cvz-w-5 cvz-h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
  </svg>
);

const SpeakerOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cvz-w-5 cvz-h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
  </svg>
);

/** Spoken replies on/off - next to the mic button, always visible: before a
 *  session it sets how the next one starts, during one it switches it.
 *  Off is marked (crossed-out speaker, amber) so it's obvious at a glance. */
export const SpeakerToggle = ({
  enabled,
  onToggle,
  disabled,
  muteLabel,
  unmuteLabel,
  darkMode,
}: {
  enabled: boolean;
  onToggle: () => void;
  /** While connecting: a change then would be lost. */
  disabled?: boolean;
  muteLabel?: string;
  unmuteLabel?: string;
  darkMode?: boolean;
}) => {
  const label = enabled ? muteLabel || 'Mute spoken replies' : unmuteLabel || 'Speak replies';
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      title={label}
      aria-label={label}
      aria-pressed={!enabled}
      className={`cvz-flex cvz-items-center cvz-justify-center cvz-w-11 cvz-h-11 cvz-rounded-full cvz-shrink-0 cvz-transition-colors cvz-shadow-sm disabled:cvz-opacity-50 ${
        !enabled
          ? darkMode
            ? 'cvz-bg-amber-500/20 cvz-text-amber-300 hover:cvz-bg-amber-500/30'
            : 'cvz-bg-amber-100 cvz-text-amber-700 hover:cvz-bg-amber-200'
          : darkMode
            ? 'cvz-bg-gray-700 cvz-text-gray-100 hover:cvz-bg-gray-600'
            : 'cvz-bg-gray-100 cvz-text-gray-700 hover:cvz-bg-gray-200'
      }`}
    >
      {enabled ? <SpeakerIcon /> : <SpeakerOffIcon />}
    </button>
  );
};

const STAGE_LABEL: Record<VoiceStage, string> = {
  idle: '',
  listening: 'Listening',
  transcribing: 'Transcribing',
  thinking: 'Thinking',
  speaking: 'Speaking',
};

export const VoiceStagePill = ({
  status,
  stage,
  darkMode,
  error,
}: {
  status: VoiceStatus;
  stage: VoiceStage;
  darkMode?: boolean;
  /** Why voice failed (also shown as a chat message) - the pill's tooltip. */
  error?: string | null;
}) => {
  let text: string;
  if (status === 'connecting') text = 'Connecting';
  else if (status === 'failed') text = 'Voice error';
  else if (status === 'connected') text = STAGE_LABEL[stage] || 'Connected';
  else return null; // idle / stopped: nothing to show

  return (
    <span
      title={status === 'failed' && error ? error : undefined}
      className={`cvz-rounded-full cvz-px-2.5 cvz-py-1 cvz-text-[11px] cvz-font-medium cvz-whitespace-nowrap ${
        status === 'failed'
          ? 'cvz-bg-red-500/20 cvz-text-red-100'
          : darkMode
            ? 'cvz-bg-white/10 cvz-text-gray-100'
            : 'cvz-bg-white/20 cvz-text-white'
      }`}
    >
      {text}
    </span>
  );
};
