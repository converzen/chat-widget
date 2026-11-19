/**
 * Voice-specific presentation bits - the mic button (goes in ChatInput's
 * accessory slot) and the stage pill (goes in ChatHeader's accessory slot).
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
        ? 'cvz-bg-red-600 cvz-text-white cvz-hover:cvz-bg-red-700'
        : darkMode
          ? 'cvz-bg-gray-700 cvz-text-gray-100 cvz-hover:cvz-bg-gray-600'
          : 'cvz-bg-gray-100 cvz-text-gray-700 cvz-hover:cvz-bg-gray-200'
    } ${connecting ? 'cvz-animate-pulse' : ''}`}
  >
    {active ? <StopIcon /> : <MicIcon />}
  </button>
);

const STAGE_LABEL: Record<VoiceStage, string> = {
  idle: '',
  listening: 'Listening',
  transcribing: 'Transcribing',
  thinking: 'Thinking',
};

export const VoiceStagePill = ({
  status,
  stage,
  darkMode,
}: {
  status: VoiceStatus;
  stage: VoiceStage;
  darkMode?: boolean;
}) => {
  let text: string;
  if (status === 'connecting') text = 'Connecting';
  else if (status === 'failed') text = 'Voice error';
  else if (status === 'connected') text = STAGE_LABEL[stage] || 'Connected';
  else return null; // idle / stopped: nothing to show

  return (
    <span
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
