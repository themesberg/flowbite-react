import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { HelperText } from '../HelperText';

export interface FlowbiteSelectTheme {
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
}

export interface SelectColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface SelectSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface SelectProps extends PropsWithChildren, Omit<ComponentProps<'select'>, 'color' | 'ref'> {
  addon?: ReactNode;
  color?: keyof SelectColors;
  helperText?: ReactNode;
  icon?: FC<ComponentProps<'svg'>>;
  shadow?: boolean;
  sizing?: keyof SelectSizes;
  theme?: DeepPartial<FlowbiteSelectTheme>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      addon,
      children,
      className,
      color = 'gray',
      helperText,
      icon: Icon,
      shadow,
      sizing = 'md',
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(useTheme().theme.select, customTheme);

    return (
      <div className={classNames(theme.base, className)}>
        {addon && <span className={theme.addon}>{addon}</span>}
        <div className={theme.field.base}>
          {Icon && (
            <div className={theme.field.icon.base}>
              <Icon className={theme.field.icon.svg} />
            </div>
          )}
          <select
            className={classNames(
              theme.field.select.base,
              theme.field.select.colors[color],
              theme.field.select.withIcon[Icon ? 'on' : 'off'],
              theme.field.select.withAddon[addon ? 'on' : 'off'],
              theme.field.select.withShadow[shadow ? 'on' : 'off'],
              theme.field.select.sizes[sizing],
            )}
            {...props}
            ref={ref}
          >
            {children}
          </select>
          {helperText && <HelperText color={color}>{helperText}</HelperText>}
        </div>
      </div>
    );
  },
);

Select.displayName = 'Select';
