"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useDrawerContext } from "./DrawerContext";
import { drawerTheme } from "./theme";

export interface DrawerItemsTheme {
  base: string;
}

export interface DrawerItemsProps extends ComponentProps<"div">, ThemingProps<DrawerItemsTheme> {}

export function DrawerItems({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: DrawerItemsProps) {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme } = useDrawerContext();

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [drawerTheme.items, provider.theme?.drawer?.items, rootTheme?.items, customTheme],
    [get(provider.clearTheme, "drawer.items"), get(rootClearTheme, "items"), clearTheme],
    [get(provider.applyTheme, "drawer.items"), get(rootApplyTheme, "items"), applyTheme],
  );

  return (
    <div data-testid="flowbite-drawer-items" className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
}

DrawerItems.displayName = "DrawerItems";
