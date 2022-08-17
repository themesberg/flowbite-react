import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'className' | 'ref'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const theme = useTheme().theme.formControls.checkbox;
  const theirProps = excludeClassName(props);
  return <input ref={ref} className={theme.base} type="checkbox" {...theirProps} />;
});

Checkbox.displayName = 'Checkbox';
