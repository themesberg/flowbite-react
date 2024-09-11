"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import type { DeepPartial } from "../../types";
import { useSidebarContext } from "./SidebarContext";
import { SidebarItemContext } from "./SidebarItemContext";

export interface FlowbiteSidebarItemGroupTheme {
  base: string;
}

export interface SidebarItemGroupProps extends ComponentProps<"ul"> {
  theme?: DeepPartial<FlowbiteSidebarItemGroupTheme>;
}

export const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useSidebarContext();

  const theme = mergeDeep(rootTheme.itemGroup, customTheme);

  return (
    <ul data-testid="flowbite-sidebar-item-group" className={twMerge(theme.base, className)} {...props}>
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
    </ul>
  );
};

SidebarItemGroup.displayName = "Sidebar.ItemGroup";
