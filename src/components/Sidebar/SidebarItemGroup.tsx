import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../';
import { SidebarItemContext } from './SidebarItemContext';

export interface SidebarItemGroupProps extends PropsWithChildren, ComponentProps<'ul'> {}

export const SidebarItemGroup: FC<SidebarItemGroupProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.sidebar.itemGroup;

  return (
    <ul data-testid="flowbite-sidebar-item-group" className={classNames(theme, className)} {...props}>
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
    </ul>
  );
};

SidebarItemGroup.displayName = 'Sidebar.ItemGroup';
