import type { StoreProps } from "../store";
import { StoreInit } from "../store/init";

export type ThemeConfigV3Props = Omit<StoreProps, "version">;

export function ThemeConfigV3(props: ThemeConfigV3Props) {
  return <StoreInit {...props} version={3} />;
}

ThemeConfigV3.displayName = "ThemeConfigV3";
