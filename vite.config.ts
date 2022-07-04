/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['html', 'json', 'text'],
    },
    environment: 'jsdom',
    exclude: ['cypress', 'lib', 'node_modules', 'docs'],
    globals: true,
    setupFiles: 'src/setup-tests.ts',
  },
});
