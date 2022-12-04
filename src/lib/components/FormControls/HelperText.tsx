import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteBoolean, FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { SelectColors, SelectSizes } from './Select';
import { TextareaColors } from './Textarea';
import { TextInputColors, TextInputSizes } from './TextInput';

export interface FlowbiteFormControlsTheme {
  helperText: {
    base: string;
    colors: HelperColors;
  };
  radio: {
    base: string;
  };
  textInput: {
    base: string;
    addon: string;
    field: {
      base: string;
      icon: {
        base: string;
        svg: string;
      };
      input: {
        base: string;
        sizes: TextInputSizes;
        colors: TextInputColors;
        withIcon: FlowbiteBoolean;
        withAddon: FlowbiteBoolean;
        withShadow: FlowbiteBoolean;
      };
    };
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
  textarea: {
    base: string;
    colors: TextareaColors;
    withShadow: FlowbiteBoolean;
  };
  select: {
    base: string;
    addon: string;
    field: {
      base: string;
      icon: {
        base: string;
        svg: string;
      };
      select: {
        base: string;
        withIcon: FlowbiteBoolean;
        withAddon: FlowbiteBoolean;
        withShadow: FlowbiteBoolean;
        sizes: SelectSizes;
        colors: SelectColors;
      };
    };
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
