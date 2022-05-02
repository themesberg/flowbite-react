import classNames from 'classnames';
import { cloneElement, FC, ReactElement } from 'react';
import { SidebarProps } from '.';
import childrenAsArray from '../../helpers/childrenAsArray';

export interface SidebarItemGroupProps extends SidebarProps {
  first?: boolean;
}

const SidebarItemGroup: FC<SidebarItemGroupProps> = ({ children, collapsed, first = true }) => {
  return (
    <ul
      className={classNames('space-y-2', {
        'mt-4 space-y-2 border-t border-gray-200 pt-4 dark:border-gray-700': !first,
      })}
    >
      {childrenAsArray(children).map((child, i) => cloneElement(child as ReactElement, { key: i, collapsed }))}
    </ul>
  );
};

SidebarItemGroup.displayName = 'Sidebar.ItemGroup';
export default SidebarItemGroup;
