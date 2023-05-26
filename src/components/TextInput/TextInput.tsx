import classNames from 'classnames';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { DeepPartial, FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from '~/src';
import { HelperText, useTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';

export interface FlowbiteTextInputTheme {
  base: string;
  addon: string;
  field: {
    base: string;
    icon: {
      base: string;
      svg: string;
    };
    rightIcon: {
      base: string;
      svg: string;
    };
    input: {
      base: string;
      sizes: FlowbiteTextInputSizes;
      colors: FlowbiteTextInputColors;
      withIcon: FlowbiteBoolean;
      withRightIcon: FlowbiteBoolean;
      withAddon: FlowbiteBoolean;
      withShadow: FlowbiteBoolean;
    };
  };
}

export interface FlowbiteTextInputColors
  extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface FlowbiteTextInputSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
  addon?: ReactNode;
  color?: keyof FlowbiteTextInputColors;
  helperText?: ReactNode;
  renderIcon?: (style: string) => JSX.Element;
  renderRightIcon?: (style: string) => JSX.Element;
  shadow?: boolean;
  sizing?: keyof FlowbiteTextInputSizes;
  theme?: DeepPartial<FlowbiteTextInputTheme>;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      addon,
      className,
      color = 'gray',
      helperText,
      renderIcon,
      renderRightIcon,
      shadow,
      sizing = 'md',
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(useTheme().theme.textInput, customTheme);

    return (
      <>
        <div className={classNames(theme.base, className)}>
          {addon && <span className={theme.addon}>{addon}</span>}
          <div className={theme.field.base}>
            {renderIcon && (
              <div className={theme.field.icon.base} data-testid="flowbite-textinput-icon">
                {renderIcon(theme.field.icon.svg)}
              </div>
            )}

            {renderRightIcon && (
              <div data-testid="flowbite-textinput-righticon" className={theme.field.rightIcon.base}>
                {renderRightIcon(theme.field.rightIcon.svg)}
              </div>
            )}

            <input
              className={classNames(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.withIcon[renderIcon ? 'on' : 'off'],
                theme.field.input.withRightIcon[renderRightIcon ? 'on' : 'off'],
                theme.field.input.withAddon[addon ? 'on' : 'off'],
                theme.field.input.withShadow[shadow ? 'on' : 'off'],
                theme.field.input.sizes[sizing],
              )}
              {...props}
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
