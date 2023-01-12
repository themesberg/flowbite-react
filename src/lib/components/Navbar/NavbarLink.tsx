import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import type { LinkProps } from 'react-router-dom';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteNavbarLinkTheme {
  base: string;
  active: FlowbiteBoolean;
  disabled: FlowbiteBoolean;
}

export interface NavbarLinkProps extends PropsWithChildren<ComponentProps<'a'>>, Partial<Pick<LinkProps, 'to'>> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  theme?: DeepPartial<FlowbiteNavbarLinkTheme>;
  as?: ElementType;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  active,
  disabled,
  theme: customTheme = {},
  children,
  className,
  as: Component = 'a',
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
