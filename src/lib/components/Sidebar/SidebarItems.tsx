import type { FC, PropsWithChildren, HTMLAttributes } from 'react';

const SidebarItems: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

SidebarItems.displayName = 'Sidebar.Items';
export default SidebarItems;
