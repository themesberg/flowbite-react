"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useDrawerContext } from "./DrawerContext";
import { drawerTheme } from "./theme";

export interface DrawerItemsTheme {
  base: string;
}

export interface DrawerItemsProps extends ComponentProps<"div">, ThemingProps<DrawerItemsTheme> {}

export const DrawerItems: FC<DrawerItemsProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme } = useDrawerContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [drawerTheme.items, provider.theme?.drawer?.items, rootTheme?.items, customTheme],
    [get(rootResetTheme, "items"), resetTheme],
  );

  return (
    <div data-testid="flowbite-drawer-items" className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};

DrawerItems.displayName = "Drawer.Items";
