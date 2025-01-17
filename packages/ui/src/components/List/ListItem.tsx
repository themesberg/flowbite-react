"use client";

import { forwardRef, type ComponentProps, type FC } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { listTheme } from "./theme";

export interface ListItemTheme {
  icon: string;
  withIcon: {
    on: string;
    off: string;
  };
}

export interface ListItemProps extends ComponentProps<"li">, ThemingProps<ListItemTheme> {
  className?: string;
  icon?: FC<ComponentProps<"svg">>;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, className, icon: Icon, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [listTheme.item, provider.theme?.list?.item, customTheme],
      [get(provider.clearTheme, "list.item"), clearTheme],
      [get(provider.applyTheme, "list.item"), applyTheme],
    );

    return (
      <li ref={ref} className={twMerge(theme.withIcon[Icon ? "on" : "off"], className)} {...props}>
        {Icon && <Icon className={twMerge(theme.icon)} />}
        {children}
      </li>
    );
  },
);

ListItem.displayName = "ListItem";
