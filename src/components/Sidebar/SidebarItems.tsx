import { FC, cloneElement, ReactElement } from 'react';
import { SidebarProps } from '.';
import childrenAsArray from '../../helpers/childrenAsArray';

const SidebarItems: FC<SidebarProps> = ({ children, collapsed }) => {
  return (
    <>
      {childrenAsArray(children).map((child, i) =>
        cloneElement(child as ReactElement, { key: i, collapsed, first: i === 0 }),
      )}
    </>
  );
};

SidebarItems.displayName = 'Sidebar.Items';
export default SidebarItems;
