"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { BreadcrumbItemTheme } from "./BreadcrumbItem";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { breadcrumbTheme } from "./theme";

export interface BreadcrumbTheme {
  root: BreadcrumbRootTheme;
  item: BreadcrumbItemTheme;
}

export interface BreadcrumbRootTheme {
  base: string;
  list: string;
}

export interface BreadcrumbComponentProps extends ComponentProps<"nav">, ThemingProps<BreadcrumbRootTheme> {}

const BreadcrumbComponent: FC<BreadcrumbComponentProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([breadcrumbTheme.root, provider.theme?.breadcrumb?.root, customTheme], [resetTheme]);

  return (
    <nav aria-label="Breadcrumb" className={twMerge(theme.base, className)} {...props}>
      <ol className={theme.list}>{children}</ol>
    </nav>
  );
};

BreadcrumbComponent.displayName = "Breadcrumb";

export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem,
});
