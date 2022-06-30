import classNames from 'classnames';
import type { ComponentProps, FC, ReactNode } from 'react';
import { forwardRef } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import type { FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import HelperText from './HelperText';

export interface TextInputColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface TextInputSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className'> {
  sizing?: keyof TextInputSizes;
  shadow?: boolean;
  helperText?: ReactNode;
  addon?: ReactNode;
  icon?: FC<ComponentProps<'svg'>>;
  color?: keyof TextInputColors;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ sizing = 'md', shadow, helperText, addon, icon: Icon, color = 'gray', ...props }, ref) => {
    const theme = useTheme().theme.formControls.textInput;
    const theirProps = excludeClassName(props);
    return (
      <>
        <div className={theme.base}>
          {addon && <span className={theme.addon}>{addon}</span>}
          <div className={theme.field.base}>
            {Icon && (
              <div className={theme.field.icon.base}>
                <Icon className={theme.field.icon.svg} />
              </div>
            )}
            <input
              className={classNames(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.withIcon[Icon ? 'on' : 'off'],
                theme.field.input.withAddon[addon ? 'on' : 'off'],
                theme.field.input.withShadow[shadow ? 'on' : 'off'],
                theme.field.input.sizes[sizing],
              )}
              {...theirProps}
              ref={ref}
            />
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

TextInput.displayName = 'TextInput';
