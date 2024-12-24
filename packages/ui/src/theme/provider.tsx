"use client";

import { deepmerge } from "deepmerge-ts";
import { createContext, useContext, useMemo, type PropsWithChildren } from "react";
import type { FlowbiteTheme } from "../components/Flowbite/FlowbiteTheme";
import { deepMergeStrings } from "../helpers/deep-merge";
import { twMerge } from "../helpers/tailwind-merge";
import type { DeepPartial, ResetTheme } from "../types";

export interface ThemeProviderValue {
  theme?: DeepPartial<FlowbiteTheme>;
  resetTheme?: ResetTheme<FlowbiteTheme>;
}

export type ThemeProviderProps = PropsWithChildren<ThemeProviderValue>;

const ThemeProviderContext = createContext<ThemeProviderValue | undefined>(undefined);

export function ThemeProvider({ children, theme, resetTheme }: ThemeProviderProps) {
  const parentProvider = useContext(ThemeProviderContext);
  const value = useMemo(
    () => ({
      theme: parentProvider?.theme ? deepMergeStrings(twMerge)(parentProvider.theme, theme) : theme,
      resetTheme: parentProvider?.resetTheme ? deepmerge(parentProvider.resetTheme) : resetTheme,
    }),
    [theme, resetTheme, parentProvider?.theme, parentProvider?.resetTheme],
  );

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

ThemeProvider.displayName = "ThemeProvider";

export function useThemeProvider() {
  return useContext(ThemeProviderContext) ?? {};
}
