import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { useTheme } from '../../';

export interface FlowbiteDropdownDividerTheme {
  divider: string;
}

export const DropdownDivider: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  const theme = useTheme().theme.dropdown.floating.divider;

  return <div className={classNames(theme, className)} {...props} />;
};
