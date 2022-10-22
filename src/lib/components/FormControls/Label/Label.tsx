import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteStateColors } from '../../Flowbite/FlowbiteTheme';
import { useTheme } from '../../Flowbite/ThemeContext';

export interface LabelColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface LabelProps extends PropsWithChildren<Omit<ComponentProps<'label'>, 'color'>> {
  color?: keyof LabelColors;
  value?: string;
  disabled?: boolean;
}

export const Label: FC<LabelProps> = ({
  children,
  color = 'default',
  disabled = false,
  value,
  className,
  ...props
}): JSX.Element => {
  const theme = useTheme().theme.formControls.label;
  return (
    <label className={classNames(theme.base, theme.colors[color], disabled ?? theme.disabled, className)} {...props}>
      {value ?? children ?? ''}
    </label>
  );
};
