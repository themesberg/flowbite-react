import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalContext } from './ModalContext';
import windowExists from '../../helpers/window-exists';
import { useTheme } from '../Flowbite/ThemeContext';
import { excludeClassName } from '../../helpers/exclude';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
export type ModalPlacement = `${'top' | 'bottom'}-${'left' | 'center' | 'right'}` | `center${'' | '-left' | '-right'}`;

export interface ModalProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  onClose?: () => void;
  placement?: ModalPlacement;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: ModalSize;
}

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
  ...props
}): JSX.Element | null => {
  const [container] = useState<HTMLDivElement | undefined>(windowExists() ? document.createElement('div') : undefined);
  const theme = useTheme().theme.modal;
  const theirProps = excludeClassName(props);

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
            className={classNames(theme.base, placementClasses[placement], {
              [theme.visible]: show,
              [theme.hidden]: !show,
            })}
            data-testid="modal"
            {...theirProps}
          >
            <div className={classNames(theme.content.base, sizeClasses[size])}>
              <div className={theme.content.inner}>{children}</div>
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
