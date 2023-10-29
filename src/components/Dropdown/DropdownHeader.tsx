'use client';

import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '../../types';
import { useDropdownContext } from './DropdownContext';
import { DropdownDivider } from './DropdownDivider';

export interface FlowbiteDropdownHeaderTheme {
  header: string;
}

export type DropdownHeaderProps = {
  theme?: DeepPartial<FlowbiteDropdownHeaderTheme>;
} & PropsWithChildren &
  ComponentProps<'div'>;

export const DropdownHeader: FC<DropdownHeaderProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: dropdownTheme } = useDropdownContext();

  const theme = customTheme.header ?? dropdownTheme?.floating?.header;

  return (
    <>
      <div className={twMerge(theme, className)} {...props}>
        {children}
      </div>
      <DropdownDivider />
    </>
  );
};
