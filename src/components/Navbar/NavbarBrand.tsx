import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

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
  const theme = mergeDeep(getTheme().navbar.brand, customTheme);

  return (
    <Component className={twMerge(theme.base, className)} {...props}>
      {children}
    </Component>
  );
};
