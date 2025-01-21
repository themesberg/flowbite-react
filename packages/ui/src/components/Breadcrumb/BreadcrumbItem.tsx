"use client";

import type { ComponentProps, FC } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { ChevronRightIcon } from "../../icons";
import { useThemeProvider } from "../../theme/provider";
import type { FlowbiteBoolean, ThemingProps } from "../../types";
import { breadcrumbTheme } from "./theme";

export interface BreadcrumbItemTheme {
  base: string;
  chevron: string;
  href: FlowbiteBoolean;
  icon: string;
}

export interface BreadcrumbItemProps extends Omit<ComponentProps<"li">, "ref">, ThemingProps<BreadcrumbItemTheme> {
  href?: string;
  icon?: FC<ComponentProps<"svg">>;
}

export const BreadcrumbItem = forwardRef<HTMLAnchorElement | HTMLSpanElement, BreadcrumbItemProps>(
  ({ children, className, href, icon: Icon, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const isLink = typeof href !== "undefined";
    const Component = isLink ? "a" : "span";

    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [breadcrumbTheme.item, provider.theme?.breadcrumb?.item, customTheme],
      [get(provider.clearTheme, "breadcrumb.item"), clearTheme],
      [get(provider.applyTheme, "breadcrumb.item"), applyTheme],
    );

    return (
      <li className={twMerge(theme.base, className)} {...props}>
        <ChevronRightIcon aria-hidden className={theme.chevron} data-testid="flowbite-breadcrumb-separator" />
        <Component
          ref={ref as never}
          className={theme.href[isLink ? "on" : "off"]}
          data-testid="flowbite-breadcrumb-item"
          href={href}
        >
          {Icon && <Icon aria-hidden className={theme.icon} />}
          {children}
        </Component>
      </li>
    );
  },
);

BreadcrumbItem.displayName = "BreadcrumbItem";
