# ConverZen Chat Widget

A beautiful, customizable, and easy-to-integrate chat widget SDK for ConverZen. Supports streaming responses, session management, and full customization.

## Features

- 🚀 **Easy Integration** - Works with any website, no framework required
- 💬 **Real-time Streaming** - Server-Sent Events (SSE) for live chat responses
- 🎨 **Fully Customizable** - Colors, sizes, position, icons, and dark mode
- 🔐 **Flexible Authentication** - API key (demo mode) or JWT token (secure mode)
- 💾 **Session Management** - Continue conversations across page reloads
- 📝 **Optional Markdown Rendering** - Opt-in Markdown/GFM support for assistant messages
- 📱 **Responsive Design** - Works on desktop and mobile
- 🎯 **TypeScript Support** - Full type definitions included

## Installation

### Option 1: CDN (Easiest - No Build Step)

This is how the widget is served in production today. Just include the script tag:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Welcome</h1>
  <!-- Include the widget -->
  <script
          async
          src="https://converzen.de/widget/latest/cvz-widget.js"
          id="cvz-widget-script"
  ></script>

  <!-- Initialize -->
  <script>
      (function() {
          const script = document.getElementById('cvz-widget-script');

          const initWidget = () => {
              if (window.cvzWidget) {
                  window.cvzWidget.init({
                      apiKey: "your-api-key-here",
                      headerMsg: "Chat with us",
                      initialGreeting: "Hello! How can we help you?",
                      // Conversation history persists to localStorage automatically -
                      // see Message persistence below to turn it off (persistMessages: false).
                  });
              }
          };

          // Case 1: Script finishes loading after this block runs
          script.addEventListener('load', initWidget);

          // Case 2: Script was already cached/loaded (Fail-safe)
          if (window.cvzWidget) {
              initWidget();
          }
      })();
  </script>
</body>
</html>
```

Pin a specific release instead of `latest` once one exists (e.g. `https://converzen.de/widget/1.0.0/cvz-widget.js`) for production stability — `latest` moves out from under you on every deploy.

