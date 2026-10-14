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

// historyKey: two stores with different keys must not see each other's
// history (or sessionId) - the per-persona switching case.
const b64 = (obj) => btoa(JSON.stringify(obj));
localStorage.setItem('hk-a', b64({ sessionId: 'session-a', messages: [{ role: 'USER', content: 'from a', createdAt: '' }] }));
const coreA = createChatCore({ chatUrl: 'http://127.0.0.1:1', getToken: async () => 'x', historyKey: 'hk-a' });
const coreB = createChatCore({ chatUrl: 'http://127.0.0.1:1', getToken: async () => 'x', historyKey: 'hk-b' });
await new Promise((resolve) => setTimeout(resolve, 50));
assert(coreA.getState().sessionId === 'session-a', 'historyKey: restores the sessionId stored under its own key');
assert(coreA.getState().messages[0]?.content === 'from a', 'historyKey: restores the messages stored under its own key');
assert(coreB.getState().sessionId === null, 'historyKey: a different key starts without a sessionId');
assert(coreB.getState().messages.length === 1 && coreB.getState().messages[0].role === 'SYSTEM', 'historyKey: a different key starts with just the greeting');
await coreB.clearHistory();
assert(localStorage.getItem('hk-a') !== null, 'historyKey: clearHistory() leaves other keys alone');
coreA.dispose();
coreB.dispose();
assert(typeof coreA.dispose === 'function', 'dispose() is exposed and safe to call while idle');

// client_id per account: two widgets for different accounts (publicIds) on
// one origin must each keep their own server-issued client_id.
const realFetch = globalThis.fetch;
let issued = 0;
globalThis.fetch = async (url, init) => {
  if (String(url).endsWith('/api/chat/client_id')) {
    const { widget_public_id } = JSON.parse(init.body);
    issued++;
    return new Response(JSON.stringify({ client_id: `cid-${widget_public_id}-${issued}` }), { status: 200 });
  }
  return realFetch(url, init);
};
async function clientIdFor(publicId) {
  let seen;
  const core = createChatCore({
    chatUrl: 'http://cvz.test',
    publicId,
    persistMessages: false,
    getToken: async (clientId) => { seen = clientId; return 'x'; },
  });
  await core.getTenantAuthToken();
  core.dispose();
  return seen;
}

localStorage.setItem('cvz_client_id_v2', 'cid-legacy');
assert((await clientIdFor('acct-a')) === 'cid-legacy', 'client_id: the first account adopts a pre-existing unkeyed client_id');
assert(localStorage.getItem('cvz_client_id_v2') === null, 'client_id: the unkeyed entry is gone after adoption');
const firstB = await clientIdFor('acct-b');
assert(firstB?.startsWith('cid-acct-b-'), 'client_id: a second account gets its own, freshly issued client_id');
assert((await clientIdFor('acct-a')) === 'cid-legacy', 'client_id: switching back keeps the first account\'s client_id');
assert((await clientIdFor('acct-b')) === firstB, 'client_id: ...and the second account\'s, without re-issuing');
assert(issued === 1, 'client_id: only one issuance across all the switching');
globalThis.fetch = realFetch;

// --- onUserMessage / onAssistantMessage hooks and cards, against a fake SSE
// stream (fetch mocked; rAF polyfilled since Node has none).
globalThis.requestAnimationFrame ??= (cb) => setTimeout(cb, 0);
globalThis.cancelAnimationFrame ??= (id) => clearTimeout(id);
const sseFetch = (answer) => async () => {
  const events = [
    { type: 'session_created', session_id: 'sess-1' },
    ...answer.split(' ').map((w, i) => ({ type: 'token', content: (i ? ' ' : '') + w })),
    { type: 'done' },
  ];
  const body = events.map((e) => `data: ${JSON.stringify(e)}\n\n`).join('');
  return new Response(new ReadableStream({
    start(c) { c.enqueue(new TextEncoder().encode(body)); c.close(); },
  }), { status: 200, headers: { 'Content-Type': 'text/event-stream' } });
};
const settle = () => new Promise((resolve) => setTimeout(resolve, 30));

