import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteNavbarBrandTheme {
  base: string;
}

export interface NavbarBrandProps extends PropsWithChildren<ComponentProps<'a'>> {
  theme?: DeepPartial<FlowbiteNavbarBrandTheme>;
}

export const NavbarBrand: FC<NavbarBrandProps> = ({ theme: customTheme = {}, children, href, className, ...props }) => {
  const theme = mergeDeep(useTheme().theme.navbar.brand, customTheme);

  return (
    <a href={href} className={classNames(theme.base, className)} {...props}>
      {children}
    </a>
  );
};
