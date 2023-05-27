import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import type { DeepPartial, FlowbiteBoolean } from '../../';
import { useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';
import type { FlowbiteSidebarCollapseTheme } from './SidebarCollapse';
import { SidebarCollapse } from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';
import type { FlowbiteSidebarCTATheme } from './SidebarCTA';
import { SidebarCTA } from './SidebarCTA';
import type { FlowbiteSidebarItemTheme } from './SidebarItem';
import { SidebarItem } from './SidebarItem';
import { SidebarItemGroup } from './SidebarItemGroup';
import { SidebarItems } from './SidebarItems';
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
  as?: ElementType;
  collapseBehavior?: 'collapse' | 'hide';
  collapsed?: boolean;
  theme?: DeepPartial<FlowbiteSidebarTheme>;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  as: Component = 'nav',
  collapseBehavior = 'collapse',
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.sidebar, customTheme);

  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <Component
        aria-label="Sidebar"
        hidden={isCollapsed && collapseBehavior === 'hide'}
        className={classNames(theme.root.base, theme.root.collapsed[isCollapsed ? 'on' : 'off'], className)}
        {...props}
      >
        <div className={theme.root.inner}>{children}</div>
      </Component>
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
