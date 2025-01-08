"use client";

import type { ComponentProps, ElementType } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { type SidebarCollapseTheme } from "./SidebarCollapse";
import { SidebarContext } from "./SidebarContext";
import { type SidebarCTATheme } from "./SidebarCTA";
import { type SidebarItemTheme } from "./SidebarItem";
import { type SidebarItemGroupTheme } from "./SidebarItemGroup";
import { type SidebarItemsTheme } from "./SidebarItems";
import { type SidebarLogoTheme } from "./SidebarLogo";
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

export function Sidebar({
  children,
  as: Component = "nav",
  collapseBehavior = "collapse",
  collapsed: isCollapsed = false,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: SidebarProps) {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [sidebarTheme, provider.theme?.sidebar, customTheme],
    [get(provider.clearTheme, "sidebar"), clearTheme],
    [get(provider.applyTheme, "sidebar"), applyTheme],
  );

  return (
    <SidebarContext.Provider value={{ theme: customTheme, clearTheme, applyTheme, isCollapsed }}>
      <Component
        aria-label="Sidebar"
        hidden={isCollapsed && collapseBehavior === "hide"}
        className={twMerge(theme.root.base, theme.root.collapsed[isCollapsed ? "on" : "off"], className)}
        {...props}
      >
        <div className={theme.root.inner}>{children}</div>
      </Component>
    </SidebarContext.Provider>
  );
}

Sidebar.displayName = "Sidebar";
