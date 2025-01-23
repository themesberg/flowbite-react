import type { StoreProps } from "../store";
import { StoreInit } from "../store/init";

export type ThemeConfigProps = StoreProps;

export function ThemeConfig({ mode, prefix, separator, version }: ThemeConfigProps) {
  return <StoreInit mode={mode} prefix={prefix} separator={separator} version={version} />;
}

ThemeConfig.displayName = "ThemeConfig";
