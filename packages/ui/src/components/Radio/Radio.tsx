"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { radioTheme } from "./theme";

export interface FlowbiteRadioTheme {
  root: FlowbiteRadioRootTheme;
}

export interface FlowbiteRadioRootTheme {
  base: string;
}

export interface RadioProps extends Omit<ComponentProps<"input">, "ref" | "type"> {
  theme?: DeepPartial<FlowbiteRadioTheme>;
  resetTheme?: ResetTheme<FlowbiteRadioTheme>;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, theme: customTheme, resetTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme([radioTheme, provider.theme?.radio, customTheme], [resetTheme]);

    return <input ref={ref} type="radio" className={twMerge(theme.root.base, className)} {...props} />;
  },
);

Radio.displayName = "Radio";
