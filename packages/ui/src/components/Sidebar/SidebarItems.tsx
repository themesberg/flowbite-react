"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useSidebarContext } from "./SidebarContext";
import { sidebarTheme } from "./theme";

export interface SidebarItemsTheme {
  base: string;
}

export interface SidebarItemsProps extends ComponentProps<"div">, ThemingProps<SidebarItemsTheme> {}

export function SidebarItems({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: SidebarItemsProps) {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme } = useSidebarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [sidebarTheme.items, provider.theme?.sidebar?.items, rootTheme?.items, customTheme],
    [get(provider.clearTheme, "sidebar.items"), get(rootClearTheme, "items"), clearTheme],
    [get(provider.applyTheme, "sidebar.items"), get(rootApplyTheme, "items"), applyTheme],
  );

  return (
    <div className={twMerge(theme.base, className)} data-testid="flowbite-sidebar-items" {...props}>
      {children}
    </div>
  );
}

SidebarItems.displayName = "SidebarItems";
