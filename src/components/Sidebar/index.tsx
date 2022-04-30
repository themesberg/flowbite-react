import { cloneElement, FC, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import SidebarCTA from './SidebarCTA';
import { SidebarLogo } from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import SidebarCollapse from './SidebarCollapse';
import childrenAsArray from '../../helpers/childrenAsArray';

export interface SidebarProps extends PropsWithChildren<Record<string, unknown>> {
  collapsed?: boolean;
}

const SidebarComponent: FC<SidebarProps> = ({ children, collapsed = false }) => {
  return (
    <aside
      aria-label="sidebar"
      className={classNames('h-full', {
        'w-64': !collapsed,
        'w-16': collapsed,
      })}
    >
      <div className="h-full overflow-y-auto rounded bg-gray-50 py-4 px-3 dark:bg-gray-800">
        {childrenAsArray(children).map((child, i) => cloneElement(child as ReactElement, { key: i, collapsed }))}
      </div>
    </aside>
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
