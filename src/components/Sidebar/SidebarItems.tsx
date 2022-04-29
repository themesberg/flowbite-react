import { FC, cloneElement } from 'react';

const SidebarItems: FC<Record<string, unknown>> = ({ children }) => {
  const _children = Array.isArray(children) ? children : [children];
  return <>{_children.map((child, i) => cloneElement(child, { first: i === 0 }))}</>;
};

SidebarItems.displayName = 'Sidebar.Items';
export default SidebarItems;
