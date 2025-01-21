"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, FlowbiteColors, ThemingProps } from "../../types";
import { radioTheme } from "./theme";

export interface RadioTheme {
  base: string;
  color: FlowbiteColors;
}

export interface RadioProps extends Omit<ComponentProps<"input">, "ref" | "type">, ThemingProps<RadioTheme> {
  color?: DynamicStringEnumKeysOf<FlowbiteColors>;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ color = "default", className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [radioTheme, provider.theme?.radio, customTheme],
      [get(provider.clearTheme, "radio"), clearTheme],
      [get(provider.applyTheme, "radio"), applyTheme],
    );

    return <input ref={ref} type="radio" className={twMerge(theme.base, theme.color[color], className)} {...props} />;
  },
);

Radio.displayName = "Radio";
