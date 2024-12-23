"use client";

import { createContext, useContext, type PropsWithChildren } from "react";
import type { FlowbiteTheme } from "../components/Flowbite/FlowbiteTheme";
import type { DeepPartial, Unstyled } from "../types";

export interface ThemeProviderValue {
  theme?: DeepPartial<FlowbiteTheme>;
  unstyled?: Unstyled<FlowbiteTheme>;
}

export type ThemeProviderProps = PropsWithChildren<ThemeProviderValue>;

const ThemeProviderContext = createContext<ThemeProviderValue | undefined>(undefined);

export function ThemeProvider({ children, theme, unstyled }: ThemeProviderProps) {
  // TODO: deepMergeStrings(twMerge)(currentTheme, theme)
  // const parentValue = useContext(ThemeContext)

  return <ThemeProviderContext.Provider value={{ theme, unstyled }}>{children}</ThemeProviderContext.Provider>;
}

ThemeProvider.displayName = "ThemeProvider";

export function useThemeProvider() {
  return useContext(ThemeProviderContext) ?? {};
}
