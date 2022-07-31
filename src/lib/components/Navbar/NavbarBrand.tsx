import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export type NavbarBrandProps = Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'>;

export const NavbarBrand: FC<NavbarBrandProps> = ({ children, href, ...props }) => {
  const theme = useTheme().theme.navbar;
  const theirProps = excludeClassName(props);
  return (
    <a href={href} className={theme.brand} {...theirProps}>
      {children}
    </a>
  );
};
