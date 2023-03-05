/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      reporter: ['html', 'json', 'text'],
    },
    environment: 'jsdom',
    exclude: ['cypress', 'lib', 'node_modules'],
    globals: true,
    setupFiles: './src/setup-tests.ts',
  },
});
