/**
 * Framework-agnostic WebRTC voice session against cvz-chat's
 * POST /api/voice/webrtc/offer. A direct port of cvz-admin's VoiceWebRtcTest
 * harness, reshaped as an injectable factory (VoiceSessionFactory) so the
 * store (core/chatCore.ts) drives it without importing any WebRTC code into
 * the text-only bundle. No Preact here.
 *
 * Flow: getUserMedia -> RTCPeerConnection -> createDataChannel('events') ->
 * createOffer -> POST offer -> setRemoteDescription(answer). The server pushes
 * status/input/response/error and barge-in JSON on the data channel and the
 * spoken replies on the remote track attached to `audioElement`; the widget
 * sends text_input / set_tts control messages back on the same channel.
 */

import { micError, rejectedResponse } from '../core/voiceErrors';
import type { VoiceClientMessage, VoiceServerEvent, VoiceSessionHandle, VoiceSessionStartParams } from '../types';

export async function createVoiceSession(params: VoiceSessionStartParams): Promise<VoiceSessionHandle> {
  const { baseUrl, token, sessionId, audioElement, tts, callbacks } = params;
  const log = (m: string) => callbacks.onLog?.(m);

  // Ask for the mic first - a denial here should fail before we open any
  // peer connection or hit the server.
  let stream: MediaStream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    throw micError(err);
  }

  // A public STUN server for local candidate gathering. The server returns
  // its own ICE server list in the offer response, but that arrives after the
  // local SDP is already created - same tradeoff the admin harness documents.
  const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });

  let stopped = false;
  const stop = () => {
    if (stopped) return;
    stopped = true;
    try { pc.close(); } catch { /* already closed */ }
    stream.getTracks().forEach((t) => { try { t.stop(); } catch { /* ignore */ } });
    if (audioElement) { try { audioElement.srcObject = null; } catch { /* ignore */ } }
  };

  pc.oniceconnectionstatechange = () => {
    const s = pc.iceConnectionState;
    log(`ICE: ${s}`);
    if (s === 'connected' || s === 'completed') {
      callbacks.onStatusChange('connected');
    } else if (s === 'failed' || s === 'disconnected') {
      callbacks.onStatusChange('failed');
      callbacks.onError(`ICE ${s}`);
    }
  };

  // Remote audio from the server: the spoken replies.
  pc.ontrack = (e) => {
    log('remote audio track received');
    if (audioElement) audioElement.srcObject = e.streams[0];
  };

  stream.getAudioTracks().forEach((t) => pc.addTrack(t, stream));

  // Creating the data channel before the offer adds the SCTP m-line, so the
  // server can push status/text events alongside the audio track.
  const events = pc.createDataChannel('events');
  events.onopen = () => log('events data channel open');
  events.onclose = () => log('events data channel closed');
  events.onmessage = (e) => {
    if (typeof e.data !== 'string') return;
    try {
      callbacks.onEvent(JSON.parse(e.data) as VoiceServerEvent);
    } catch (err) {
      log(`bad data-channel message: ${String(err)}`);
    }
  };

  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);

  const sid = (sessionId ?? '').trim() || null;
  const resp = await fetch(`${baseUrl}/api/voice/webrtc/offer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(
      typeof tts === 'boolean' ? { sdp: offer.sdp, session_id: sid, tts } : { sdp: offer.sdp, session_id: sid },
    ),
  });

  if (!resp.ok) {
    stop();
    // 429 = the visitor's usage limit: its body is the message to show.
    throw await rejectedResponse(resp, 'voice offer');
  }

  const answer = (await resp.json()) as { sdp: string };
  await pc.setRemoteDescription({ type: 'answer', sdp: answer.sdp });
  log('remote description set - ICE checks starting');

  const send = (message: VoiceClientMessage): boolean => {
    if (stopped || events.readyState !== 'open') return false;
    try {
      events.send(JSON.stringify(message));
      return true;
    } catch (err) {
      log(`data-channel send failed: ${String(err)}`);
      return false;
    }
  };

  return { stop, send };
}
