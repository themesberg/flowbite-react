import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import SidebarCTA from './SidebarCTA';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import SidebarCollapse from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';
import { useTheme } from '../Flowbite/ThemeContext';
import { excludeClassName } from '../../helpers/exclude';

export interface SidebarProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  collapseBehavior?: 'collapse' | 'hide';
  collapsed?: boolean;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  collapseBehavior = 'collapse',
  collapsed: isCollapsed = false,
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.sidebar;

  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <aside
        aria-label="Sidebar"
        className={classNames(theme.base, theme.collapsed[isCollapsed ? 'on' : 'off'])}
        hidden={isCollapsed && collapseBehavior === 'hide'}
        {...theirProps}
      >
        <div className={theme.inner}>{children}</div>
      </aside>
    </SidebarContext.Provider>
  );
};

SidebarComponent.displayName = 'Sidebar';
export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
});
