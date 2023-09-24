'use client';

import type { ComponentProps, FC } from 'react';
import { FaBars } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';
import { useNavbarContext } from './NavbarContext';

export interface FlowbiteNavbarToggleTheme {
  base: string;
  icon: string;
}

export interface NavbarToggleProps extends ComponentProps<'button'> {
  barIcon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<FlowbiteNavbarToggleTheme>;
}

export const NavbarToggle: FC<NavbarToggleProps> = ({
  barIcon: BarIcon = FaBars,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen, setIsOpen } = useNavbarContext();
  const theme = mergeDeep(getTheme().navbar.toggle, customTheme);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      data-testid="flowbite-navbar-toggle"
      onClick={handleClick}
      className={twMerge(theme.base, className)}
      {...props}
    >
      <span className="sr-only">Open main menu</span>
      <BarIcon aria-hidden className={theme.icon} />
    </button>
  );
};
