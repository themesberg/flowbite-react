"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { useSidebarContext } from "./SidebarContext";
import { SidebarItemContext } from "./SidebarItemContext";
import { sidebarTheme } from "./theme";

export interface FlowbiteSidebarItemGroupTheme {
  base: string;
}

export interface SidebarItemGroupProps extends ComponentProps<"ul"> {
  theme?: DeepPartial<FlowbiteSidebarItemGroupTheme>;
  unstyled?: Unstyled<FlowbiteSidebarItemGroupTheme>;
}

export const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme } = useSidebarContext();

  const theme = resolveTheme(
    [sidebarTheme.itemGroup, getStore().theme?.sidebar?.itemGroup, rootTheme?.itemGroup, customTheme],
    [unstyled],
  );

  return (
    <ul data-testid="flowbite-sidebar-item-group" className={twMerge(theme.base, className)} {...props}>
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
    </ul>
  );
};

SidebarItemGroup.displayName = "Sidebar.ItemGroup";
