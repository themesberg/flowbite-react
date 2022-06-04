import type { ComponentProps, FC } from 'react';

export const NavbarBrand: FC<ComponentProps<'a'>> = ({ children, href }) => (
  <a href={href} className="flex items-center">
    {children}
  </a>
);
