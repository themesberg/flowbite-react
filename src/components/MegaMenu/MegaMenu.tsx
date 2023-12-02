'use client';

import type { FC } from 'react';
import type { NavbarComponentProps } from '../Navbar';
import { Navbar } from '../Navbar';
import { MegaMenuCollapse } from './MegaMenuCollapse';
import { MegaMenuToggle } from './MegaMenuToggle';

export type MegaMenuProps = NavbarComponentProps;

const MegaMenuComponent: FC<MegaMenuProps> = ({ children, ...props }) => {
  return <Navbar {...props}>{children}</Navbar>;
};

export const MegaMenu = Object.assign(MegaMenuComponent, {
  Collapse: MegaMenuCollapse,
  Toggle: MegaMenuToggle,
});
MegaMenuComponent.displayName = 'MegaMenu';
