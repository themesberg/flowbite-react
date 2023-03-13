import classNames from 'classnames';
import type { ComponentProps, FC, MouseEvent, PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import windowExists from '../../helpers/window-exists';
import { useKeyDown } from '../../hooks';
import type { FlowbiteBoolean, FlowbitePlacements } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import type { FlowbiteDrawerBodyTheme } from './DrawerBody';
import { DrawerBody } from './DrawerBody';
import { DrawerContext } from './DrawerContext';
import type { FlowbiteDrawerHeaderTheme } from './DrawerHeader';
import { DrawerHeader } from './DrawerHeader';

export interface FlowbiteDrawerTheme {
  root: FlowbiteDrawerRootTheme;
  content: FlowbiteDrawerContentTheme;
  body: FlowbiteDrawerBodyTheme;
  header: FlowbiteDrawerHeaderTheme;
}

export interface FlowbiteDrawerRootTheme {
  base: string;
  placements: DrawerPlacements;
}

export interface FlowbiteDrawerContentTheme {
  base: string;
  inner: string;
}

export interface DrawerPlacements extends FlowbitePlacements {
  [key: string]: FlowbiteBoolean;
}

export interface DrawerProps extends PropsWithChildren<ComponentProps<'div'>> {
  onClose?: () => void;
  placement?: keyof DrawerPlacements;
  root?: HTMLElement;
  show?: boolean;
  dismissible?: boolean;
  theme?: DeepPartial<FlowbiteDrawerTheme>;
}

const DrawerComponent: FC<DrawerProps> = ({
  children,
  className,
  dismissible = false,
  onClose,
  placement = 'left',
  root,
  show,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.drawer, customTheme);

  // Declare a ref to store a reference to a div element.
  const containerRef = useRef<HTMLDivElement | null>(null);

  // If the current value of the ref is falsy (e.g. null), set it to a new div
  // element.
  if (!containerRef.current) {
    containerRef.current = document.createElement('div');
  }

  // If the current value of the ref is not already a child of the root element,
  // append it or replace its parent.
  if (containerRef.current.parentNode !== root && windowExists()) {
    root = root || document.body;
    root.appendChild(containerRef.current);
  }

  useEffect(() => {
    return () => {
      const container = containerRef.current;

      // If a container exists on unmount, it is removed from the DOM and
      // garbage collected.
      if (container) {
        container.parentNode?.removeChild(container);
        containerRef.current = null;
      }
    };
  }, []);

  useKeyDown('Escape', () => {
    if (dismissible && onClose) {
      onClose();
    }
  });

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log("...handleOnClick")
    console.log("dismissible:", dismissible)
    if (dismissible && e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return createPortal(
    <DrawerContext.Provider value={{ onClose }}>
      <div
        aria-hidden={!show}
        data-testid="drawer"
        onClick={handleOnClick}
        role="dialog"
        className={classNames(
          theme.root.base,
          show ? theme.root.placements[placement].on : theme.root.placements[placement].off,
          className,
        )}
        {...props}
      >
        <div className={classNames(theme.content.base)}>
          <div className={theme.content.inner}>{children}</div>
        </div>
      </div>
    </DrawerContext.Provider>,
    containerRef.current,
  );
};

DrawerComponent.displayName = 'Drawer';
DrawerHeader.displayName = 'Drawer.Header';
DrawerBody.displayName = 'Drawer.Body';

export const Drawer = Object.assign(DrawerComponent, { Header: DrawerHeader, Body: DrawerBody });