Need Markdown rendering in messages? Just set `enableMarkdown: true` — see [Markdown Support](#markdown-support) below.

### Option 2: NPM Package

> **Not yet published.** `@converzen/chat-widget` is not currently on the npm registry. Until it is, use the CDN option above or build from source (Option 3). This section describes the intended usage once it's published.

```bash
npm install @converzen/chat-widget
```

```javascript
import { init } from '@converzen/chat-widget';

init({
  apiKey: "your-api-key-here",
  // ... configuration
});
```

Or in TypeScript, with full type checking on the config object:

```typescript
import cvzWidget, { WidgetConfig } from '@converzen/chat-widget';

const config: WidgetConfig = {
  apiKey: "your-api-key-here",
  headerMsg: "Chat with us",
};

cvzWidget.init(config);
```

> There is no named `init` export — the package's default export is the `cvzWidget` manager instance (`init`, `hide`), matching the CDN build's `window.cvzWidget` global.

### Option 3: Build From Source

For developers who want to customize or contribute:

```bash
git clone git@github.com:converzen/chat-widget.git
cd chat-widget
npm install
npm run build
```

This produces `dist/cvz-widget.js`, which you can host or copy into your own project like the CDN build.

## Configuration

### Basic Configuration

```javascript
cvzWidget.init({
  // Optional: API endpoint (defaults to https://chat.converzen.de)
  chatUrl: "https://chat.converzen.de",

  // Authentication: Use either apiKey OR getToken (not both)
  apiKey: "sk_test_...", // For demo/insecure mode - sent as the X-API-Key header
  // OR
  getToken: async (clientId) => {
    // For secure mode - keeps the api-key out of the client.
    // Call your own backend, which exchanges your api-key for a short-lived
    // JWT via cvz-chat's POST /api/get_token. Your route should be secured
    // by a login or recaptcha. Forward clientId as `client_id` in that call
    // so per-visitor rate limiting can identify this visitor - see below.
    const response = await fetch('/api/get-token', {
      method: 'POST',
      body: JSON.stringify({ clientId }),
    });
    const data = await response.json();
    if (!response.ok) {
      // Propagate cvz-chat's own error text (have your backend forward it
      // as-is) rather than a generic message - the widget looks for it to
      // recover automatically if clientId itself was the problem, see below.
      throw new Error(typeof data === 'string' ? data : JSON.stringify(data));
    }
    return data.token; // a raw JWT string, or { token, expiresAt } - see below
  },

  // Conversation history persists to localStorage automatically - see
  // Message persistence below to turn it off.
  persistMessages: true,

  // UI Customization
  headerMsg: "Chat with us",
  subheaderMsg: "We typically reply in a few minutes",
  initialGreeting: "Hello! How can we help?",
  promptPlaceholder: "Type your message...",
  darkMode: false,
  enableMarkdown: false, // requires the markdown build, see below

  // Optional: Select a specific persona/version
  persona: "customer-support", // shorthand for { alias: "customer-support" }
});
```

### Authentication

Use exactly one of `apiKey` or `getToken` - never both:

- **`apiKey`** ("demo"/insecure mode): the raw key is sent to `chatUrl` in every request via the `X-API-Key` header. Anyone who can read your page's JS can read this key, so only use it for keys scoped to a low-privilege, rate-limited persona.
- **`getToken`** ("secure" mode): your own backend holds the real API key, calls cvz-chat's `POST /api/get_token` (optionally passing `persona` there — see below) to mint a short-lived JWT, and hands only that JWT to the widget. The widget sends it as `Authorization: Bearer <token>` and caches it until it expires.

#### Per-visitor rate limiting (`clientId`)

The widget generates a stable per-browser id (stored in `localStorage`) and passes it as the sole argument to your `getToken` callback: `getToken(clientId)`. Existing zero-argument `getToken` implementations keep working unchanged - the argument is simply ignored if you don't declare it.

In `apiKey` mode this id is sent automatically on every request as an `X-Client-Id` header, so there's nothing for you to wire up. In `getToken`/JWT mode, forward it to cvz-chat's `POST /api/get_token` as `client_id` so the minted JWT carries it as a claim and per-visitor rate limiting can identify the visitor; the widget also sends it as a fallback `X-Client-Id` header in this mode in case your backend doesn't forward it into the token. This id is a cost-control signal, not a security boundary - clearing storage or an incognito window resets it.

`getToken` may return either:

```typescript
// A raw token string - the widget treats it as never-expiring and re-fetches
// only after a 401/403 from the server.
async () => "eyJhbGciOi..."

// Or a TokenResponse for proactive refresh before the token actually expires:
async () => ({ token: "eyJhbGciOi...", expiresAt: Date.now() + 3600_000 })
```

`expiresAt` is a Unix timestamp **in milliseconds**; omit it for a token with no fixed lifetime.

On a 401/403 from the chat API, the widget clears its cached token, calls `getToken` again, and retries the request once.

If your `getToken` throws/rejects with cvz-chat's own `get_token` error text (`invalid client_id` or `client_id does not belong to this account` - see the example above, which forwards it as-is), the widget treats that as its client_id being stale rather than a generic failure: it discards the cached one, requests a fresh one from cvz-chat, and retries `getToken` once more with it. This is throttled to once an hour per browser for accounts with no CAPTCHA on client_id issuance, so a durably-invalid id (e.g. after a server-side key rotation) can't turn into a request on every message; accounts that do require a CAPTCHA aren't throttled this way, since solving one is itself the cost gate. If your backend doesn't propagate that exact error text, this recovery step simply never triggers - no different from before it existed.

If `WidgetConfig.publicId` is set (the non-secret id from your ConverZen dashboard), `clientId` is instead one cvz-chat itself issued and vouches for - see the "Client ID Protocol" design - rather than a self-generated value. Resolution starts when the visitor opens the widget (not on page load, so a CAPTCHA-gated account never runs a challenge before the visitor has done anything) and is memoized, so reopening doesn't repeat it. If your account requires a CAPTCHA, a small Cloudflare Turnstile or reCAPTCHA widget briefly appears above the message list while it resolves - deliberately real and visible rather than hidden, since a hidden or off-screen challenge measurably hurts its own solve rate. Without `publicId`, `clientId` falls back to the old self-generated, unverified value - no regression for integrations that haven't adopted it.

#### Message persistence

Conversation history persists to `localStorage` automatically - one shared key per origin, lightly obfuscated (Base64, not encryption - there's no key to speak of, since it would ship in this same public JS bundle either way; this stops a casual glance at localStorage in devtools, nothing that resists real intent). Set `persistMessages: false` for session-only history instead - nothing written, nothing restored, a fresh conversation on every reload.

For your own backend, cross-device sync, or analytics, supply `onSaveMessages`/`onLoadMessages` instead - either one takes priority over the built-in `persistMessages` behavior when supplied:

```javascript
cvzWidget.init({
  // ...
  onSaveMessages: async (sessionId, messages) => {
    await fetch('/api/chat-history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, messages }),
    });
  },
  onLoadMessages: async () => {
    const res = await fetch('/api/chat-history');
    if (!res.ok) return { sessionId: '', messages: [] };
    return res.json(); // { sessionId, messages }
  },
});
```

`onLoadMessages` must return `sessionId: ''` (never a fabricated id) when there's nothing to restore - an id sent to `/continuation/stream` that cvz-chat has never heard of 404s there, surfacing as a confusing error on someone's very first message.

### Extra context per message

`extraContext` merges arbitrary fields verbatim into every completion/continuation request body - useful for grounding a conversation on something host-app-specific (e.g. RAG resource hints). Field names must match cvz-chat's wire format exactly, same as `persona`:

```javascript
cvzWidget.init({
  // ...
  extraContext: { mcp_resources: ['gmc:///reading/abc123'] },
});
```

Unlike `persona` (first message of a session only), `extraContext` is sent on every call.

### Opening the panel programmatically

`autoOpen: true` starts the chat panel already open on mount, instead of waiting for a launcher click. Combine it with re-initializing the widget (`cvzWidget.hide()` then `cvzWidget.init({...})`) to pop the panel open with different config/context from your own UI:

```javascript
function openChatFor(topic) {
  window.cvzWidget.hide();
  window.cvzWidget.init({
    ...baseConfig,
    autoOpen: true,
    extraContext: { mcp_resources: [`myapp:///topic/${topic}`] },
  });
}
```

### Persona Selection

For a normal widget deployment (a `prod`-type API key), select the persona by alias - this is the common case:

```typescript
persona: "customer-support" // shorthand for { alias: "customer-support" }
```

`persona_id` and `version_tag` only matter for `test`/`super` keys (e.g. previewing a draft
persona before it goes live) and are unlikely to apply to a real deployment. When you do need
them, pass the full object instead of the string shorthand - field names match the cvz-chat API
exactly (snake_case):

```typescript
persona: {
  alias: "customer-support",   // or persona_id, not both
  persona_id: 42,
  version_tag: "next",         // test/super keys only - selects the draft version
}
```

**Important limitations** - `persona` is only applied when:
- authenticating with `apiKey` (not `getToken`/JWT mode - see below), **and**
- there is no existing session yet (it's ignored on every message after the first).

Why: a session is permanently bound to whichever persona/version created it, so continuation requests (`/api/chat/continuation/stream`) don't take a persona at all - there's nothing to reselect. In `getToken` mode, persona selection happens on your backend when it requests the JWT (pass `persona` to cvz-chat's `POST /api/get_token`); the token itself encodes which persona/version it's scoped to, so the widget has nothing to add. If you need per-conversation persona switching in JWT mode, control it by requesting a differently-scoped token, not via this config field.

### Styling Customization

Customize the widget appearance:

```javascript
cvzWidget.init({
  // ... other config
  style: {
    // Position: preset or custom
    position: 'bottom-right', // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
    // OR custom: { bottom: '20px', right: '20px' }

    // Dialog size: preset or custom
    dialogSize: 'medium', // 'small' | 'medium' | 'large'
    // OR custom: { width: 400, height: 600 } (pixels; clamped to a 250x300 minimum)

    // Frame/border color (hex)
    frameColor: '#E5E7EB',

    // Button colors (hex codes)
    buttonColor: {
      normal: '#2563EB',  // Normal state
      hover: '#1D4ED8',   // Hover state
      open: '#1F2937'     // When chat is open
    }
  }
});
```

### Markdown Support

Assistant messages are plain text unless you opt in to Markdown rendering (GitHub-Flavored Markdown, via `react-markdown` + `remark-gfm`). This is a runtime flag, not a separate build - the renderer ships in the one bundle, it's just inactive until you turn it on:

```javascript
cvzWidget.init({
  // ...
  enableMarkdown: true,
});
```

### Dark Mode

```javascript
cvzWidget.init({
  // ...
  darkMode: true,
});
```

Restyles the header, message bubbles, input, and Markdown content for a dark background. It does not follow `prefers-color-scheme` automatically - toggle it yourself if you want that.

## API Reference

### `WidgetConfig`

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `chatUrl` | `string` | No | `"https://chat.converzen.de"` | cvz-chat API base URL |
| `apiKey` | `string` | No* | - | Direct API key (insecure/demo mode) |
| `getToken` | `(clientId: string) => Promise<string \| TokenResponse>` | No* | - | Returns a JWT to use in secure mode - see [Per-visitor rate limiting](#per-visitor-rate-limiting-clientid) |
| `persistMessages` | `boolean` | No | `true` | Persist conversation history to localStorage - see [Message persistence](#message-persistence) |
| `headerMsg` | `string` | No | `"Support Chat"` | Header title |
| `subheaderMsg` | `string` | No | `"We typically reply in a few minutes"` | Header subtitle |
| `initialGreeting` | `string` | No | `"Hi, how can I help you ?"` | Shown when there's no history to restore |
| `promptPlaceholder` | `string` | No | `"Type a message..."` | Input placeholder |
| `persona` | `string \| ChatPersonaIdentifier` | No | - | Persona/version selector - see [Persona Selection](#persona-selection) for when this actually applies |
| `darkMode` | `boolean` | No | `false` | Enable the dark theme |
| `enableMarkdown` | `boolean` | No | `false` | Render assistant messages as Markdown/GFM |
| `style` | `WidgetStyle` | No | - | Styling customization |
| `icons` | `WidgetIcons` | No | - | Icon overrides |
| `onSaveMessages` | `(sessionId: string, messages: ChatMessage[]) => Promise<void>` | No | - | Your own history backend - see [Message persistence](#message-persistence) |
| `onLoadMessages` | `() => Promise<{sessionId: string, messages: ChatMessage[]}>` | No | - | Your own history backend - see [Message persistence](#message-persistence) |
| `extraContext` | `Record<string, unknown>` | No | - | Extra fields merged into every completion/continuation request - see [Extra context per message](#extra-context-per-message) |
| `autoOpen` | `boolean` | No | `false` | Start the panel open on mount - see [Opening the panel programmatically](#opening-the-panel-programmatically) |

*Either `apiKey` or `getToken` must be provided.

`sessionId` is not a config option - the session is tracked internally, and persisted (or not) per `persistMessages`, see [Message persistence](#message-persistence).

### `ChatMessage`

```typescript
interface ChatMessage {
  content: string;
  role: 'USER' | 'ASSISTANT' | 'SYSTEM';
  createdAt: string; // ISO 8601
  sources?: string[];
}
```

### `ChatPersonaIdentifier`

```typescript
interface ChatPersonaIdentifier {
  alias?: string;       // Persona alias, e.g. "customer-support". Used by test/prod API keys.
  persona_id?: number;  // Numeric persona ID. Used by super/test API keys.
  version_tag?: string; // e.g. "next" for the draft version. Test/super keys only.
}
```

Field names are snake_case and match the cvz-chat wire format exactly (unlike the rest of this config, which is camelCase) - the widget forwards this object to the API as-is.

### `WidgetStyle`

| Option | Type | Description |
|--------|------|-------------|
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left' \| { bottom?: string, top?: string, left?: string, right?: string }` | Widget position |
| `dialogSize` | `'small' \| 'medium' \| 'large' \| { width: number, height: number }` | Dialog dimensions in pixels |
| `frameColor` | `string` | Border color (hex code) |
| `buttonColor` | `{ normal?: string, hover?: string, open?: string }` | Button colors (hex codes) |

