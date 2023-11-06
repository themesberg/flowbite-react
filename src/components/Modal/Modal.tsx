'use client';

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import type { MutableRefObject } from 'react';
import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean, FlowbitePositions, FlowbiteSizes } from '../Flowbite';
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

export interface ModalProps extends ComponentPropsWithoutRef<'div'> {
  onClose?: () => void;
  position?: keyof ModalPositions;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: keyof ModalSizes;
  dismissible?: boolean;
  theme?: DeepPartial<FlowbiteModalTheme>;
  initialFocus?: number | MutableRefObject<HTMLElement | null>;
}

const ModalComponent = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
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
      initialFocus,
      ...props
    },
    theirRef,
  ) => {
    const [headerId, setHeaderId] = useState<string | undefined>(undefined);
    const theme = mergeDeep(getTheme().modal, customTheme);

    const { context } = useFloating({
      open: show,
      onOpenChange: () => onClose && onClose(),
    });

    const ref = useMergeRefs([context.refs.setFloating, theirRef]);

    const click = useClick(context);
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown', enabled: dismissible });
    const role = useRole(context);

    const { getFloatingProps } = useInteractions([click, dismiss, role]);

    if (!show) {
      return null;
    }

    return (
      <ModalContext.Provider value={{ theme, popup, onClose, setHeaderId }}>
        <FloatingPortal root={root}>
          <FloatingOverlay
            lockScroll
            data-testid="modal-overlay"
            className={twMerge(
              theme.root.base,
              theme.root.positions[position],
              show ? theme.root.show.on : theme.root.show.off,
              className,
            )}
            {...props}
          >
            <FloatingFocusManager context={context} initialFocus={initialFocus}>
              <div
                ref={ref}
                {...getFloatingProps(props)}
                aria-labelledby={headerId}
                className={twMerge(theme.content.base, theme.root.sizes[size])}
              >
                <div className={theme.content.inner}>{children}</div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      </ModalContext.Provider>
    );
  },
);

ModalComponent.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
