import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  minify: true,
  target: "esnext",
  outDir: "dist",
  dts: false,
});
