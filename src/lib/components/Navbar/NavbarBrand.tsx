import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import type { LinkProps } from 'react-router-dom';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteNavbarBrandTheme {
  base: string;
}

export interface NavbarBrandProps extends PropsWithChildren<ComponentProps<'a'>>, Partial<Pick<LinkProps, 'to'>> {
  theme?: DeepPartial<FlowbiteNavbarBrandTheme>;
  as?: ElementType;
  href?: string;
}

export const NavbarBrand: FC<NavbarBrandProps> = ({
  theme: customTheme = {},
  children,
  className,
  as: Component = 'a',
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.navbar.brand, customTheme);

  return (
    <Component className={classNames(theme.base, className)} {...props}>
      {children}
    </Component>
  );
};
