/**
 * Why a voice session could not start (or broke off), with the text the
 * visitor sees. Before this, every failure surfaced only as the pill's
 * "Voice error" - including the usage limit, whose message cvz-chat sends
 * (429 on /api/voice/webrtc/offer, the same text text chat shows) and the
 * widget threw away.
 *
 * Core code (no WebRTC): imported by chatCore and by voice/voiceSession.
 */

export type VoiceFailureKind = 'rate_limited' | 'mic_denied' | 'no_mic' | 'unavailable';

export const VOICE_TEXT = {
  rate_limited: "You've reached the usage limit for this assistant. Please try again later.",
  mic_denied: 'Microphone access was blocked. Allow the microphone for this site to talk.',
  no_mic: 'No microphone was found.',
  unavailable: 'Voice is not available right now. Please try again in a moment.',
  connection_lost: 'The voice connection was lost.',
} as const;

export class VoiceStartError extends Error {
  /** `message` is the technical detail (console); `userMessage` is shown. */
  constructor(
    readonly kind: VoiceFailureKind,
    readonly userMessage: string,
    detail?: string,
  ) {
    super(detail ?? userMessage);
    this.name = 'VoiceStartError';
  }
}

/** A cvz-chat error body as text: plain text (the voice routes' 429 carries
 *  the end-user message as is) or JSON `{message|error}`. Empty for bodies
 *  that aren't meant for people (an HTML error page from a proxy). */
async function errorBodyText(resp: Response): Promise<string> {
  const raw = (await resp.text().catch(() => '')).trim();
  if (!raw || raw.startsWith('<')) return '';
  try {
    const json: unknown = JSON.parse(raw);
    if (typeof json === 'string') return json.trim();
    if (json && typeof json === 'object') {
      const { message, error } = json as { message?: unknown; error?: unknown };
      const text = typeof message === 'string' ? message : typeof error === 'string' ? error : '';
      return text.trim();
    }
    return '';
  } catch {
    return raw;
  }
}

/** The error for a refused voice request (token or offer). */
export async function rejectedResponse(resp: Response, what: string): Promise<VoiceStartError> {
  const body = await errorBodyText(resp);
  const detail = `${what} rejected (${resp.status})${body ? `: ${body}` : ''}`;
  if (resp.status === 429) {
    return new VoiceStartError('rate_limited', body.slice(0, 500) || VOICE_TEXT.rate_limited, detail);
  }
  return new VoiceStartError('unavailable', VOICE_TEXT.unavailable, detail);
}

/** The error for a failed getUserMedia. */
export function micError(err: unknown): VoiceStartError {
  const name = (err as { name?: unknown } | null)?.name;
  const detail = `microphone: ${err instanceof Error ? `${err.name}: ${err.message}` : String(err)}`;
  if (name === 'NotAllowedError' || name === 'SecurityError') {
    return new VoiceStartError('mic_denied', VOICE_TEXT.mic_denied, detail);
  }
  if (name === 'NotFoundError' || name === 'OverconstrainedError') {
    return new VoiceStartError('no_mic', VOICE_TEXT.no_mic, detail);
  }
  return new VoiceStartError('unavailable', VOICE_TEXT.unavailable, detail);
}

export function toVoiceStartError(err: unknown): VoiceStartError {
  if (err instanceof VoiceStartError) return err;
  return new VoiceStartError(
    'unavailable',
    VOICE_TEXT.unavailable,
    err instanceof Error ? err.message : String(err),
  );
}
