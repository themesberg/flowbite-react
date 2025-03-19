import type { NextConfig } from "next";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";

interface ConfigurationOptions {
  defaultConfig: NextConfig;
}

type ConfigurationCallback = (phase: string, options: ConfigurationOptions) => NextConfig | Promise<NextConfig>;

export default function withFlowbiteReact(
  nextConfig: NextConfig | ConfigurationCallback = {},
): NextConfig | ConfigurationCallback {
  if (process.env.NODE_ENV === "development") {
    dev();
  }
  if (process.env.NODE_ENV === "production") {
    build();
  }

  if (typeof nextConfig === "function") {
    return async (phase: string, options: ConfigurationOptions) => {
      const originalConfig = await nextConfig(phase, options);
      return patchConfig(originalConfig);
    };
  }

  return patchConfig(nextConfig);
}

function patchConfig(config: NextConfig): NextConfig {
  const experimental = config.experimental || {};
  const optimizePackageImports = experimental.optimizePackageImports || [];

  return {
    ...config,
    experimental: {
      ...experimental,
      optimizePackageImports: [...optimizePackageImports, "flowbite-react"],
    },
  };
}
