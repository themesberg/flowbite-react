"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
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
  ({ className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [radioTheme, provider.theme?.radio, customTheme],
      [get(provider.clearTheme, "radio"), clearTheme],
      [get(provider.applyTheme, "radio"), applyTheme],
    );

    return <input ref={ref} type="radio" className={twMerge(theme.root.base, className)} {...props} />;
  },
);

Radio.displayName = "Radio";
