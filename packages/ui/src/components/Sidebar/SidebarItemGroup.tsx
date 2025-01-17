"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
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

export const SidebarItemGroup = forwardRef<HTMLUListElement, SidebarItemGroupProps>(
  ({ children, className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme } = useSidebarContext();

    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [sidebarTheme.itemGroup, provider.theme?.sidebar?.itemGroup, rootTheme?.itemGroup, customTheme],
      [get(provider.clearTheme, "sidebar.itemGroup"), get(rootClearTheme, "itemGroup"), clearTheme],
      [get(provider.applyTheme, "sidebar.itemGroup"), get(rootApplyTheme, "itemGroup"), applyTheme],
    );

    return (
      <ul ref={ref} data-testid="flowbite-sidebar-item-group" className={twMerge(theme.base, className)} {...props}>
        <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
      </ul>
    );
  },
);

SidebarItemGroup.displayName = "SidebarItemGroup";
