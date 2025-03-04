import type { NextConfig } from "next";
import { build, dev } from "../cli";

export default function withFlowbiteReact(nextConfig: NextConfig): NextConfig {
  if (process.env.NODE_ENV === "development") {
    dev();
  }
  if (process.env.NODE_ENV === "production") {
    build();
  }

  return nextConfig;
}
