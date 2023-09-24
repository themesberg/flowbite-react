import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial, FlowbiteBoolean } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteNavbarLinkTheme {
  base: string;
  active: FlowbiteBoolean;
  disabled: FlowbiteBoolean;
}

export interface NavbarLinkProps extends PropsWithChildren, ComponentProps<'a'>, Record<string, unknown> {
  active?: boolean;
  as?: ElementType;
  disabled?: boolean;
  href?: string;
  theme?: DeepPartial<FlowbiteNavbarLinkTheme>;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  active,
  as: Component = 'a',
  disabled,
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().navbar.link, customTheme);

  return (
    <li>
      <Component
        className={twMerge(
          theme.base,
          active && theme.active.on,
          !active && !disabled && theme.active.off,
          theme.disabled[disabled ? 'on' : 'off'],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </li>
  );
};
