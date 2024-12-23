"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial } from "../../types";
import { hrTheme } from "./theme";

export interface FlowbiteHRTrimmedTheme {
  base: string;
}

export interface HRTrimmedProps extends Omit<ComponentProps<"hr">, "ref"> {
  theme?: DeepPartial<FlowbiteHRTrimmedTheme>;
}

export const HRTrimmed = forwardRef<HTMLHRElement, HRTrimmedProps>(
  ({ theme: customTheme, className, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme([hrTheme.trimmed, provider.theme?.hr?.trimmed, customTheme]);

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
