"use client";

import { deepmerge } from "deepmerge-ts";
import { createContext, useContext, useMemo, type PropsWithChildren } from "react";
import { deepMergeStrings } from "../helpers/deep-merge";
import { twMerge } from "../helpers/tailwind-merge";
import type { FlowbiteTheme, ThemingProps } from "../types";

export type ThemeProviderValue = ThemingProps<FlowbiteTheme>;

export interface ThemeProviderProps extends ThemeProviderValue, PropsWithChildren {
  /**
   * Prevent merging with parent context value.
   *
   * @type {boolean}
   * @default false
   */
  root?: boolean;
}

const ThemeProviderContext = createContext<ThemeProviderValue | undefined>(undefined);

export function ThemeProvider({ children, theme, clearTheme, applyTheme, root }: ThemeProviderProps) {
  const parentProvider = useContext(ThemeProviderContext);
  const value = useMemo(
    () => ({
      theme: !root && parentProvider?.theme ? deepMergeStrings(twMerge)(parentProvider.theme, theme) : theme,
      clearTheme: !root && parentProvider?.clearTheme ? deepmerge(parentProvider.clearTheme, clearTheme) : clearTheme,
      applyTheme: !root && parentProvider?.applyTheme ? deepmerge(parentProvider?.applyTheme, applyTheme) : applyTheme,
    }),
    [
      theme,
      clearTheme,
      applyTheme,
      root,
      parentProvider?.theme,
      parentProvider?.clearTheme,
      parentProvider?.applyTheme,
    ],
  );

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

ThemeProvider.displayName = "ThemeProvider";

export function useThemeProvider() {
  return useContext(ThemeProviderContext) ?? {};
}