### `WidgetIcons`

Each field is raw SVG (or other inline HTML) markup that replaces the corresponding built-in icon. Use `stroke="currentColor"` / `fill="currentColor"` in your markup so the icon inherits the surrounding color the same way the built-in icons do (e.g. the launcher button's white icon color).

| Option | Type | Description |
|--------|------|-------------|
| `launcher` | `string` | Closed launcher-button icon; also used for the empty-conversation placeholder |
| `close` | `string` | Open launcher-button icon and the header's close-chat icon |
| `send` | `string` | Message input's send-button icon |
| `clear` | `string` | Header's clear-history icon |

```javascript
cvzWidget.init({
  // ...
  icons: {
    launcher: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="..."/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="..."/></svg>',
  },
});
```

Any icon left unset keeps the default built-in icon.

### `TokenResponse`

```typescript
interface TokenResponse {
  token: string;
  expiresAt?: number; // Unix timestamp in milliseconds. Omit for a token that never expires.
}
```

## Examples

### Example 1: Simple Integration with API Key

```javascript
cvzWidget.init({
  chatUrl: "https://chat.converzen.de",
  apiKey: "sk_test_your_key",
});
```

### Example 2: Secure Integration with Backend

```javascript
cvzWidget.init({
  chatUrl: "https://chat.converzen.de",
  getToken: async () => {
    const res = await fetch('/api/auth/token');
    const { token } = await res.json();
    return token;
  },
  headerMsg: "Support",
  initialGreeting: "Hi! How can we help?"
});
```

### Example 3: Custom Styling, Session-Only History

```javascript
cvzWidget.init({
  chatUrl: "https://chat.converzen.de",
  apiKey: "sk_test_...",
  style: {
    position: 'bottom-left',
    dialogSize: 'large',
    frameColor: '#D1D5DB',
    buttonColor: {
      normal: '#10B981',
      hover: '#059669',
      open: '#374151'
    }
  },
  persistMessages: false, // fresh conversation every reload, nothing in localStorage
});
```

## Development

### Building

```bash
npm install
npm run build
```

### Development Mode

```bash
npm run dev
```

This will watch for changes and rebuild automatically.

### Testing

Open `test.html` in your browser after building to test the widget locally. Update its `chatUrl` and `apiKey` to point at whichever cvz-chat environment you're testing against (`chat.converzen.de` for prod, `chat.converzent.de` for test) - it does not infer this from anything, so a stale value will silently exercise the wrong backend.

## Production Deployment

The production build isn't published through npm/CDN release flows today - `cvz-infra/deploy/deploy.sh --prod` copies the built `dist/` assets straight to `/var/opt/services/converzen/public/widget/latest/` on the server, which nginx serves at `https://converzen.de/widget/latest/`. See `docs/PUBLISHING.md` for the npm/GitHub-release path this project could move to later, and `docs/CDN_SETUP.md` for CDN configuration reference - both describe a general-purpose workflow rather than what's actually wired up today.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For issues, questions, or contributions, please visit our [GitHub repository](https://github.com/converzen/chat-widget).
