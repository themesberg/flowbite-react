import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

const SidebarItems: FC<PropsWithChildren<ComponentProps<'div'>>> = ({ children, className, ...props }): JSX.Element => {
  const theme = useTheme().theme.sidebar.items;

  return (
    <div className={classNames(theme, className)} data-testid="flowbite-sidebar-items" {...props}>
      {children}
    </div>
  );
};

SidebarItems.displayName = 'Sidebar.Items';
export default SidebarItems;
