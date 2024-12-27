"use client";

import { deepmerge } from "deepmerge-ts";
import { createContext, useContext, useMemo, type PropsWithChildren } from "react";
import type { FlowbiteTheme } from "../components/Flowbite/FlowbiteTheme";
import { deepMergeStrings } from "../helpers/deep-merge";
import { twMerge } from "../helpers/tailwind-merge";
import type { ThemingProps } from "../types";

export interface ThemeProviderValue extends ThemingProps<FlowbiteTheme> {
  /**
   * Prevent merging with parent context value.
   *
   * @type {boolean}
   * @default false
   */
  root?: boolean;
}

export type ThemeProviderProps = PropsWithChildren<ThemeProviderValue>;

const ThemeProviderContext = createContext<ThemeProviderValue | undefined>(undefined);

export function ThemeProvider({ children, theme, resetTheme, applyTheme, root }: ThemeProviderProps) {
  const parentProvider = useContext(ThemeProviderContext);
  const value = useMemo(
    () => ({
      theme: !root && parentProvider?.theme ? deepMergeStrings(twMerge)(parentProvider.theme, theme) : theme,
      resetTheme: !root && parentProvider?.resetTheme ? deepmerge(parentProvider.resetTheme, resetTheme) : resetTheme,
      applyTheme: !root && parentProvider?.applyTheme ? deepmerge(parentProvider?.applyTheme, applyTheme) : applyTheme,
    }),
    [
      theme,
      resetTheme,
      applyTheme,
      root,
      parentProvider?.theme,
      parentProvider?.resetTheme,
      parentProvider?.applyTheme,
    ],
  );

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

ThemeProvider.displayName = "ThemeProvider";

export function useThemeProvider() {
  return useContext(ThemeProviderContext) ?? {};
}
