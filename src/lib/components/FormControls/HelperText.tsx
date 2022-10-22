import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface HelperColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface HelperTextProps extends PropsWithChildren<Omit<ComponentProps<'p'>, 'color'>> {
  color?: keyof HelperColors;
  value?: string;
}

const HelperText: FC<HelperTextProps> = ({ value, children, color = 'default', className, ...props }) => {
  const theme = useTheme().theme.formControls.helperText;
  return (
    <p className={classNames(theme.base, theme.colors[color], className)} {...props}>
      {value ?? children ?? ''}
    </p>
  );
};

export default HelperText;
