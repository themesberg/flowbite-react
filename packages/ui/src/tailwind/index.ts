import plugin from "tailwindcss/plugin";
import { theme } from "./theme";
import { PluginOptions } from "./types";
import { resolveClassList, resolvePrefix } from "./utils";

export default plugin.withOptions<PluginOptions>(
  // plugin
  () => () => {},
  // config
  ({ prefix, separator, components } = {}) => ({
    safelist: resolvePrefix(resolveClassList(components), prefix, separator),
    theme,
  }),
);
