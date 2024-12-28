"use client";

import type { ComponentProps, FC } from "react";
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

export const SidebarItems: FC<SidebarItemsProps> = ({
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
    [sidebarTheme.items, provider.theme?.sidebar?.items, rootTheme?.items, customTheme],
    [get(provider.resetTheme, "sidebar.items"), get(rootResetTheme, "items"), resetTheme],
    [get(provider.applyTheme, "sidebar.items"), get(rootApplyTheme, "items"), applyTheme],
  );

  return (
    <div className={twMerge(theme.base, className)} data-testid="flowbite-sidebar-items" {...props}>
      {children}
    </div>
  );
};

SidebarItems.displayName = "Sidebar.Items";
