import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';

export interface SidebarItemsProps extends PropsWithChildren, ComponentProps<'div'> {}

export const SidebarItems: FC<SidebarItemsProps> = ({ children, className, ...props }) => {
  const theme = getTheme().sidebar.items;

  return (
    <div className={twMerge(theme, className)} data-testid="flowbite-sidebar-items" {...props}>
      {children}
    </div>
  );
};

SidebarItems.displayName = 'Sidebar.Items';
