import { FC, cloneElement, PropsWithChildren, ReactElement } from 'react';
import childrenAsArray from '../../helpers/childrenAsArray';

const SidebarItems: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  return <>{childrenAsArray(children).map((child, i) => cloneElement(child as ReactElement, { first: i === 0 }))}</>;
};

SidebarItems.displayName = 'Sidebar.Items';
export default SidebarItems;
