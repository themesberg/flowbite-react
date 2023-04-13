import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import type { FlowbiteSidebarCollapseTheme } from './SidebarCollapse';
import SidebarCollapse from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';
import type { FlowbiteSidebarCTATheme } from './SidebarCTA';
import SidebarCTA from './SidebarCTA';
import type { FlowbiteSidebarItemTheme } from './SidebarItem';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import type { FlowbiteSidebarLogoTheme } from './SidebarLogo';
import SidebarLogo from './SidebarLogo';

export interface FlowbiteSidebarTheme {
  root: {
    base: string;
    collapsed: FlowbiteBoolean;
    inner: string;
  };
  collapse: FlowbiteSidebarCollapseTheme;
  cta: FlowbiteSidebarCTATheme;
  item: FlowbiteSidebarItemTheme;
  items: string;
  itemGroup: string;
  logo: FlowbiteSidebarLogoTheme;
}

export interface SidebarProps extends PropsWithChildren, ComponentProps<'div'> {
  collapseBehavior?: 'collapse' | 'hide';
  collapsed?: boolean;
  theme?: DeepPartial<FlowbiteSidebarTheme>;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  collapseBehavior = 'collapse',
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.sidebar, customTheme);

  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <aside
        aria-label="Sidebar"
        hidden={isCollapsed && collapseBehavior === 'hide'}
        className={classNames(theme.root.base, theme.root.collapsed[isCollapsed ? 'on' : 'off'], className)}
        {...props}
      >
        <div className={theme.root.inner}>{children}</div>
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
