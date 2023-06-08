import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial, FlowbiteStateColors } from '../../';
import { useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteLabelTheme {
  root: FlowbiteLabelRootTheme;
}

export interface FlowbiteLabelRootTheme {
  base: string;
  colors: LabelColors;
  disabled: string;
}

export interface LabelColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface LabelProps extends PropsWithChildren<Omit<ComponentProps<'label'>, 'color'>> {
  color?: keyof LabelColors;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteLabelTheme>;
  value?: string;
}

export const Label: FC<LabelProps> = ({
  children,
  className,
  color = 'default',
  disabled = false,
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.label, customTheme);

  return (
    <label
      className={twMerge(theme.root.base, theme.root.colors[color], disabled && theme.root.disabled, className)}
      data-testid="flowbite-label"
      {...props}
    >
      {value ?? children ?? ''}
    </label>
  );
};

Label.displayName = 'Label';
