"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { hrTheme } from "./theme";

export interface HRTrimmedTheme {
  base: string;
}

export interface HRTrimmedProps extends Omit<ComponentProps<"hr">, "ref">, ThemingProps<HRTrimmedTheme> {}

export const HRTrimmed = forwardRef<HTMLHRElement, HRTrimmedProps>(
  ({ theme: customTheme, clearTheme, applyTheme, className, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [hrTheme.trimmed, provider.theme?.hr?.trimmed, customTheme],
      [get(provider.clearTheme, "hr.trimmed"), clearTheme],
      [get(provider.applyTheme, "hr.trimmed"), applyTheme],
    );

    return (
      <hr
        className={twMerge(theme.base, className)}
        role="separator"
        data-testid="flowbite-hr-trimmed"
        ref={ref}
        {...props}
      />
    );
  },
);

HRTrimmed.displayName = "HRTrimmed";
