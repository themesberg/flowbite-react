import type { ComponentProps, FC } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export type RadioProps = Omit<ComponentProps<'input'>, 'type' | 'className'>;

export const Radio: FC<RadioProps> = (props) => {
  const theme = useTheme().theme.formControls.radio;
  return <input className={theme.base} type="radio" {...props} />;
};
