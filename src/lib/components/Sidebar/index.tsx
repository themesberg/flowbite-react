import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
import SidebarCTA from './SidebarCTA';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import SidebarCollapse from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';

export interface SidebarProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  collapsed?: boolean;
}

export const SidebarComponent: FC<SidebarProps> = ({ children, collapsed = false, ...rest }) => {
  return (
    <aside aria-label="Sidebar" className={classNames('h-full', collapsed ? 'w-16' : 'w-64')} {...rest}>
      <div className="h-full overflow-y-auto rounded bg-gray-50 py-4 px-3 dark:bg-gray-800">{children}</div>
    </aside>
  );
};

const SidebarWrapper: FC<SidebarProps> = ({ children, collapsed = false }) => {
  return <SidebarContext.Provider value={{ collapsed }}>{children}</SidebarContext.Provider>;
};

SidebarWrapper.displayName = 'Sidebar';
export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
});
