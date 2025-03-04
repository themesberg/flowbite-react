import type { NextConfig } from "next";
import { build, dev } from "../cli";

export default async function withFlowbiteReact(nextConfig: NextConfig): Promise<NextConfig> {
  if (process.env.NODE_ENV === "development") {
    await dev();
  }
  if (process.env.NODE_ENV === "production") {
    await build();
  }

  return nextConfig;
}
