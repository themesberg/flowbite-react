"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { checkboxTheme } from "./theme";

export interface CheckboxTheme {
  root: CheckboxRootTheme;
}
export interface CheckboxRootTheme {
  base: string;
  color: FlowbiteColors;
}

export interface CheckboxProps
  extends Omit<ComponentProps<"input">, "type" | "ref" | "color">,
    ThemingProps<CheckboxTheme> {
  color?: DynamicStringEnumKeysOf<FlowbiteColors>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color = "default", theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme(
      [checkboxTheme, provider.theme?.checkbox, customTheme],
      [get(provider.clearTheme, "checkbox"), clearTheme],
      [get(provider.applyTheme, "checkbox"), applyTheme],
    );

    return (
      <input
        ref={ref}
        type="checkbox"
        className={twMerge(theme.root.base, theme.root.color[color], className)}
        {...props}
      />
    );
  },
);

Checkbox.displayName = "Checkbox";
