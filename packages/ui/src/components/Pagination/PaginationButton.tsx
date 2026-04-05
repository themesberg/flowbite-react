"use client";

import { forwardRef, type ComponentProps, type ReactEventHandler, type ReactNode, type Ref } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { paginationTheme } from "./theme";

export interface PaginationButtonTheme {
  base: string;
  active: string;
  disabled: string;
}

export interface PaginationButtonProps extends ComponentProps<"button">, ThemingProps<PaginationButtonTheme> {
  active?: boolean;
  children?: ReactNode;
  className?: string;
  href?: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
}

export interface PaginationPrevButtonProps extends Omit<PaginationButtonProps, "active"> {
  disabled?: boolean;
  href?: string;
}

export const PaginationButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, PaginationButtonProps>(
  ({ active, children, className, href, onClick, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [paginationTheme, provider.theme?.pagination, customTheme],
      [get(provider.clearTheme, "pagination"), clearTheme],
      [get(provider.applyTheme, "pagination"), applyTheme],
    );

    const mergedClassName = twMerge(active && theme.pages.selector.active, className);

    if (href) {
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={mergedClassName}
          onClick={onClick as unknown as ReactEventHandler<HTMLAnchorElement>}
          {...(props as ComponentProps<"a">)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type="button"
        className={mergedClassName}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  },
);

PaginationButton.displayName = "PaginationButton";

export function PaginationNavigation({
  children,
  className,
  href,
  onClick,
  disabled = false,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: PaginationPrevButtonProps) {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [paginationTheme, provider.theme?.pagination, customTheme],
    [get(provider.clearTheme, "pagination"), clearTheme],
    [get(provider.applyTheme, "pagination"), applyTheme],
  );

  const mergedClassName = twMerge(disabled && theme.pages.selector.disabled, className);

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={mergedClassName}
        onClick={onClick as unknown as ReactEventHandler<HTMLAnchorElement>}
        aria-disabled={disabled}
        {...(props as ComponentProps<"a">)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={mergedClassName} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

PaginationNavigation.displayName = "PaginationNavigation";
