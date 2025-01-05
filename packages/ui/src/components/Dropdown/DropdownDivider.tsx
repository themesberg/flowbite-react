"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useDropdownContext } from "./DropdownContext";
import { dropdownTheme } from "./theme";

export interface DropdownDividerTheme {
  divider: string;
}

export interface DropdownDividerProps extends ComponentProps<"div">, ThemingProps<DropdownDividerTheme> {}

export const DropdownDivider: FC<DropdownDividerProps> = ({
  className,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, applyTheme: rootApplyTheme } = useDropdownContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [dropdownTheme.floating, provider.theme?.dropdown?.floating, rootTheme?.floating, customTheme],
    [get(provider.resetTheme, "dropdown.floating"), get(rootResetTheme, "floating"), resetTheme],
    [get(provider.applyTheme, "dropdown.floating"), get(rootApplyTheme, "floating"), applyTheme],
  );

  return <div className={twMerge(theme.divider, className)} {...props} />;
};

DropdownDivider.displayName = "DropdownDivider";
