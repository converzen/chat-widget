import { defineConfig } from 'tsup';

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
    bundle: true,
    dts: true,
    noExternal: [/(.*)/],
    platform: 'browser',
    loader: {
      '.css': 'text',
    },
  },
]);
