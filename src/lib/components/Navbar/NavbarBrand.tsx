import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export type NavbarBrandProps = PropsWithChildren<ComponentProps<'a'>>;

export const NavbarBrand: FC<NavbarBrandProps> = ({ children, href, className, ...props }) => {
  const theme = useTheme().theme.navbar;
  return (
    <a href={href} className={classNames(theme.brand, className)} {...props}>
      {children}
    </a>
  );
};
