"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { hrTheme } from "./theme";

export interface HRSquareTheme {
  base: string;
}

export interface HRSquareProps extends Omit<ComponentProps<"hr">, "ref">, ThemingProps<HRSquareTheme> {}

export const HRSquare = forwardRef<HTMLHRElement, HRSquareProps>(
  ({ theme: customTheme, resetTheme, applyTheme, className, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme(
      [hrTheme.square, provider.theme?.hr?.square, customTheme],
      [get(provider.resetTheme, "hr.square"), resetTheme],
      [get(provider.applyTheme, "hr.square"), applyTheme],
    );

    return (
      <hr
        className={twMerge(theme.base, className)}
        role="separator"
        data-testid="flowbite-hr-square"
        ref={ref}
        {...props}
      />
    );
  },
);
