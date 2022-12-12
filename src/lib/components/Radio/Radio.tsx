import classNames from 'classnames';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteRadioTheme {
  base: string;
}

export interface RadioProps extends Omit<ComponentProps<'input'>, 'type' | 'ref'> {
  theme?: DeepPartial<FlowbiteRadioTheme>;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ theme: customTheme = {}, className, ...props }, ref) => {
    const theme = mergeDeep(useTheme().theme.radio, customTheme);

    return <input ref={ref} className={classNames(theme.base, className)} type="radio" {...props} />;
  },
);

Radio.displayName = 'Radio';
