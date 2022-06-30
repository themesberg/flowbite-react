import classNames from 'classnames';
import type { ComponentProps, FC, ReactNode } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import HelperText from './HelperText';

export interface TextareaColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'className' | 'color'> {
  shadow?: boolean;
  helperText?: ReactNode;
  color?: keyof TextareaColors;
}

export const Textarea: FC<TextareaProps> = ({ shadow, helperText, color = 'gray', ...props }) => {
  const theme = useTheme().theme.formControls.textarea;
  const theirProps = excludeClassName(props)
  return (
    <>
      <textarea 
        className={classNames(theme.base, theme.colors[color], theme.withShadow[shadow ? 'on' : 'off'])}
        {...theirProps}
      />
      {helperText && <HelperText color={color}>{helperText}</HelperText>}
    </>
  )
};

Textarea.displayName = 'Textarea';