import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteTextInputSizes } from '../TextInput';

export interface FlowbiteRangeSliderTheme {
  base: string;
  sizes: FlowbiteTextInputSizes;
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
        <input ref={ref} type="range" className={twMerge(theme.base, theme.sizes[sizing], className)} {...props} />
      </>
    );
  },
);

RangeSlider.displayName = 'RangeSlider';
