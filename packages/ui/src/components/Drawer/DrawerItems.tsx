"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import type { DeepPartial } from "../../types";
import { useDrawerContext } from "./DrawerContext";

export interface FlowbiteDrawerItemsTheme {
  base: string;
}

export interface DrawerItemsProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteDrawerItemsTheme>;
}

export const DrawerItems: FC<DrawerItemsProps> = ({ children, className, theme: customTheme, ...props }) => {
  const { theme: rootTheme } = useDrawerContext();

  const theme = resolveTheme([rootTheme.items, customTheme], { shouldPrefix: false });

  return (
    <div data-testid="flowbite-drawer-items" className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};

DrawerItems.displayName = "Drawer.Items";
