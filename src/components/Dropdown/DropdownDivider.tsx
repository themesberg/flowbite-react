import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '../../theme-store';

export interface FlowbiteDropdownDividerTheme {
  divider: string;
}

export const DropdownDivider: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  const theme = getTheme().dropdown.floating.divider;

  return <div className={twMerge(theme, className)} {...props} />;
};
