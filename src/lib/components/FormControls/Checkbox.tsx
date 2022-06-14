import type { ComponentProps, FC } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'className'>;

export const Checkbox: FC<CheckboxProps> = (props) => {
  const theme = useTheme().theme.formControls.checkbox;
  return <input className={theme.base} type="checkbox" {...props} />;
};
