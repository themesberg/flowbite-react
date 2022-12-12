import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export interface FlowbiteNavbarCollapseTheme {
  base: string;
  list: string;
  hidden: FlowbiteBoolean;
}

export interface NavbarCollapseProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteNavbarCollapseTheme>;
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({
  theme: customTheme = {},
  children,
  className,
  ...props
}): JSX.Element => {
  const { isOpen } = useNavbarContext();

  const theme = mergeDeep(useTheme().theme.navbar.collapse, customTheme);

  return (
    <div
      className={classNames(theme.base, theme.hidden[!isOpen ? 'on' : 'off'], className)}
      data-testid="flowbite-navbar-collapse"
      {...props}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
