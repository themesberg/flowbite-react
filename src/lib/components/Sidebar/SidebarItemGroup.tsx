import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';
import { SidebarItemContext } from './SidebarItemContext';

const SidebarItemGroup: FC<PropsWithChildren<ComponentProps<'ul'>>> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.sidebar.itemGroup;

  return (
    <ul className={classNames(theme, className)} data-testid="flowbite-sidebar-item-group" {...props}>
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
    </ul>
  );
};

SidebarItemGroup.displayName = 'Sidebar.ItemGroup';
export default SidebarItemGroup;
