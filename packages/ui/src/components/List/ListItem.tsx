"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { listTheme } from "./theme";

export interface ListItemTheme {
  icon: string;
  withIcon: {
    on: string;
    off: string;
  };
}

export interface ListItemProps extends ComponentProps<"li"> {
  className?: string;
  icon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<ListItemTheme>;
  resetTheme?: ResetTheme<ListItemTheme>;
}

export const ListItem: FC<ListItemProps> = ({
  children,
  className,
  icon: Icon,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([listTheme.item, provider.theme?.list?.item, customTheme], [resetTheme]);

  return (
    <li className={twMerge(theme.withIcon[Icon ? "on" : "off"], className)} {...props}>
      {Icon && <Icon className={twMerge(theme.icon)} />}
      {children}
    </li>
  );
};
