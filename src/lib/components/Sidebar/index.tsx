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

const SidebarComponent: FC<SidebarProps> = ({ children, className, collapsed: isCollapsed = false, ...theirProps }) => {
  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <aside aria-label="Sidebar" className={classNames('h-full', isCollapsed ? 'w-16' : 'w-64')} {...theirProps}>
        <div
          className={classNames(
            'h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-gray-800',
            className,
          )}
        >
          {children}
        </div>
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
