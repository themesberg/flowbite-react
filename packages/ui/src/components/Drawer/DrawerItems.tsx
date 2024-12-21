"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { useDrawerContext } from "./DrawerContext";
import { drawerTheme } from "./theme";

export interface FlowbiteDrawerItemsTheme {
  base: string;
}

export interface DrawerItemsProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteDrawerItemsTheme>;
  unstyled?: Unstyled<FlowbiteDrawerItemsTheme>;
}

export const DrawerItems: FC<DrawerItemsProps> = ({ children, className, theme: customTheme, unstyled, ...props }) => {
  const { theme: rootTheme, unstyled: rootUnstyled } = useDrawerContext();

  const theme = resolveTheme(
    [drawerTheme.items, getStore().theme?.drawer?.items, rootTheme?.items, customTheme],
    [get(rootUnstyled, "items"), unstyled],
  );

  return (
    <div data-testid="flowbite-drawer-items" className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};

DrawerItems.displayName = "Drawer.Items";
