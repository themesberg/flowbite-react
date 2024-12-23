"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial } from "../../types";
import { hrTheme } from "./theme";

export interface FlowbiteHRSquareTheme {
  base: string;
}

export interface HRSquareProps extends Omit<ComponentProps<"hr">, "ref"> {
  theme?: DeepPartial<FlowbiteHRSquareTheme>;
}

export const HRSquare = forwardRef<HTMLHRElement, HRSquareProps>(({ theme: customTheme, className, ...props }, ref) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([hrTheme.square, provider.theme?.hr?.square, customTheme]);

  return (
    <hr
      className={twMerge(theme.base, className)}
      role="separator"
      data-testid="flowbite-hr-square"
      ref={ref}
      {...props}
    />
  );
});
