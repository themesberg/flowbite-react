import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteStateColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

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
      className={classNames(theme.root.base, theme.root.colors[color], disabled ?? theme.root.disabled, className)}
      {...props}
    >
      {value ?? children ?? ''}
    </label>
  );
};
