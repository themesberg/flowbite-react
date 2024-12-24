"use client";

import type { ComponentProps, ElementType, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { SidebarCollapse, type SidebarCollapseTheme } from "./SidebarCollapse";
import { SidebarContext } from "./SidebarContext";
import { SidebarCTA, type SidebarCTATheme } from "./SidebarCTA";
import { SidebarItem, type SidebarItemTheme } from "./SidebarItem";
import { SidebarItemGroup, type SidebarItemGroupTheme } from "./SidebarItemGroup";
import { SidebarItems, type SidebarItemsTheme } from "./SidebarItems";
import { SidebarLogo, type SidebarLogoTheme } from "./SidebarLogo";
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

export interface SidebarProps extends ComponentProps<"div"> {
  as?: ElementType;
  collapseBehavior?: "collapse" | "hide";
  collapsed?: boolean;
  theme?: DeepPartial<SidebarTheme>;
  resetTheme?: ResetTheme<SidebarTheme>;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  as: Component = "nav",
  collapseBehavior = "collapse",
  collapsed: isCollapsed = false,
  theme: customTheme,
  resetTheme,
  className,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([sidebarTheme, provider.theme?.sidebar, customTheme], [resetTheme]);

  return (
    <SidebarContext.Provider value={{ theme: customTheme, resetTheme, isCollapsed }}>
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
};

SidebarComponent.displayName = "Sidebar";

export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
});
