import { defineConfig } from 'tsup';

export default defineConfig([
  // Lean build (without markdown)
  {
    entry: {
      'cvz-widget': 'src/index.ts',
    },
    format: ['iife'],
    globalName: 'GMCWidget',
    outDir: 'dist',
    outExtension: () => ({ js: '.js' }),
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
      'cvz-widget-md': 'src/index.markdown.ts',
    },
    format: ['iife'],
    globalName: 'GMCWidget',
    outDir: 'dist',
    outExtension: () => ({ js: '.js' }),
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
