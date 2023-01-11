import classNames from 'classnames';
import { ComponentProps, FC, MouseEvent, PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { FlowbiteBoolean, FlowbitePositions, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { ModalBody } from './ModalBody';
import { ModalContext } from './ModalContext';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

export interface FlowbiteModalTheme {
  base: string;
  show: FlowbiteBoolean;
  content: {
    base: string;
    inner: string;
  };
  body: {
    base: string;
    popup: string;
  };
  header: {
    base: string;
    popup: string;
    title: string;
    close: {
      base: string;
      icon: string;
    };
  };
  footer: {
    base: string;
    popup: string;
  };
  sizes: ModalSizes;
  positions: ModalPositions;
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
}

const ModalComponent: FC<ModalProps> = ({
  children,
  show,
  root = document.body,
  popup,
  size = '2xl',
  position = 'center',
  dismissible = false,
  onClose,
  className,
  ...props
}) => {
  const theme = useTheme().theme.modal;
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

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    if (dismissible && e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ popup, onClose }}>
      <div
        aria-hidden={!show}
        className={classNames(theme.base, theme.positions[position], show ? theme.show.on : theme.show.off, className)}
        data-testid="modal"
        role="dialog"
        onClick={handleOnClick}
        {...props}
      >
        <div className={classNames(theme.content.base, theme.sizes[size])}>
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
