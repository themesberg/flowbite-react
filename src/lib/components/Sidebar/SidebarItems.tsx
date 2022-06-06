import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

const SidebarItems: FC<PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>> = ({
  children,
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.sidebar.items;

  return (
    <div className={theme} data-testid="flowbite-sidebar-items" {...theirProps}>
      {children}
    </div>
  );
};

SidebarItems.displayName = 'Sidebar.Items';
export default SidebarItems;
