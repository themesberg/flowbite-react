import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '~/src';
import { useTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';

export interface FlowbiteNavbarBrandTheme {
  base: string;
}

export interface NavbarBrandProps extends PropsWithChildren, ComponentProps<'a'>, Record<string, unknown> {
  as?: ElementType;
  href?: string;
  theme?: DeepPartial<FlowbiteNavbarBrandTheme>;
}

export const NavbarBrand: FC<NavbarBrandProps> = ({
  as: Component = 'a',
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.navbar.brand, customTheme);

  return (
    <Component className={classNames(theme.base, className)} {...props}>
      {children}
    </Component>
  );
};
