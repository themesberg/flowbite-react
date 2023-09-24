import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial, FlowbiteTextInputSizes } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

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

export interface RangeSliderProps extends Omit<ComponentProps<'input'>, 'ref' | 'type'> {
  sizing?: keyof FlowbiteTextInputSizes;
  theme?: DeepPartial<FlowbiteRangeSliderTheme>;
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ className, sizing = 'md', theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().rangeSlider, customTheme);

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

RangeSlider.displayName = 'RangeSlider';
