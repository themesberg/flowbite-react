import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants.js";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";

interface ConfigurationOptions {
  defaultConfig: NextConfig;
}

type ConfigurationCallback = (phase: string, options: ConfigurationOptions) => NextConfig | Promise<NextConfig>;

let devRan = false;
let buildRan = false;

export default function withFlowbiteReact(nextConfig: NextConfig | ConfigurationCallback = {}): ConfigurationCallback {
  return async (phase: string, options: ConfigurationOptions) => {
    if (phase === PHASE_DEVELOPMENT_SERVER && !devRan) {
      devRan = true;
      dev();
    }
    if (phase === PHASE_PRODUCTION_BUILD && !buildRan) {
      buildRan = true;
      build();
    }

    const userConfig = typeof nextConfig === "function" ? await nextConfig(phase, options) : nextConfig;

    return patchConfig(userConfig);
  };
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
