import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial, FlowbiteColors } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

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
  const theme = mergeDeep(getTheme().helperText, customTheme);

  return (
    <p className={twMerge(theme.root.base, theme.root.colors[color], className)} {...props}>
      {value ?? children ?? ''}
    </p>
  );
};

HelperText.displayName = 'HelperText';
