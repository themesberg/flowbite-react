import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

interface SidebarItemGroupProps extends PropsWithChildren<Record<string, unknown>> {
  first?: boolean;
}

const SidebarItemGroup: FC<SidebarItemGroupProps> = ({ children, first = true }) => {
  return (
    <ul
      className={classNames('space-y-2', {
        'mt-4 space-y-2 border-t border-gray-200 pt-4 dark:border-gray-700': !first,
      })}
    >
      {children}
    </ul>
  );
};

SidebarItemGroup.displayName = 'Sidebar.ItemGroup';
export default SidebarItemGroup;
