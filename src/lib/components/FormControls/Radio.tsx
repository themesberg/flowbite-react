import type { ComponentProps, FC } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export type RadioProps = Omit<ComponentProps<'input'>, 'type' | 'className'>;

export const Radio: FC<RadioProps> = (props) => {
  const theme = useTheme().theme.formControls.radio;
  const theirProps = excludeClassName(props);
  return <input className={theme.base} type="radio" {...theirProps} />;
};
