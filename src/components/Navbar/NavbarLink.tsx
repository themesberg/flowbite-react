import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import type { DeepPartial, FlowbiteBoolean } from '~/src';
import { useTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';

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
  const theme = mergeDeep(useTheme().theme.navbar.link, customTheme);

  return (
    <li>
      <Component
        className={classNames(
          theme.base,
          {
            [theme.active.on]: active,
            [theme.active.off]: !active && !disabled,
          },
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
