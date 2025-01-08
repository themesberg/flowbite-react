"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { BreadcrumbItemTheme } from "./BreadcrumbItem";
import { breadcrumbTheme } from "./theme";

export interface BreadcrumbTheme {
  root: BreadcrumbRootTheme;
  item: BreadcrumbItemTheme;
}

export interface BreadcrumbRootTheme {
  base: string;
  list: string;
}

export interface BreadcrumbProps extends ComponentProps<"nav">, ThemingProps<BreadcrumbRootTheme> {}

export function Breadcrumb({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: BreadcrumbProps) {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [breadcrumbTheme.root, provider.theme?.breadcrumb?.root, customTheme],
    [get(provider.clearTheme, "breadcrumb.root"), clearTheme],
    [get(provider.applyTheme, "breadcrumb.root"), applyTheme],
  );

  return (
    <nav aria-label="Breadcrumb" className={twMerge(theme.base, className)} {...props}>
      <ol className={theme.list}>{children}</ol>
    </nav>
  );
}

Breadcrumb.displayName = "Breadcrumb";
