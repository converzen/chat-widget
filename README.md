# ConverZent Chat Widget

A beautiful, customizable, and easy-to-integrate chat widget SDK for ConverZent. Supports streaming responses, session management, and full customization.

## Features

- 🚀 **Easy Integration** - Works with any website, no framework required
- 💬 **Real-time Streaming** - Server-Sent Events (SSE) for live chat responses
- 🎨 **Fully Customizable** - Colors, sizes, position, and more
- 🔐 **Flexible Authentication** - API key or JWT token support
- 💾 **Session Management** - Continue conversations across page reloads
- 📱 **Responsive Design** - Works on desktop and mobile
- 🎯 **TypeScript Support** - Full type definitions included

## Installation

Choose the method that works best for you:

### Option 1: CDN (Easiest - No Build Step)

Perfect for static websites or quick integration. Just include the script tag:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Welcome</h1>
  
  <!-- Include the widget -->
  <script src="https://cdn.converzent.de/chat-widget/latest/cvz-widget.js"></script>
  
  <!-- Initialize -->
  <script>
    GMCWidget.init({
      apiKey: "your-api-key-here",
      headerMsg: "Chat with us",
      initialGreeting: "Hello! How can we help you?",
      onSaveMessages: async (messages) => {
        // Save messages to your backend
        await fetch('/api/messages', {
          method: 'POST',
          body: JSON.stringify(messages)
        });
      },
      onLoadMessages: async () => {
        // Load messages from your backend
        const response = await fetch('/api/messages');
        return response.json();
      }
    });
  </script>
</body>
</html>
```

### Option 2: NPM Package

Best for projects using bundlers (Webpack, Vite, etc.):

```bash
npm install @converzent/chat-widget
```

Then import and use:

```javascript
import { init } from '@converzent/chat-widget';

init({
  apiKey: "your-api-key-here",
  // ... configuration
});
```

Or in TypeScript:

```typescript
import { init, WidgetConfig } from '@converzent/chat-widget';

const config: WidgetConfig = {
  apiKey: "your-api-key-here",
  headerMsg: "Chat with us",
  // ... other options
};

init(config);
```

### Option 3: GitHub Repository

For developers who want to customize or contribute:

```bash
git clone https://github.com/converzent/chat-widget.git
cd chat-widget
npm install
npm run build
```

Then include the built file from `dist/cvz-widget.js` in your project.

## Configuration

### Basic Configuration

```javascript
GMCWidget.init({
  // Optional: API endpoint (optional, defaults to https://chat.converzent.de)
  chatUrl: "https://chat.converzent.de",
  
  // Authentication: Use either apiKey OR getToken (not both)
  apiKey: "sk_test_...", // For demo/insecure mode
  // OR
  getToken: async () => {
    // For secure mode - keeps the api-key out of the client.
    // call your backend to get a JWT token
    // The token can be retrieved from https://chat.converzent.de/api/get_token 
    // using your api-key. 
    // Your route should be secured by a login or recaptcha.
    const response = await fetch('/api/get-token');
    const data = await response.json();
    return data.token; // or { token: "...", expiresAt: 1234567890 }
  },
  
  // Message persistence
  onSaveMessages: async (messages) => {
    // Save to your backend or local storage
  },
  onLoadMessages: async () => {
    // Load from your backend or local storage
    return [];
  },
  
  // UI Customization
  headerMsg: "Chat with us",
  initialGreeting: "Hello! How can we help?",
  promptPlaceholder: "Type your message...",
  
  // Optional: Continue existing conversation
  sessionId: "existing-session-id",
  
  // Optional: Persona identifier
  persona: "your-persona-id",
});
```

### Styling Customization

Customize the widget appearance:

```javascript
GMCWidget.init({
  // ... other config
  style: {
    // Position: preset or custom
    position: 'bottom-right', // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
    // OR custom: { bottom: '20px', right: '20px' }
    
    // Dialog size: preset or custom
    dialogSize: 'medium', // 'small' | 'medium' | 'large'
    // OR custom: { width: 400, height: 600 }
    
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

### Advanced: Token with Expiration

For better performance and security, return token expiration:

```javascript
getToken: async () => {
  const response = await fetch('/api/get-token');
  const data = await response.json();
  return {
    token: data.token,
    expiresAt: Date.now() + (data.expires_in * 1000) // Convert to milliseconds
  };
}
```

## API Reference

### `WidgetConfig`

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `chatUrl` | `string` | No | `"https://chat.converzent.de"` | API endpoint URL |
| `apiKey` | `string` | No* | - | Direct API key (insecure/demo mode) |
| `getToken` | `() => Promise<string \| TokenResponse>` | No* | - | Function to get JWT token |
| `onSaveMessages` | `(messages: ChatMessage[]) => Promise<void>` | Yes | - | Save messages callback |
| `onLoadMessages` | `() => Promise<ChatMessage[]>` | Yes | - | Load messages callback |
| `headerMsg` | `string` | No | `"Support Chat"` | Header title |
| `initialGreeting` | `string` | No | - | Initial greeting message |
| `promptPlaceholder` | `string` | No | `"Type a message..."` | Input placeholder |
| `sessionId` | `string` | No | - | Continue existing session |
| `persona` | `string` | No | - | Persona identifier |
| `style` | `WidgetStyle` | No | - | Styling customization |

*Either `apiKey` or `getToken` must be provided.

### `WidgetStyle`

| Option | Type | Description |
|--------|------|-------------|
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left' \| { bottom?: string, top?: string, left?: string, right?: string }` | Widget position |
| `dialogSize` | `'small' \| 'medium' \| 'large' \| { width: number, height: number }` | Dialog dimensions |
| `frameColor` | `string` | Border color (hex code) |
| `buttonColor` | `{ normal?: string, hover?: string, open?: string }` | Button colors (hex codes) |

### `TokenResponse`

```typescript
interface TokenResponse {
  token: string;
  expiresAt?: number; // Unix timestamp in milliseconds
}
```

## Examples

### Example 1: Simple Integration with API Key

```javascript
GMCWidget.init({
  chatUrl: "https://chat.converzent.de",
  apiKey: "sk_test_your_key",
  onSaveMessages: async (m) => console.log("Saving:", m),
  onLoadMessages: async () => [],
});
```

### Example 2: Secure Integration with Backend

```javascript
GMCWidget.init({
  chatUrl: "https://chat.converzent.de",
  getToken: async () => {
    const res = await fetch('/api/auth/token');
    const { token } = await res.json();
    return token;
  },
  onSaveMessages: async (messages) => {
    await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messages)
    });
  },
  onLoadMessages: async () => {
    const res = await fetch('/api/messages');
    return res.json();
  },
  headerMsg: "Support",
  initialGreeting: "Hi! How can we help?"
});
```

### Example 3: Custom Styling

```javascript
GMCWidget.init({
  chatUrl: "https://chat.converzent.de",
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
  onSaveMessages: async () => {},
  onLoadMessages: async () => []
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

Open `test.html` in your browser after building to test the widget locally.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For issues, questions, or contributions, please visit our [GitHub repository](https://github.com/converzent/chat-widget).
