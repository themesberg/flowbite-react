import type { StoreProps } from "../store";
import { StoreInit } from "../store/init";

export type ThemeConfigProps = Pick<StoreProps, "mode">;

export function ThemeConfig({ mode }: ThemeConfigProps) {
  return <StoreInit {...{ mode }} />;
}

ThemeConfig.displayName = "ThemeConfig";
