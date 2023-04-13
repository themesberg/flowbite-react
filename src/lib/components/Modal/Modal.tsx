import classNames from 'classnames';
import type { ComponentProps, FC, MouseEvent, PropsWithChildren } from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import windowExists from '../../helpers/window-exists';
import { useKeyDown } from '../../hooks';
import type { FlowbiteBoolean, FlowbitePositions, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import type { FlowbiteModalBodyTheme } from './ModalBody';
import { ModalBody } from './ModalBody';
import { ModalContext } from './ModalContext';
import type { FlowbiteModalFooterTheme } from './ModalFooter';
import { ModalFooter } from './ModalFooter';
import type { FlowbiteModalHeaderTheme } from './ModalHeader';
import { ModalHeader } from './ModalHeader';

export interface FlowbiteModalTheme {
  root: FlowbiteModalRootTheme;
  content: FlowbiteModalContentTheme;
  body: FlowbiteModalBodyTheme;
  header: FlowbiteModalHeaderTheme;
  footer: FlowbiteModalFooterTheme;
}

export interface FlowbiteModalRootTheme {
  base: string;
  show: FlowbiteBoolean;
  sizes: ModalSizes;
  positions: ModalPositions;
}

export interface FlowbiteModalContentTheme {
  base: string;
  inner: string;
}

export interface ModalPositions extends FlowbitePositions {
  [key: string]: string;
}

export interface ModalSizes extends Omit<FlowbiteSizes, 'xs'> {
  [key: string]: string;
}

export interface ModalProps extends PropsWithChildren<ComponentProps<'div'>> {
  onClose?: () => void;
  position?: keyof ModalPositions;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: keyof ModalSizes;
  dismissible?: boolean;
  theme?: DeepPartial<FlowbiteModalTheme>;
}

const ModalComponent: FC<ModalProps> = ({
  children,
  className,
  dismissible = false,
  onClose,
  popup,
  position = 'center',
  root,
  show,
  size = '2xl',
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.modal, customTheme);

  const [mounted, setMounted] = useState(false);

  // Declare a ref to store a reference to a div element.
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);

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

  if (!mounted) {
    return null;
  }

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

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    if (dismissible && e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ popup, onClose }}>
      <div
        aria-hidden={!show}
        data-testid="modal"
        onClick={handleOnClick}
        role="dialog"
        className={classNames(
          theme.root.base,
          theme.root.positions[position],
          show ? theme.root.show.on : theme.root.show.off,
          className,
        )}
        {...props}
      >
        <div className={classNames(theme.content.base, theme.root.sizes[size])}>
          <div className={theme.content.inner}>{children}</div>
        </div>
      </div>
    </ModalContext.Provider>,
    containerRef.current,
  );
};

ModalComponent.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

export const Modal = Object.assign(ModalComponent, { Header: ModalHeader, Body: ModalBody, Footer: ModalFooter });
