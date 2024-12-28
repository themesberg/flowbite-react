"use client";

import type { ComponentProps, FC, ReactEventHandler, ReactNode } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
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
  onClick?: ReactEventHandler<HTMLButtonElement>;
}

export interface PaginationPrevButtonProps extends Omit<PaginationButtonProps, "active"> {
  disabled?: boolean;
}

export const PaginationButton: FC<PaginationButtonProps> = ({
  active,
  children,
  className,
  onClick,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [paginationTheme, provider.theme?.pagination, customTheme],
    [get(provider.resetTheme, "pagination"), resetTheme],
    [get(provider.applyTheme, "pagination"), applyTheme],
  );

  return (
    <button
      type="button"
      className={twMerge(active && theme.pages.selector.active, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

PaginationButton.displayName = "Pagination.Button";

export const PaginationNavigation: FC<PaginationPrevButtonProps> = ({
  children,
  className,
  onClick,
  disabled = false,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [paginationTheme, provider.theme?.pagination, customTheme],
    [get(provider.resetTheme, "pagination"), resetTheme],
    [get(provider.applyTheme, "pagination"), applyTheme],
  );

  return (
    <button
      type="button"
      className={twMerge(disabled && theme.pages.selector.disabled, className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

PaginationNavigation.displayName = "Pagination.Navigation";
