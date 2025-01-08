"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useDropdownContext } from "./DropdownContext";
import { dropdownTheme } from "./theme";

export interface DropdownDividerTheme {
  divider: string;
}

export interface DropdownDividerProps extends ComponentProps<"div">, ThemingProps<DropdownDividerTheme> {}

export function DropdownDivider({
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: DropdownDividerProps) {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme } = useDropdownContext();

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [dropdownTheme.floating, provider.theme?.dropdown?.floating, rootTheme?.floating, customTheme],
    [get(provider.clearTheme, "dropdown.floating"), get(rootClearTheme, "floating"), clearTheme],
    [get(provider.applyTheme, "dropdown.floating"), get(rootApplyTheme, "floating"), applyTheme],
  );

  return <div className={twMerge(theme.divider, className)} {...props} />;
}

DropdownDivider.displayName = "DropdownDivider";
