import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['iife'],
  globalName: 'GMCWidget',
  clean: true,
  minify: true,
  bundle: true,
  dts: true,
  noExternal: [/(.*)/], 
  platform: 'browser',
  loader: {
    '.css': 'text',
  },
  async onSuccess() {
    console.log('Build successful!');
  }
});
