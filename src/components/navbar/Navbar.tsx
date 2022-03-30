import { FC, useState } from 'react';
import { NavbarBrand } from './NavbarBrand';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarContext } from './NavbarContext';
import { NavbarToggle } from './NavbarToggle';

export type NavbarCompnentProps = {
  open?: boolean;
};

const NavbarCompnent: FC<NavbarCompnentProps> = ({ children, open }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">{children}</div>
      </nav>
    </NavbarContext.Provider>
  );
};

NavbarCompnent.displayName = 'Navbar';
NavbarBrand.displayName = 'Navbar.Brand';
NavbarToggle.displayName = 'Navbar.Toggle';
NavbarCollapse.displayName = 'Navbar.Collapse';

export const Navbar = Object.assign(NavbarCompnent, {
  Brand: NavbarBrand,
  Toggle: NavbarToggle,
  Collapse: NavbarCollapse,
});
