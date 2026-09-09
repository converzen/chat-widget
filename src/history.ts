import type { ChatMessage } from './types';

const HISTORY_STORAGE_KEY = 'cvz_chat_history';

/**
 * Base64, not encryption - there's no key (it ships in this same public JS
 * bundle either way), so this is a deterrent against a casual glance at
 * localStorage in devtools, not a security boundary. UTF-8 safe (chat
 * messages can contain anything - bare btoa/atob breaks on emoji and
 * non-Latin text).
 */
function obfuscate(plaintext: string): string {
  const bytes = new TextEncoder().encode(plaintext);
  let binary = '';
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary);
}

function deobfuscate(encoded: string): string {
  const binary = atob(encoded);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/**
 * Built-in message persistence, used whenever `WidgetConfig.onSaveMessages`/
 * `onLoadMessages` aren't supplied. Most integrations just want "remember
 * this conversation in this browser" and shouldn't have to write - and
 * reimplement obfuscation for - that themselves to get it; an integration
 * that needs its own backend or analytics should still supply its own
 * callbacks, which take priority over this default.
 */
export async function defaultSaveMessages(sessionId: string, messages: ChatMessage[]): Promise<void> {
  try {
    localStorage.setItem(HISTORY_STORAGE_KEY, obfuscate(JSON.stringify({ sessionId, messages })));
  } catch {
    // localStorage unavailable (private mode, disabled storage, quota) -
    // history just won't persist across reloads.
  }
}

/**
 * An empty `sessionId` (never a fabricated one) is what tells the widget to
 * start a fresh conversation via `POST /api/chat/completion/stream` rather
 * than continuing a session cvz-chat has never actually heard of - a
 * client-generated session id sent to `/continuation/stream` 404s there,
 * surfacing as a confusing "temporarily unavailable" error on literally the
 * first message from anyone with empty storage. Every return path here
 * must leave `sessionId` empty rather than inventing one.
 */
export async function defaultLoadMessages(): Promise<{ sessionId: string; messages: ChatMessage[] }> {
  const EMPTY = { sessionId: '', messages: [] };
  try {
    const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!stored) {
      return EMPTY;
    }
    // Falls back to parsing `stored` directly as plain JSON, in case it was
    // ever written by something that didn't obfuscate it.
    let data: { sessionId?: string; messages?: ChatMessage[] };
    try {
      data = JSON.parse(deobfuscate(stored));
    } catch {
      data = JSON.parse(stored);
    }
    return { sessionId: data.sessionId || '', messages: data.messages || [] };
  } catch {
    return EMPTY;
  }
}
