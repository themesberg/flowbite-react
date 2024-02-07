'use client';

import { useEffect, type ComponentProps, type FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import { DrawerHeader, type FlowbiteDrawerHeaderTheme } from './DrawerHeader';
import { DrawerContext } from './DrawerContext';
import type { FlowbiteBoolean } from '../Flowbite';
import { DrawerItems, type FlowbiteDrawerItemsTheme } from './DrawerItems';

export interface FlowbiteDrawerTheme {
  root: FlowbiteDrawerRootTheme;
  header: FlowbiteDrawerHeaderTheme;
  items: FlowbiteDrawerItemsTheme;
}

export interface FlowbiteDrawerRootTheme {
  base: string;
  position: {
    top: string;
    right: string;
    bottom: string;
    left: string;
  };
  collapsed: FlowbiteBoolean;
}

export interface DrawerProps extends ComponentProps<'div'> {
  open?: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
  onClose: () => void;
  theme?: DeepPartial<FlowbiteDrawerTheme>;
}

const DrawerComponent: FC<DrawerProps> = ({
  children,
  className,
  open: isOpen = false,
  theme: customTheme = {},
  position = 'left',
  onClose,
  ...props
}) => {
  const theme = mergeDeep(getTheme().drawer, customTheme);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
  }, [onClose]);

  return (
    <DrawerContext.Provider value={{ theme, onClose, isOpen }}>
      <div
        className={twMerge(
          theme.root.base,
          theme.root.position[position],
          theme.root.collapsed[isOpen ? 'on' : 'off'],
          className,
        )}
        data-testid="flowbite-drawer"
        {...props}
      >
        <div>{children}</div>
      </div>
    </DrawerContext.Provider>
  );
};

DrawerComponent.displayName = 'Drawer';

export const Drawer = Object.assign(DrawerComponent, {
  Header: DrawerHeader,
  Items: DrawerItems,
});
