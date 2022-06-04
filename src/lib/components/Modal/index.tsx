import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalContext } from './ModalContext';
import windowExists from '../../helpers/window-exists';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
export type ModalPlacement = `${'top' | 'bottom'}-${'left' | 'center' | 'right'}` | `center${'' | '-left' | '-right'}`;

export type ModalProps = PropsWithChildren<{
  onClose?: () => void;
  placement?: ModalPlacement;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: ModalSize;
}>;

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

const placementClasses: Record<ModalPlacement, string> = {
  'top-left': 'items-start justify-start',
  'top-center': 'items-start justify-center',
  'top-right': 'items-start justify-end',
  'center-left': 'items-center justify-start',
  center: 'items-center justify-center',
  'center-right': 'items-center justify-end',
  'bottom-right': 'items-end justify-end',
  'bottom-center': 'items-end justify-center',
  'bottom-left': 'items-end justify-start',
};

const ModalComponent: FC<ModalProps> = ({
  children,
  root = windowExists() ? document.body : undefined,
  show,
  popup,
  size = '2xl',
  placement = 'center',
  onClose,
}): JSX.Element | null => {
  const [container] = useState<HTMLDivElement | undefined>(windowExists() ? document.createElement('div') : undefined);

  useEffect(() => {
    if (!container || !root || !show) {
      return;
    }

    root.appendChild(container);

    return () => {
      root.removeChild(container);
    };
  }, [container, root, show]);

  return container
    ? createPortal(
        <ModalContext.Provider value={{ popup, onClose }}>
          <div
            aria-hidden={!show}
            className={classNames(
              'fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
              placementClasses[placement],
              {
                'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80': show,
                hidden: !show,
              },
            )}
            data-testid="modal"
          >
            <div className={classNames('relative h-full w-full p-4 md:h-auto', sizeClasses[size])}>
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">{children}</div>
            </div>
          </div>
        </ModalContext.Provider>,
        container,
      )
    : null;
};

ModalComponent.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

export const Modal = Object.assign(ModalComponent, { Header: ModalHeader, Body: ModalBody, Footer: ModalFooter });
