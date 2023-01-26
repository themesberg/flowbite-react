import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteHelperTextTheme {
  root: FlowbiteHelperTextRootTheme;
}

export interface FlowbiteHelperTextRootTheme {
  base: string;
  colors: HelperColors;
}

export interface HelperColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface HelperTextProps extends PropsWithChildren<Omit<ComponentProps<'p'>, 'color'>> {
  color?: keyof HelperColors;
  value?: string;
  theme?: DeepPartial<FlowbiteHelperTextTheme>;
}

export const HelperText: FC<HelperTextProps> = ({
  value,
  children,
  color = 'default',
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.helperText, customTheme);

  return (
    <p className={classNames(theme.root.base, theme.root.colors[color], className)} {...props}>
      {value ?? children ?? ''}
    </p>
  );
};
