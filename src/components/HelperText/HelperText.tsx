import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial, FlowbiteColors } from '~/src';
import { useTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';

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
  theme?: DeepPartial<FlowbiteHelperTextTheme>;
  value?: string;
}

export const HelperText: FC<HelperTextProps> = ({
  children,
  className,
  color = 'default',
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.helperText, customTheme);

  return (
    <p className={classNames(theme.root.base, theme.root.colors[color], className)} {...props}>
      {value ?? children ?? ''}
    </p>
  );
};

HelperText.displayName = 'HelperText';
