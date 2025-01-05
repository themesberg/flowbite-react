"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { HRIconTheme } from "./HRIcon";
import type { HRSquareTheme } from "./HRSquare";
import type { HRTextTheme } from "./HRText";
import type { HRTrimmedTheme } from "./HRTrimmed";
import { hrTheme } from "./theme";

export interface HRTheme {
  root: {
    base: string;
  };
  trimmed: HRTrimmedTheme;
  icon: HRIconTheme;
  text: HRTextTheme;
  square: HRSquareTheme;
}

export interface HRProps extends Omit<ComponentProps<"hr">, "ref">, ThemingProps<HRTheme> {}

export const HR = forwardRef<HTMLHRElement, HRProps>(
  ({ theme: customTheme, clearTheme, applyTheme, className, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme(
      [hrTheme.root, provider.theme?.hr?.root, customTheme],
      [get(provider.clearTheme, "hr.root"), clearTheme],
      [get(provider.applyTheme, "hr.root"), applyTheme],
    );

    return (
      <hr className={twMerge(theme.base, className)} role="separator" data-testid="flowbite-hr" ref={ref} {...props} />
    );
  },
);

HR.displayName = "HR";
