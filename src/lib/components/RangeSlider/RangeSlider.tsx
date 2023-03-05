import classNames from 'classnames';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import type { TextInputSizes } from '../TextInput';

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
    sizes: TextInputSizes;
  };
}

export interface RangeSliderProps extends Omit<ComponentProps<'input'>, 'ref' | 'type'> {
  sizing?: keyof TextInputSizes;
  theme?: DeepPartial<FlowbiteRangeSliderTheme>;
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ className, sizing = 'md', theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(useTheme().theme.rangeSlider, customTheme);

    return (
      <>
        <div data-testid="flowbite-range-slider" className={classNames(theme.root.base, className)}>
          <div className={theme.field.base}>
            <input
              ref={ref}
              type="range"
              className={classNames(theme.field.input.base, theme.field.input.sizes[sizing])}
              {...props}
            />
          </div>
        </div>
      </>
    );
  },
);

RangeSlider.displayName = 'RangeSlider';
