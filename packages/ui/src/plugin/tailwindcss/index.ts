import plugin from "tailwindcss/plugin.js";
import { colorsAsVariables } from "./colors";
import { config } from "./config";

export default plugin(
  // plugin
  (api) => {
    api.addBase({
      ":root": colorsAsVariables,
    });
  },
  // config
  config,
);
