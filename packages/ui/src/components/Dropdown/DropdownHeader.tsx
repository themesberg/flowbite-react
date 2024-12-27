"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useDropdownContext } from "./DropdownContext";
import { DropdownDivider } from "./DropdownDivider";
import { dropdownTheme } from "./theme";

export interface DropdownHeaderTheme {
  header: string;
}

export interface DropdownHeaderProps extends ComponentProps<"div">, ThemingProps<DropdownHeaderTheme> {}

export const DropdownHeader: FC<DropdownHeaderProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme } = useDropdownContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [dropdownTheme.floating, provider.theme?.dropdown?.floating, rootTheme?.floating, customTheme],
    [get(rootResetTheme, "floating"), resetTheme],
  );

  return (
    <>
      <div className={twMerge(theme.header, className)} {...props}>
        {children}
      </div>
      <DropdownDivider />
    </>
  );
};
