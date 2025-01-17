"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useSidebarContext } from "./SidebarContext";
import { sidebarTheme } from "./theme";

export interface SidebarItemsTheme {
  base: string;
}

export interface SidebarItemsProps extends ComponentProps<"div">, ThemingProps<SidebarItemsTheme> {}

export const SidebarItems = forwardRef<HTMLDivElement, SidebarItemsProps>(
  ({ children, className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme } = useSidebarContext();

    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [sidebarTheme.items, provider.theme?.sidebar?.items, rootTheme?.items, customTheme],
      [get(provider.clearTheme, "sidebar.items"), get(rootClearTheme, "items"), clearTheme],
      [get(provider.applyTheme, "sidebar.items"), get(rootApplyTheme, "items"), applyTheme],
    );

    return (
      <div ref={ref} className={twMerge(theme.base, className)} data-testid="flowbite-sidebar-items" {...props}>
        {children}
      </div>
    );
  },
);

SidebarItems.displayName = "SidebarItems";
