import classNames from 'classnames';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { FlowbiteBoolean, FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { HelperText } from '../HelperText';

export interface FlowbiteTextareaTheme {
  base: string;
  colors: TextareaColors;
  withShadow: FlowbiteBoolean;
}

export interface TextareaColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'color' | 'ref'> {
  shadow?: boolean;
  helperText?: ReactNode;
  color?: keyof TextareaColors;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ shadow, helperText, color = 'gray', className, ...props }, ref) => {
    const theme = useTheme().theme.textarea;
    return (
      <>
        <textarea
          ref={ref}
          className={classNames(theme.base, theme.colors[color], theme.withShadow[shadow ? 'on' : 'off'], className)}
          {...props}
        />
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

Textarea.displayName = 'Textarea';
