import classNames from 'classnames';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { useTheme } from '../../Flowbite/ThemeContext';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'ref'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  const theme = useTheme().theme.formControls.checkbox;
  return <input ref={ref} className={classNames(theme.base, className)} type="checkbox" {...props} />;
});

Checkbox.displayName = 'Checkbox';
