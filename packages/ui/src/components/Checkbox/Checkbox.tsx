"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, DynamicStringEnumKeysOf, Unstyled } from "../../types";
import type { FlowbiteColors } from "../Flowbite/FlowbiteTheme";
import { checkboxTheme } from "./theme";

export interface FlowbiteCheckboxTheme {
  root: FlowbiteCheckboxRootTheme;
}
export interface FlowbiteCheckboxRootTheme {
  base: string;
  color: FlowbiteColors;
}

export interface CheckboxProps extends Omit<ComponentProps<"input">, "type" | "ref" | "color"> {
  color?: DynamicStringEnumKeysOf<FlowbiteColors>;
  theme?: DeepPartial<FlowbiteCheckboxTheme>;
  unstyled?: Unstyled<FlowbiteCheckboxTheme>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color = "default", theme: customTheme, unstyled, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme([checkboxTheme, provider.theme?.checkbox, customTheme], [unstyled]);

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
