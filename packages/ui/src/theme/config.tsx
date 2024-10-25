import { type StoreProps } from "../store";
import { StoreInit } from "../store/init";

export type ThemeConfigProps = Pick<StoreProps, "mode" | "prefix">;

export function ThemeConfig({ mode, prefix }: ThemeConfigProps) {
  return <StoreInit mode={mode} prefix={prefix} />;
}
