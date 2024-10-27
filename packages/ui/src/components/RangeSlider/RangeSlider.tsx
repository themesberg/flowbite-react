import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
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
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ className, sizing = "md", theme: customTheme, ...props }, ref) => {
    const theme = resolveTheme([rangeSliderTheme, getStore().theme?.rangeSlider, customTheme]);

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
