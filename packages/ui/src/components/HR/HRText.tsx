"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { hrTheme } from "./theme";

export interface HRTextTheme {
  base: string;
  hrLine: string;
  text: string;
}

export interface HRTextProps extends Omit<ComponentProps<"hr">, "ref">, ThemingProps<HRTextTheme> {
  text: string;
}

export const HRText = forwardRef<HTMLHRElement, HRTextProps>(
  ({ theme: customTheme, resetTheme, applyTheme, text, className, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme(
      [hrTheme.text, provider.theme?.hr?.text, customTheme],
      [get(provider.resetTheme, "hr.text"), resetTheme],
      [get(provider.applyTheme, "hr.text"), applyTheme],
    );

    return (
      <div className={theme.base}>
        <hr
          className={twMerge(theme.hrLine, className)}
          data-testid="flowbite-hr-text"
          role="separator"
          ref={ref}
          {...props}
        />
        <span className={theme.text}>{text}</span>
      </div>
    );
  },
);

HRText.displayName = "HRText";
