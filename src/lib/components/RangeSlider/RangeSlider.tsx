import classNames from 'classnames';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import type { TextInputSizes } from '../TextInput';

export interface FlowbiteRangeSliderTheme {
  root: FlowbiteRangeSliderRoottheme;
  field: FlowbiteRangeSliderFieldtheme;
}

export interface FlowbiteRangeSliderRoottheme {
  base: string;
}

export interface FlowbiteRangeSliderFieldtheme {
  base: string;
  input: {
    base: string;
    sizes: TextInputSizes;
  };
}

export interface RangeSliderProps extends Omit<ComponentProps<'input'>, 'type' | 'ref'> {
  sizing?: keyof TextInputSizes;
  theme?: DeepPartial<FlowbiteRangeSliderTheme>;
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ theme: customTheme = {}, sizing = 'md', className, ...props }, ref) => {
    const theme = mergeDeep(useTheme().theme.rangeSlider, customTheme);

    return (
      <>
        <div data-testid="flowbite-range-slider" className={classNames(theme.root.base, className)}>
          <div className={theme.field.base}>
            <input
              className={classNames(theme.field.input.base, theme.field.input.sizes[sizing])}
              {...props}
              type="range"
              ref={ref}
            />
          </div>
        </div>
      </>
    );
  },
);

RangeSlider.displayName = 'RangeSlider';
