import classNames from 'classnames';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import SidebarCollapse from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';
import SidebarCTA, { SidebarCTAColors } from './SidebarCTA';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import SidebarLogo from './SidebarLogo';

export interface FlowbiteSidebarTheme {
  base: string;
  collapsed: FlowbiteBoolean;
  inner: string;
  collapse: {
    button: string;
    icon: {
      base: string;
      open: FlowbiteBoolean;
    };
    label: {
      base: string;
      icon: string;
    };
    list: string;
  };
  cta: {
    base: string;
    color: SidebarCTAColors;
  };
  item: {
    active: string;
    base: string;
    collapsed: {
      insideCollapse: string;
      noIcon: string;
    };
    content: {
      base: string;
    };
    label: string;
    icon: {
      base: string;
      active: string;
    };
  };
  items: string;
  itemGroup: string;
  logo: {
    base: string;
    collapsed: FlowbiteBoolean;
    img: string;
  };
}

export interface SidebarProps extends PropsWithChildren<ComponentProps<'div'>> {
  collapseBehavior?: 'collapse' | 'hide';
  collapsed?: boolean;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  collapseBehavior = 'collapse',
  collapsed: isCollapsed = false,
  ...props
}): JSX.Element => {
  const theme = useTheme().theme.sidebar;

  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <aside
        aria-label="Sidebar"
        className={classNames(theme.base, theme.collapsed[isCollapsed ? 'on' : 'off'])}
        hidden={isCollapsed && collapseBehavior === 'hide'}
        {...props}
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
