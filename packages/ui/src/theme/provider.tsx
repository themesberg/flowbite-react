import type { PropsWithChildren } from "react";
import { getThemeId, type StoreProps } from "../store";
import { StoreInit } from "../store/init";

export type ThemeProviderProps = PropsWithChildren<Pick<StoreProps, "theme">>;

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const prevThemeId = getThemeId();

  return (
    <>
      <StoreInit theme={theme} themeId={+new Date()} />
      {children}
      <StoreInit themeId={prevThemeId} cleanup />
    </>
  );
}

ThemeProvider.displayName = "ThemeProvider";
