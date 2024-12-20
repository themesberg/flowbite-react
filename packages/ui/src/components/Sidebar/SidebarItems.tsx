"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { useSidebarContext } from "./SidebarContext";
import { sidebarTheme } from "./theme";

export interface FlowbiteSidebarItemsTheme {
  base: string;
}

export interface SidebarItemsProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteSidebarItemsTheme>;
  unstyled?: Unstyled<FlowbiteSidebarItemsTheme>;
}

export const SidebarItems: FC<SidebarItemsProps> = ({
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme } = useSidebarContext();

  const theme = resolveTheme(
    [sidebarTheme.items, getStore().theme?.sidebar?.items, rootTheme?.items, customTheme],
    [unstyled],
  );

  return (
    <div className={twMerge(theme.base, className)} data-testid="flowbite-sidebar-items" {...props}>
      {children}
    </div>
  );
};

SidebarItems.displayName = "Sidebar.Items";
