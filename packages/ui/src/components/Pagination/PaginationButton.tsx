"use client";

import type { ComponentProps, FC, ReactEventHandler, ReactNode } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { paginationTheme } from "./theme";

export interface FlowbitePaginationButtonTheme {
  base: string;
  active: string;
  disabled: string;
}

export interface PaginationButtonProps extends ComponentProps<"button"> {
  active?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  theme?: DeepPartial<FlowbitePaginationButtonTheme>;
  resetTheme?: ResetTheme<FlowbitePaginationButtonTheme>;
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
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([paginationTheme, provider.theme?.pagination, customTheme], [resetTheme]);

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
  theme: customTheme,
  resetTheme,
  disabled = false,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([paginationTheme, provider.theme?.pagination, customTheme], [resetTheme]);

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
