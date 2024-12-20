"use client";

import type { ComponentProps, ElementType, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { SidebarCollapse, type FlowbiteSidebarCollapseTheme } from "./SidebarCollapse";
import { SidebarContext } from "./SidebarContext";
import { SidebarCTA, type FlowbiteSidebarCTATheme } from "./SidebarCTA";
import { SidebarItem, type FlowbiteSidebarItemTheme } from "./SidebarItem";
import { SidebarItemGroup, type FlowbiteSidebarItemGroupTheme } from "./SidebarItemGroup";
import { SidebarItems, type FlowbiteSidebarItemsTheme } from "./SidebarItems";
import { SidebarLogo, type FlowbiteSidebarLogoTheme } from "./SidebarLogo";
import { sidebarTheme } from "./theme";

export interface FlowbiteSidebarTheme {
  root: {
    base: string;
    collapsed: FlowbiteBoolean;
    inner: string;
  };
  collapse: FlowbiteSidebarCollapseTheme;
  cta: FlowbiteSidebarCTATheme;
  item: FlowbiteSidebarItemTheme;
  items: FlowbiteSidebarItemsTheme;
  itemGroup: FlowbiteSidebarItemGroupTheme;
  logo: FlowbiteSidebarLogoTheme;
}

export interface SidebarProps extends ComponentProps<"div"> {
  as?: ElementType;
  collapseBehavior?: "collapse" | "hide";
  collapsed?: boolean;
  theme?: DeepPartial<FlowbiteSidebarTheme>;
  unstyled?: Unstyled<FlowbiteSidebarTheme>;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  as: Component = "nav",
  collapseBehavior = "collapse",
  collapsed: isCollapsed = false,
  theme: customTheme,
  unstyled,
  className,
  ...props
}) => {
  const theme = resolveTheme([sidebarTheme, getStore().theme?.sidebar, customTheme], [unstyled]);

  return (
    <SidebarContext.Provider value={{ theme: customTheme, isCollapsed }}>
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
