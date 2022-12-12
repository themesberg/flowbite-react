import classNames from 'classnames';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteCheckboxTheme {
  base: string;
}

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type' | 'ref'> {
  theme?: DeepPartial<FlowbiteCheckboxTheme>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ theme: customTheme = {}, className, ...props }, ref) => {
    const theme = mergeDeep(useTheme().theme.checkbox, customTheme);

    return <input ref={ref} className={classNames(theme.base, className)} type="checkbox" {...props} />;
  },
);

Checkbox.displayName = 'Checkbox';
