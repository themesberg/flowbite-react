import type { PropsWithChildren } from "react";
import { getStore, type StoreProps } from "../store";
import { StoreInit } from "../store/init";

export type ThemeProviderProps = PropsWithChildren<Pick<StoreProps, "theme">>;

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const { theme: prevTheme } = getStore();

  return (
    <>
      <StoreInit theme={theme} />
      {children}
      <StoreInit theme={prevTheme} override />
    </>
  );
}
