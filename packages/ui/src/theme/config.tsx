import type { StoreProps } from "../store";
import { StoreInit } from "../store/init";

export type ThemeConfigProps = Omit<StoreProps, "separator" | "version">;

export function ThemeConfig(props: ThemeConfigProps) {
  return <StoreInit {...props} version={4} />;
}

ThemeConfig.displayName = "ThemeConfig";
