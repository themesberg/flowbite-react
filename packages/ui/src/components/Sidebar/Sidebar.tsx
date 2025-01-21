"use client";

import { forwardRef, type ComponentProps, type ElementType } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { FlowbiteBoolean, ThemingProps } from "../../types";
import type { SidebarCollapseTheme } from "./SidebarCollapse";
import { SidebarContext } from "./SidebarContext";
import type { SidebarCTATheme } from "./SidebarCTA";
import type { SidebarItemTheme } from "./SidebarItem";
import type { SidebarItemGroupTheme } from "./SidebarItemGroup";
import type { SidebarItemsTheme } from "./SidebarItems";
import type { SidebarLogoTheme } from "./SidebarLogo";
import { sidebarTheme } from "./theme";

export interface SidebarTheme {
  root: {
    base: string;
    collapsed: FlowbiteBoolean;
    inner: string;
  };
  collapse: SidebarCollapseTheme;
  cta: SidebarCTATheme;
  item: SidebarItemTheme;
  items: SidebarItemsTheme;
  itemGroup: SidebarItemGroupTheme;
  logo: SidebarLogoTheme;
}

export interface SidebarProps extends ComponentProps<"div">, ThemingProps<SidebarTheme> {
  as?: ElementType;
  collapseBehavior?: "collapse" | "hide";
  collapsed?: boolean;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      children,
      as: Component = "nav",
      collapseBehavior = "collapse",
      collapsed: isCollapsed = false,
      className,
      theme: customTheme,
      clearTheme,
      applyTheme,
      ...props
    },
    ref,
  ) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [sidebarTheme, provider.theme?.sidebar, customTheme],
      [get(provider.clearTheme, "sidebar"), clearTheme],
      [get(provider.applyTheme, "sidebar"), applyTheme],
    );

    return (
      <SidebarContext.Provider value={{ theme: customTheme, clearTheme, applyTheme, isCollapsed }}>
        <Component
          ref={ref}
          aria-label="Sidebar"
          hidden={isCollapsed && collapseBehavior === "hide"}
          className={twMerge(theme.root.base, theme.root.collapsed[isCollapsed ? "on" : "off"], className)}
          {...props}
        >
          <div className={theme.root.inner}>{children}</div>
        </Component>
      </SidebarContext.Provider>
    );
  },
);

Sidebar.displayName = "Sidebar";
