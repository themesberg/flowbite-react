"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { radioTheme } from "./theme";

export interface RadioTheme {
  root: RadioRootTheme;
}

export interface RadioRootTheme {
  base: string;
}

export interface RadioProps extends Omit<ComponentProps<"input">, "ref" | "type">, ThemingProps<RadioTheme> {}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, theme: customTheme, resetTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme([radioTheme, provider.theme?.radio, customTheme], [resetTheme]);

    return <input ref={ref} type="radio" className={twMerge(theme.root.base, className)} {...props} />;
  },
);

Radio.displayName = "Radio";
