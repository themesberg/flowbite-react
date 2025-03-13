import type { NextConfig } from "next";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";

export default function withFlowbiteReact(nextConfig: NextConfig): NextConfig {
  if (process.env.NODE_ENV === "development") {
    dev();
  }
  if (process.env.NODE_ENV === "production") {
    build();
  }

  return nextConfig;
}
