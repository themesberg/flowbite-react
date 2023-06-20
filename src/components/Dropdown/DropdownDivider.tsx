import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../';

export interface FlowbiteDropdownDividerTheme {
  divider: string;
}

export const DropdownDivider: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  const theme = useTheme().theme.dropdown.floating.divider;

  return <div className={twMerge(theme, className)} {...props} />;
};
