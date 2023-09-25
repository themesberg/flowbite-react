'use client';

import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '~/src/types';
import type { FlowbiteBoolean } from '../Flowbite';
import { useNavbarContext } from './NavbarContext';

export interface FlowbiteNavbarCollapseTheme {
  base: string;
  list: string;
  hidden: FlowbiteBoolean;
}

export interface NavbarCollapseProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteNavbarCollapseTheme>;
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { isOpen } = useNavbarContext();
  const theme = mergeDeep(getTheme().navbar.collapse, customTheme);

  return (
    <div
      data-testid="flowbite-navbar-collapse"
      className={twMerge(theme.base, theme.hidden[!isOpen ? 'on' : 'off'], className)}
      {...props}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
