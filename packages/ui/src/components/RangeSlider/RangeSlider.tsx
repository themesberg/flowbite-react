"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, DynamicStringEnumKeysOf, ResetTheme } from "../../types";
import type { FlowbiteTextInputSizes } from "../TextInput";
import { rangeSliderTheme } from "./theme";

export interface FlowbiteRangeSliderTheme {
  root: FlowbiteRangeSliderRootTheme;
  field: FlowbiteRangeSliderFieldTheme;
}

export interface FlowbiteRangeSliderRootTheme {
  base: string;
}

export interface FlowbiteRangeSliderFieldTheme {
  base: string;
  input: {
    base: string;
    sizes: FlowbiteTextInputSizes;
  };
}

export interface RangeSliderProps extends Omit<ComponentProps<"input">, "ref" | "type"> {
  sizing?: DynamicStringEnumKeysOf<FlowbiteTextInputSizes>;
  theme?: DeepPartial<FlowbiteRangeSliderTheme>;
  resetTheme?: ResetTheme<FlowbiteRangeSliderTheme>;
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ className, sizing = "md", theme: customTheme, resetTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme([rangeSliderTheme, provider.theme?.rangeSlider, customTheme], [resetTheme]);

    return (
      <>
        <div data-testid="flowbite-range-slider" className={twMerge(theme.root.base, className)}>
          <div className={theme.field.base}>
            <input
              ref={ref}
              type="range"
              className={twMerge(theme.field.input.base, theme.field.input.sizes[sizing])}
              {...props}
            />
          </div>
        </div>
      </>
    );
  },
);

RangeSlider.displayName = "RangeSlider";
