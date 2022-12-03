import classNames from 'classnames';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteCheckboxTheme {
  base: string;
}

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'ref'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  const theme = useTheme().theme.checkbox;
  return <input ref={ref} className={classNames(theme.base, className)} type="checkbox" {...props} />;
});

Checkbox.displayName = 'Checkbox';
