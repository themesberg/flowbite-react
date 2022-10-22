import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

const SidebarItems: FC<PropsWithChildren<ComponentProps<'div'>>> = ({ children, className, ...props }): JSX.Element => {
  const theme = useTheme().theme.sidebar.items;

  return (
    <div data-testid="flowbite-sidebar-items" className={classNames(theme, className)} {...props}>
      {children}
    </div>
  );
};

export default SidebarItems;
