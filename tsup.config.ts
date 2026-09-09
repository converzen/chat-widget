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
  // Markdown build (with markdown support)
  {
    entry: {
      'cvz-widget': 'src/index.ts',
    },
    format: ['iife'],
    // globalName removed to allow manual assignment in index.ts
    outDir: 'dist',
    outExtension: () => ({ js: '.js' }),
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
]);
