import classNames from 'classnames';
import type { ComponentProps, FC, MouseEvent, PropsWithChildren } from 'react';
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

  useKeyDown('Escape', () => {
    if (dismissible && onClose) {
      onClose();
    }
  });

  // The modal is not rendered server-side.
  // The modal is not rendered if `show` prop is false.
  if (!show || !windowExists()) {
    return null;
  }

  root ??= document.body;

  // Prevent scrolling of the root element when the modal is shown
  root.style.overflow = show ? 'hidden' : '';

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (dismissible && e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ popup, onClose }}>
      <div
        data-testid="modal"
        onClick={handleClick}
        role="dialog"
        className={classNames(theme.root.base, theme.root.positions[position], theme.root.show.on, className)}
        {...props}
      >
        <div className={classNames(theme.content.base, theme.root.sizes[size])}>
          <div className={theme.content.inner}>{children}</div>
        </div>
      </div>
    </ModalContext.Provider>,
    root,
  );
};

ModalComponent.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

export const Modal = Object.assign(ModalComponent, { Header: ModalHeader, Body: ModalBody, Footer: ModalFooter });
