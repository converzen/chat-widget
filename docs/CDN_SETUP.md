# CDN Setup Guide

This guide explains how to set up the ConverZent Chat Widget for CDN distribution.

## Building for CDN

The widget is already configured to build a CDN-ready file:

```bash
npm run build
```

This creates `dist/cvz-widget.js` which can be hosted on any CDN or static file server.

## Hosting Options

### Option 1: Your Own CDN/Server

1. Build the widget: `npm run build`
2. Upload `dist/cvz-widget.js` to your CDN/server
3. Users include it via:
   ```html
   <script src="https://your-cdn.com/chat-widget/cvz-widget.js"></script>
   ```

### Option 2: GitHub Releases

1. Create a GitHub release
2. Upload `dist/cvz-widget.js` as a release asset
3. Users can use via jsDelivr:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/converzent/chat-widget@latest/dist/cvz-widget.js"></script>
   ```

### Option 3: npm CDN (unpkg/jsDelivr)

If published to npm, users can use:

```html
<!-- unpkg -->
<script src="https://unpkg.com/@converzent/chat-widget@latest/dist/cvz-widget.js"></script>

<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@converzent/chat-widget@latest/dist/cvz-widget.js"></script>
```

## Versioning

For production use, pin to a specific version:

```html
<!-- Pin to version 1.0.0 -->
<script src="https://cdn.converzent.de/chat-widget/1.0.0/cvz-widget.js"></script>
```

For latest (not recommended for production):

```html
<script src="https://cdn.converzent.de/chat-widget/latest/cvz-widget.js"></script>
```

## CDN Configuration

### Recommended CDN Settings

- **Cache-Control**: `public, max-age=31536000, immutable` (for versioned URLs)
- **Content-Type**: `application/javascript; charset=utf-8`
- **CORS**: Enable CORS headers if serving from different domain
- **Compression**: Enable gzip/brotli compression

### Example Nginx Configuration

```nginx
location /chat-widget/ {
    alias /path/to/dist/;
    add_header Cache-Control "public, max-age=31536000, immutable";
    add_header Content-Type "application/javascript; charset=utf-8";
    gzip on;
    gzip_types application/javascript;
}
```

## Usage After CDN Setup

Once hosted, users can include:

```html
<script src="https://cdn.converzent.de/chat-widget/latest/cvz-widget.js"></script>
<script>
  GMCWidget.init({
    chatUrl: "https://chat.converzent.de",
    apiKey: "your-api-key",
    onSaveMessages: async (m) => {},
    onLoadMessages: async () => []
  });
</script>
```
