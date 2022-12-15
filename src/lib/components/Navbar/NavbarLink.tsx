import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteNavbarLinkTheme {
  base: string;
  active: FlowbiteBoolean;
  disabled: FlowbiteBoolean;
}

export interface NavbarLinkProps extends PropsWithChildren<ComponentProps<'a'>> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  theme?: DeepPartial<FlowbiteNavbarLinkTheme>;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  active,
  disabled,
  href,
  theme: customTheme = {},
  children,
  className,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.navbar.link, customTheme);

  return (
    <li>
      <a
        href={href}
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
      </a>
    </li>
  );
};
