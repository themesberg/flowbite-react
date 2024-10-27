"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import type { DeepPartial } from "../../types";
import { useSidebarContext } from "./SidebarContext";

export interface FlowbiteSidebarItemsTheme {
  base: string;
}

export interface SidebarItemsProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteSidebarItemsTheme>;
}

export const SidebarItems: FC<SidebarItemsProps> = ({ children, className, theme: customTheme, ...props }) => {
  const { theme: rootTheme } = useSidebarContext();

  const theme = resolveTheme([rootTheme.items, customTheme], { shouldPrefix: false });

  return (
    <div className={twMerge(theme.base, className)} data-testid="flowbite-sidebar-items" {...props}>
      {children}
    </div>
  );
};

SidebarItems.displayName = "Sidebar.Items";
