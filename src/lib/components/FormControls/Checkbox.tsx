import type { ComponentProps, FC } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'className'>;

export const Checkbox: FC<CheckboxProps> = (props) => {
  const theme = useTheme().theme.formControls.checkbox;
  const theirProps = excludeClassName(props);
  return <input className={theme.base} type="checkbox" {...theirProps} />;
};
