import { defineConfig } from 'tsup';
import { execSync } from 'node:child_process';

// A short, inconspicuous tag identifying exactly which commit + moment
// produced this bundle - purely a "what am I actually looking at" debugging
// aid (console.log + cvzWidget.buildId), not user-facing. Falls back
// gracefully if .git isn't present in the build context (e.g. some Docker
// build setups don't copy it).
function getBuildId(): string {
  let commit = 'unknown';
  try {
    commit = execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    // no .git available in this build context - keep 'unknown'
  }
  return `${commit}-${new Date().toISOString()}`;
}

export default defineConfig([
  {
    entry: {
      'cvz-widget': 'src/index.ts',
    },
    // 'iife' is the CDN/script-tag build (self-registers window.cvzWidget,
    // still what converzen.de's own production deploy serves). 'esm' is a
    // real module build for npm-style consumers (e.g. `import cvzWidget
    // from '@converzen/chat-widget'`) - it still self-registers the global
    // too (harmless, same as the IIFE), it's just also a proper module.
    format: ['iife', 'esm'],
    // globalName removed to allow manual assignment in index.ts
    outDir: 'dist',
    outExtension: ({ format }) => ({ js: format === 'esm' ? '.mjs' : '.js' }),
    clean: false, // Don't clean on second build
    minify: true,
    treeshake: true,
    bundle: true,
    dts: true,
    noExternal: [/(.*)/],
    platform: 'browser',
    loader: {
      '.css': 'text',
    },
    define: {
      __CVZ_BUILD_ID__: JSON.stringify(getBuildId()),
    },
    esbuildOptions(options) {
      // Alias react and react-dom to preact/compat for react-markdown compatibility
      options.alias = options.alias || {};
      options.alias['react'] = 'preact/compat';
      options.alias['react-dom'] = 'preact/compat';
      options.alias['react/jsx-runtime'] = 'preact/jsx-runtime';
    },
  },
  {
    // @converzen/chat-widget/core - framework-agnostic, zero runtime
    // dependencies (no preact/react import anywhere in its graph). No react
    // alias here - unlike the default entry above, this one must never
    // touch Preact.
    entry: {
      core: 'src/core/index.ts',
    },
    format: ['esm', 'cjs'],
    outDir: 'dist',
    outExtension: ({ format }) => ({ js: format === 'esm' ? '.mjs' : '.js' }),
    clean: false,
    minify: true,
    treeshake: true,
    bundle: true,
    dts: true,
    platform: 'browser',
  },
  {
    // @converzen/chat-widget/react - the React adapter. `react` stays
    // external (a peer dependency, see package.json) so a consumer's own
    // React instance is reused rather than a second copy getting bundled in.
    entry: {
      react: 'src/react/index.ts',
    },
    format: ['esm', 'cjs'],
    outDir: 'dist',
    outExtension: ({ format }) => ({ js: format === 'esm' ? '.mjs' : '.js' }),
    clean: false,
    minify: true,
    treeshake: true,
    bundle: true,
    dts: true,
    external: ['react'],
    platform: 'browser',
  },
]);