{
  globalThis.fetch = sseFetch('Nimm die Nudelmaschine');
  const userEvents = [];
  const hookEvents = [];
  const saved = [];
  const core = createChatCore({
    chatUrl: 'http://chat.test',
    getToken: async () => 'x',
    onSaveMessages: async (sessionId, messages) => { saved.push(messages); },
    onLoadMessages: async () => ({ sessionId: '', messages: [] }),
    onUserMessage: (e) => userEvents.push(e),
    onAssistantMessage: async (e) => {
      hookEvents.push(e);
      return [
        { title: 'Nudelmaschine', url: 'https://www.amazon.de/dp/B1?tag=x', merchant: 'Amazon', imageUrl: 'javascript:alert(1)' },
        { title: 'Kein Link', url: 'javascript:alert(1)' },
        { title: '', url: 'https://x.test' },
        { title: 'Unbezahlt', url: 'https://x.test/a', sponsored: false },
      ];
    },
  });
  await settle();
  await core.sendMessage('Wie mache ich Pasta?');
  await settle();
  const msgs = core.getState().messages;
  const answer = msgs.find((m) => m.role === 'ASSISTANT');
  assert(userEvents.length === 1 && userEvents[0].question === 'Wie mache ich Pasta?', 'hooks: onUserMessage gets the question');
  assert(hookEvents.length === 1 && hookEvents[0].answer === 'Nimm die Nudelmaschine' && hookEvents[0].question === 'Wie mache ich Pasta?' && hookEvents[0].sessionId === 'sess-1', 'hooks: onAssistantMessage gets question, full answer and sessionId');
  assert(answer?.cards?.length === 2, 'cards: invalid cards (no title, non-http url) are dropped');
  assert(answer?.cards?.[0].sponsored === true && answer.cards[0].imageUrl === undefined, 'cards: sponsored defaults to true, a non-http imageUrl is dropped');
  assert(answer?.cards?.[1].sponsored === false, 'cards: an explicit sponsored:false is kept');
  assert(saved.at(-1)?.find((m) => m.role === 'ASSISTANT')?.cards?.length === 2, 'cards: persisted via onSaveMessages');

  core.addCards([{ title: 'Wok', url: 'https://x.test/wok' }]);
  const replaced = core.getState().messages.find((m) => m.role === 'ASSISTANT');
  assert(replaced?.cards?.length === 1 && replaced.cards[0].title === 'Wok', 'addCards(): replaces the latest assistant message\'s cards');
  core.dispose();
}

{
  globalThis.fetch = sseFetch('Antwort');
  const core = createChatCore({
    chatUrl: 'http://chat.test',
    getToken: async () => 'x',
    persistMessages: false,
    onAssistantMessage: async () => { throw new Error('backend down'); },
  });
  await settle();
  const realError = console.error;
  console.error = () => {};
  await core.sendMessage('Frage');
  await settle();
  console.error = realError;
  const st = core.getState();
  assert(st.messages.some((m) => m.role === 'ASSISTANT' && m.content === 'Antwort' && !m.cards), 'hooks: a failing onAssistantMessage leaves the answer intact, no cards');
  assert(st.isStreaming === false && !st.messages.some((m) => m.role === 'SYSTEM' && m.content.includes('Error')), 'hooks: a failing hook is not surfaced as a chat error');
  core.dispose();
}

{
  globalThis.fetch = sseFetch('Antwort');
  let resolveHook;
  const core = createChatCore({
    chatUrl: 'http://chat.test',
    getToken: async () => 'x',
    persistMessages: false,
    onAssistantMessage: () => new Promise((resolve) => { resolveHook = resolve; }),
  });
  await settle();
  await core.sendMessage('Frage');
  await settle();
  await core.clearHistory();
  resolveHook([{ title: 'Zu spät', url: 'https://x.test' }]);
  await settle();
  assert(!core.getState().messages.some((m) => m.cards), 'cards: arriving after clearHistory() are dropped');
  core.dispose();
}
globalThis.fetch = realFetch;

console.log(failures === 0 ? '\nAll smoke checks passed.' : `\n${failures} smoke check(s) FAILED.`);
process.exit(failures === 0 ? 0 : 1);
