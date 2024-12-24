"use client";

import { deepmerge } from "deepmerge-ts";
import { createContext, useContext, useMemo, type PropsWithChildren } from "react";
import type { FlowbiteTheme } from "../components/Flowbite/FlowbiteTheme";
import { deepMergeStrings } from "../helpers/deep-merge";
import { twMerge } from "../helpers/tailwind-merge";
import type { DeepPartial, Unstyled } from "../types";

export interface ThemeProviderValue {
  theme?: DeepPartial<FlowbiteTheme>;
  unstyled?: Unstyled<FlowbiteTheme>;
}

export type ThemeProviderProps = PropsWithChildren<ThemeProviderValue>;

const ThemeProviderContext = createContext<ThemeProviderValue | undefined>(undefined);

export function ThemeProvider({ children, theme, unstyled }: ThemeProviderProps) {
  const parentProvider = useContext(ThemeProviderContext);
  const value = useMemo(
    () => ({
      theme: parentProvider?.theme ? deepMergeStrings(twMerge)(parentProvider.theme, theme) : theme,
      unstyled: parentProvider?.unstyled ? deepmerge(parentProvider.unstyled) : unstyled,
    }),
    [theme, unstyled, parentProvider?.theme, parentProvider?.unstyled],
  );

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

ThemeProvider.displayName = "ThemeProvider";

export function useThemeProvider() {
  return useContext(ThemeProviderContext) ?? {};
}
