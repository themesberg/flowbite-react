'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean } from '../Flowbite';
import { useNavbarContext } from './NavbarContext';

export interface FlowbiteNavbarCollapseTheme {
  base: string;
  list: string;
  hidden: FlowbiteBoolean;
}

export interface NavbarCollapseProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteNavbarCollapseTheme>;
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, isOpen, setIsOpen } = useNavbarContext();

  const theme = mergeDeep(rootTheme.collapse, customTheme);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-testid="flowbite-navbar-collapse"
      className={twMerge(theme.base, theme.hidden[!isOpen ? 'on' : 'off'], className)}
      onClick={handleClick}
      {...props}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
