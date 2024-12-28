"use client";

import type { ComponentProps, FC } from "react";
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

export const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, applyTheme: rootApplyTheme } = useSidebarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [sidebarTheme.itemGroup, provider.theme?.sidebar?.itemGroup, rootTheme?.itemGroup, customTheme],
    [get(provider.resetTheme, "sidebar.itemGroup"), get(rootResetTheme, "itemGroup"), resetTheme],
    [get(provider.applyTheme, "sidebar.itemGroup"), get(rootApplyTheme, "itemGroup"), applyTheme],
  );

  return (
    <ul data-testid="flowbite-sidebar-item-group" className={twMerge(theme.base, className)} {...props}>
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
    </ul>
  );
};

SidebarItemGroup.displayName = "Sidebar.ItemGroup";
