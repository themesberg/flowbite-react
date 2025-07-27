import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    exclude: ["scripts", "src/cli", "src/helpers"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.ts",
    coverage: {
      include: ["src"],
    },
  },
});
