import plugin from "tailwindcss/plugin";
import { getConfig } from "./config";
import type { PluginOptions } from "./types";

export default plugin.withOptions<Omit<PluginOptions, "version">>(
  // plugin
  () => () => {},
  // config
  (options = {}) => getConfig({ ...options, version: 3 }),
);
