/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(_on, _config) {},
    baseUrl: 'http://localhost:3000',
  },
});
