import classNames from 'classnames';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { SidebarItemContext } from './SidebarItemContext';

const SidebarItemGroup: FC<PropsWithChildren<HTMLAttributes<HTMLUListElement>>> = ({ children, ...rest }) => {
  return (
    <ul
      className={classNames(
        'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700',
      )}
      data-testid="sidebar-item-group"
      {...rest}
    >
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
    </ul>
  );
};

SidebarItemGroup.displayName = 'Sidebar.ItemGroup';
export default SidebarItemGroup;
