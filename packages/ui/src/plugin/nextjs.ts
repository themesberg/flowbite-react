import type { NextConfig } from "next";
import type { Configuration } from "webpack";
import unpluginWebpack from "./webpack";

export function withFlobiteReact(nextConfig: NextConfig): NextConfig {
  // TODO: detect if --turbopack is enabled

  return {
    ...nextConfig,
    webpack(config: Configuration, context) {
      if (!config.plugins) {
        config.plugins = [];
      }

      config.plugins.push(unpluginWebpack());

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, context);
      }

      return config;
    },
  };
}
