import classNames from 'classnames';
import type { ComponentProps, FC, MouseEvent, PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/merge-deep';
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
  backdrop?: boolean;
  theme?: DeepPartial<FlowbiteDrawerTheme>;
}

const DrawerComponent: FC<DrawerProps> = ({
  children,
  className,
  backdrop = false,
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
  if (containerRef.current.parentNode !== root) {
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    if (backdrop && e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return createPortal(
    show ? (
      <>
        <div className="fixed left-0 top-0 h-full w-full bg-black opacity-40" onClick={onClose} />
        <DrawerContext.Provider value={{ onClose }}>
          <div
            aria-hidden={!show}
            data-testid="drawer"
            onClick={handleOnClick}
            data-drawer-placement="top"
            role="dialog"
            style={{ boxShadow: `0 0 150px rgba(0, 0, 0, 0.2)`, ...(props?.style || {}) }}
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
        </DrawerContext.Provider>
      </>
    ) : null,
    containerRef.current,
  );
};

DrawerComponent.displayName = 'Drawer';
DrawerHeader.displayName = 'Drawer.Header';
DrawerBody.displayName = 'Drawer.Body';

export const Drawer = Object.assign(DrawerComponent, { Header: DrawerHeader, Body: DrawerBody });
