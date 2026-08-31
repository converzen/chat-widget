# Publishing Guide

This guide explains how to publish the ConverZen Chat Widget to npm, GitHub, and CDN.

> **Status:** none of this has happened yet. `@converzen/chat-widget` is not on the npm
> registry (`npm view @converzen/chat-widget` 404s), and there are no GitHub releases. The
> widget currently reaches production only via `cvz-infra/deploy/deploy.sh --prod`, serving
> `dist/` from `https://converzen.de/widget/latest/`. This guide is the plan for *if/when* npm
> publishing happens, not a description of the current process.

## Prerequisites

1. **npm account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **GitHub repository**: Create a repository (e.g., `converzen/chat-widget`)
3. **CDN hosting**: Set up CDN or static file hosting

## 1. NPM Publishing

### Initial Setup

1. **Login to npm**:
   ```bash
   npm login
   ```

2. **Verify package name is available**:
   ```bash
   npm view @converzen/chat-widget
   ```
   If it returns 404, the name is available.

3. **Update version** (if needed):
   ```bash
   npm version patch  # 1.0.0 -> 1.0.1
   npm version minor  # 1.0.0 -> 1.1.0
   npm version major  # 1.0.0 -> 2.0.0
   ```

### Publishing

1. **Build the package**:
   ```bash
   npm run build
   ```

2. **Publish to npm**:
   ```bash
   npm publish --access public
   ```
   (The `--access public` flag is required for scoped packages like `@converzen/...`)

3. **Verify publication**:
   ```bash
   npm view @converzen/chat-widget
   ```

### Updating

For subsequent releases:

```bash
# Update version
npm version patch

# Build
npm run build

# Publish
npm publish --access public
```

### Using npm CDN

Once published, users can use via npm CDNs:

```html
<!-- unpkg -->
<script src="https://unpkg.com/@converzen/chat-widget@latest/dist/cvz-widget.js"></script>

<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@converzen/chat-widget@latest/dist/cvz-widget.js"></script>
```

## 2. GitHub Repository

The repository already exists at `git@github.com:converzen/chat-widget.git` and `package.json`'s
`repository`/`bugs`/`homepage` fields already point at it - no setup needed here, only releases:

### GitHub Releases

1. **Create a release**:
   - Go to GitHub repository → Releases → "Create a new release"
   - Tag: `v1.0.0` (match package.json version)
   - Title: `v1.0.0`
   - Description: Release notes

2. **Upload build artifacts** (optional):
   - Upload `dist/cvz-widget.js` as a release asset
   - Users can download directly or use via jsDelivr

### Using GitHub CDN (jsDelivr)

If you upload `dist/cvz-widget.js` to releases:

```html
<script src="https://cdn.jsdelivr.net/gh/converzen/chat-widget@v1.0.0/dist/cvz-widget.js"></script>
```

Or from main branch:

```html
<script src="https://cdn.jsdelivr.net/gh/converzen/chat-widget@main/dist/cvz-widget.js"></script>
```

## 3. CDN Hosting

### Option A: Your Own CDN

1. **Build the widget**:
   ```bash
   npm run build
   ```

2. **Upload to CDN**:
   - Upload `dist/cvz-widget.js` to your CDN
   - Organize by version: `/chat-widget/1.0.0/cvz-widget.js`
   - Create symlink for `latest`: `/chat-widget/latest/cvz-widget.js`

3. **Configure CDN**:
   - Set proper cache headers
   - Enable compression (gzip/brotli)
   - Enable CORS if needed

### Option B: GitHub Pages

1. **Enable GitHub Pages** in repository settings

2. **Create `docs` folder**:
   ```bash
   mkdir docs
   cp dist/cvz-widget.js docs/
   ```

3. **Commit and push**:
   ```bash
   git add docs/
   git commit -m "Add CDN build"
   git push
   ```

4. **Users can access**:
   ```html
   <script src="https://converzen.github.io/chat-widget/cvz-widget.js"></script>
   ```

## Version Management

### Semantic Versioning

Follow [semver](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Versioning Strategy

- **npm**: Use `npm version` command
- **GitHub**: Tag releases with `v1.0.0` format
- **CDN**: Organize files by version number

## Checklist Before Publishing

- [ ] Update version in `package.json`
- [ ] Update `README.md` with latest features
- [ ] Run `npm run build` successfully
- [ ] Test the built file locally (`test.html`)
- [ ] Verify all configuration options are documented
- [ ] Check that `.npmignore` excludes unnecessary files
- [ ] Ensure `dist/` contains all necessary files

## Post-Publishing

1. **Update documentation** with CDN URLs
2. **Create release notes** on GitHub
3. **Announce** on your website/docs
4. **Monitor** for issues/feedback

## Troubleshooting

### npm: "Package name already exists"
- Choose a different name, or
- Use a scoped package: `@converzen/chat-widget`

### npm: "You do not have permission"
- Ensure you're logged in: `npm whoami`
- For scoped packages, use `--access public`

### CDN: CORS errors
- Enable CORS headers on your CDN
- Or use npm CDN (unpkg/jsDelivr) which handles CORS
