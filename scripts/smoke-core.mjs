// Minimal smoke test for the built dist/core.mjs (run after `npm run
// build`). Not a substitute for exercising test.html in a real browser
// against a real cvz-chat env (see README's Testing section) - this only
// validates the store's own wiring (subscribe/getState stability, action
// methods, error-path state transitions) against an intentionally
// unreachable chatUrl, since there's no headless-browser/network-fetch
// harness in this project.
import { createChatCore } from '../dist/core.mjs';

if (typeof globalThis.localStorage === 'undefined') {
  const store = new Map();
  globalThis.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
  };
}

let failures = 0;
function assert(cond, msg) {
  if (!cond) {
    failures++;
    console.error('FAIL:', msg);
  } else {
    console.log('ok:', msg);
  }
}

const events = [];
const core = createChatCore({
  chatUrl: 'http://127.0.0.1:1', // deliberately unreachable - exercises the error path
  getToken: async () => ({ token: 'fake-token', expiresAt: undefined }),
  persistMessages: false,
});

const unsubscribe = core.subscribe(() => events.push('notified'));

const s1 = core.getState();
const s2 = core.getState();
assert(s1 === s2, 'getState() returns the same reference when nothing changed');

assert(s1.isOpen === false, 'isOpen defaults to false without autoOpen');
core.open();
assert(core.getState().isOpen === true, 'open() sets isOpen true');
assert(events.includes('notified'), 'subscribe() listener fires on state change');

core.close();
assert(core.getState().isOpen === false, 'close() sets isOpen false');

await new Promise((resolve) => setTimeout(resolve, 50)); // let async loadHistory settle
assert(core.getState().messages.length === 1, 'seeds the initial greeting message when history is empty');
assert(core.getState().messages[0].role === 'SYSTEM', 'initial message is a SYSTEM greeting');

await core.sendMessage('hello there');
const afterSend = core.getState();
assert(afterSend.messages.some((m) => m.role === 'USER' && m.content === 'hello there'), 'sendMessage() appends the user message');
assert(afterSend.isStreaming === false, 'isStreaming resets to false after a failed request');
assert(
  afterSend.messages.some((m) => m.role === 'SYSTEM' && m.content.includes('Error')),
  'a network failure surfaces as a SYSTEM error message, not a thrown exception',
);

unsubscribe();

console.log(failures === 0 ? '\nAll smoke checks passed.' : `\n${failures} smoke check(s) FAILED.`);
process.exit(failures === 0 ? 0 : 1);
