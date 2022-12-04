import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteBoolean, FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteFormControlsTheme {
  helperText: {
    base: string;
    colors: HelperColors;
  };
  toggleSwitch: {
    base: string;
    active: FlowbiteBoolean;
    toggle: {
      base: string;
      checked: FlowbiteBoolean & {
        color: FlowbiteColors;
      };
    };
    label: string;
  };
}

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
