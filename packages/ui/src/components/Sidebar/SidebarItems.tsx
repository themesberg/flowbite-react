"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { useSidebarContext } from "./SidebarContext";
import { sidebarTheme } from "./theme";

export interface SidebarItemsTheme {
  base: string;
}

export interface SidebarItemsProps extends ComponentProps<"div"> {
  theme?: DeepPartial<SidebarItemsTheme>;
  resetTheme?: ResetTheme<SidebarItemsTheme>;
}

export const SidebarItems: FC<SidebarItemsProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme } = useSidebarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [sidebarTheme.items, provider.theme?.sidebar?.items, rootTheme?.items, customTheme],
    [get(rootResetTheme, "items"), resetTheme],
  );

  return (
    <div className={twMerge(theme.base, className)} data-testid="flowbite-sidebar-items" {...props}>
      {children}
    </div>
  );
};

SidebarItems.displayName = "Sidebar.Items";
