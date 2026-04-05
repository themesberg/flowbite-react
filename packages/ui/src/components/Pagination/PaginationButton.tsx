"use client";

import { forwardRef, type ComponentProps, type ReactNode, type Ref } from "react";
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

interface PaginationButtonBaseProps extends ThemingProps<PaginationButtonTheme> {
  active?: boolean;
  children?: ReactNode;
  className?: string;
}

type PaginationButtonAsButton = PaginationButtonBaseProps &
  Omit<ComponentProps<"button">, keyof PaginationButtonBaseProps> & {
    href?: never;
  };

type PaginationButtonAsAnchor = PaginationButtonBaseProps &
  Omit<ComponentProps<"a">, keyof PaginationButtonBaseProps> & {
    href: string;
  };

export type PaginationButtonProps = PaginationButtonAsButton | PaginationButtonAsAnchor;

interface PaginationNavigationBaseProps extends ThemingProps<PaginationButtonTheme> {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

type PaginationNavigationAsButton = PaginationNavigationBaseProps &
  Omit<ComponentProps<"button">, keyof PaginationNavigationBaseProps> & {
    href?: never;
  };

type PaginationNavigationAsAnchor = PaginationNavigationBaseProps &
  Omit<ComponentProps<"a">, keyof PaginationNavigationBaseProps> & {
    href: string;
  };

export type PaginationPrevButtonProps = PaginationNavigationAsButton | PaginationNavigationAsAnchor;

export const PaginationButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, PaginationButtonProps>(
  ({ active, children, className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [paginationTheme, provider.theme?.pagination, customTheme],
      [get(provider.clearTheme, "pagination"), clearTheme],
      [get(provider.applyTheme, "pagination"), applyTheme],
    );

    const mergedClassName = twMerge(active && theme.pages.selector.active, className);

    if ("href" in props && props.href) {
      const { href, ...anchorProps } = props;
      return (
        <a ref={ref as Ref<HTMLAnchorElement>} href={href} className={mergedClassName} {...anchorProps}>
          {children}
        </a>
      );
    }

    const { href: _, ...buttonProps } = props as PaginationButtonAsButton;
    return (
      <button ref={ref as Ref<HTMLButtonElement>} type="button" className={mergedClassName} {...buttonProps}>
        {children}
      </button>
    );
  },
);

PaginationButton.displayName = "PaginationButton";

export const PaginationNavigation = forwardRef<HTMLButtonElement | HTMLAnchorElement, PaginationPrevButtonProps>(
  ({ children, className, disabled = false, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [paginationTheme, provider.theme?.pagination, customTheme],
      [get(provider.clearTheme, "pagination"), clearTheme],
      [get(provider.applyTheme, "pagination"), applyTheme],
    );

    const mergedClassName = twMerge(disabled && theme.pages.selector.disabled, className);

    if ("href" in props && props.href && !disabled) {
      const { href, ...anchorProps } = props;
      return (
        <a ref={ref as Ref<HTMLAnchorElement>} href={href} className={mergedClassName} {...anchorProps}>
          {children}
        </a>
      );
    }

    const { href: _, ...buttonProps } = props as PaginationNavigationAsButton;
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type="button"
        className={mergedClassName}
        disabled={disabled}
        {...buttonProps}
      >
        {children}
      </button>
    );
  },
);

PaginationNavigation.displayName = "PaginationNavigation";
