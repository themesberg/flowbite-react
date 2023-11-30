import react from '@vitejs/plugin-react';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { InlineConfig } from 'vitest';

type ViteConfig = UserConfig & { test: InlineConfig };

const config: ViteConfig = {
  build: {
    sourcemap: true,
  },
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      enabled: true,
      reporter: ['html', 'json', 'text'],
    },
    environment: 'jsdom',
    exclude: ['cypress', 'lib/**/*', 'node_modules'],
    globals: true,
    setupFiles: './src/setup-tests.ts',
  },
};

export default defineConfig(config);
