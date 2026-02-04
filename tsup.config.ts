import { defineConfig } from 'tsup';
import { execSync } from 'child_process';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['iife'],
  globalName: 'GMCWidget',
  clean: true,
  minify: true,
  bundle: true,
  dts: true,
  // We exclude nothing - everything must be in the one .js file
  noExternal: [/(.*)/], 
  platform: 'browser',
  esbuildOptions(options) {
    // This allows us to import .css files as text strings
    options.loader = {
      '.css': 'text',
    };
  },
  // Optional: Run tailwind build before tsup bundles
  async onSuccess() {
    console.log('Build successful!');
  }
});
