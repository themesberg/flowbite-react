"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { checkboxTheme } from "./theme";

export interface CheckboxTheme {
  base: string;
  color: FlowbiteColors;
  indeterminate: string;
}

export interface CheckboxProps
  extends Omit<ComponentProps<"input">, "type" | "ref" | "color">,
    ThemingProps<CheckboxTheme> {
  color?: DynamicStringEnumKeysOf<FlowbiteColors>;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color = "default", indeterminate, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [checkboxTheme, provider.theme?.checkbox, customTheme],
      [get(provider.clearTheme, "checkbox"), clearTheme],
      [get(provider.applyTheme, "checkbox"), applyTheme],
    );

    return (
      <input
        ref={ref}
        type="checkbox"
        className={twMerge(theme.base, theme.color[color], indeterminate && theme.indeterminate, className)}
        {...props}
      />
    );
  },
);

Checkbox.displayName = "Checkbox";
