import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial, FlowbiteColors, FlowbiteTextInputSizes } from '../../';
import { useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteIndicatorTheme {
  root: FlowbiteIndicatorRootTheme;
}

export interface FlowbiteIndicatorRootTheme {
  base: string;
  color: FlowbiteColors;
  sizes: FlowbiteTextInputSizes;
}

export interface IndicatorProps extends PropsWithChildren<Omit<ComponentProps<'span'>, 'color'>> {
  theme?: DeepPartial<FlowbiteIndicatorTheme>;
  color?: keyof FlowbiteColors;
  sizing?: keyof FlowbiteTextInputSizes;
}

export const Indicator: FC<IndicatorProps> = ({
  children,
  className,
  theme: customTheme = {},
  color,
  sizing = 'sm',
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.indicator, customTheme);

  return (
    <span
      className={twMerge(theme.root.base, color ? theme.root.color[color] : '', theme.root.sizes[sizing], className)}
      data-testid="flowbite-indicator"
      {...props}
    >
      {children}
    </span>
  );
};

Indicator.displayName = 'Indicator';
