import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '../../theme-store';
import { DropdownDivider } from './DropdownDivider';

export interface FlowbiteDropdownHeaderTheme {
  header: string;
}

export const DropdownHeader: FC<PropsWithChildren & ComponentProps<'div'>> = ({ children, className, ...props }) => {
  const theme = getTheme().dropdown.floating.header;

  return (
    <>
      <div className={twMerge(theme, className)} {...props}>
        {children}
      </div>
      <DropdownDivider />
    </>
  );
};
