import type { FC, PropsWithChildren, ComponentProps } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

const SidebarItems: FC<PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>> = ({
  children,
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.sidebar.items;

  return (
    <div className={theme} {...theirProps}>
      {children}
    </div>
  );
};

SidebarItems.displayName = 'Sidebar.Items';
export default SidebarItems;
