import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface HelperColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface HelperTextProps extends PropsWithChildren<Omit<ComponentProps<'p'>, 'className'>> {
  color?: string;
  value?: string;
}

const HelperText: FC<HelperTextProps> = ({ value, children, color = 'default' }) => {
  const theme = useTheme().theme.formControls.helperText;
  return <p className={classNames(theme.base, theme.colors[color])}>{value ?? children ?? ''}</p>;
};

export default HelperText;
