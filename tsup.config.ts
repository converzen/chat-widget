import { defineConfig } from 'tsup';

export default defineConfig([
  // Lean build (without markdown)
  {
    entry: ['src/index.ts'],
    format: ['iife'],
    globalName: 'GMCWidget',
    outDir: 'dist',
    outExtension: () => ({ js: '.global.js' }),
    clean: true,
    minify: true,
    bundle: true,
    dts: {
      exclude: ['**/*.d.ts'],
    },
    noExternal: [/(.*)/],
    external: ['react-markdown'], // Exclude react-markdown from lean build
    platform: 'browser',
    loader: {
      '.css': 'text',
    },
  },
  // Markdown build (with markdown support)
  {
    entry: {
      'index.global.markdown': 'src/index.markdown.ts',
    },
    format: ['iife'],
    globalName: 'GMCWidget',
    outDir: 'dist',
    outExtension: () => ({ js: '.js' }), // Remove .global since it's in the entry name
    clean: false, // Don't clean on second build
    minify: true,
    bundle: true,
    dts: false, // Only generate DTS once
    noExternal: [/(.*)/],
    platform: 'browser',
    loader: {
      '.css': 'text',
    },
  },
]);
