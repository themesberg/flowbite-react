"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useSidebarContext } from "./SidebarContext";
import { SidebarItemContext } from "./SidebarItemContext";
import { sidebarTheme } from "./theme";

export interface SidebarItemGroupTheme {
  base: string;
}

export interface SidebarItemGroupProps extends ComponentProps<"ul">, ThemingProps<SidebarItemGroupTheme> {}

export function SidebarItemGroup({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: SidebarItemGroupProps) {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme } = useSidebarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [sidebarTheme.itemGroup, provider.theme?.sidebar?.itemGroup, rootTheme?.itemGroup, customTheme],
    [get(provider.clearTheme, "sidebar.itemGroup"), get(rootClearTheme, "itemGroup"), clearTheme],
    [get(provider.applyTheme, "sidebar.itemGroup"), get(rootApplyTheme, "itemGroup"), applyTheme],
  );

  return (
    <ul data-testid="flowbite-sidebar-item-group" className={twMerge(theme.base, className)} {...props}>
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
    </ul>
  );
}

SidebarItemGroup.displayName = "SidebarItemGroup";
