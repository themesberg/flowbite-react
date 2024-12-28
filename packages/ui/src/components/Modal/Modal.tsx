"use client";

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
} from "@floating-ui/react";
import type { MutableRefObject } from "react";
import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import type { FlowbiteBoolean, FlowbitePositions, FlowbiteSizes } from "../Flowbite/FlowbiteTheme";
import type { ModalBodyTheme } from "./ModalBody";
import { ModalBody } from "./ModalBody";
import { ModalContext } from "./ModalContext";
import type { ModalFooterTheme } from "./ModalFooter";
import { ModalFooter } from "./ModalFooter";
import type { ModalHeaderTheme } from "./ModalHeader";
import { ModalHeader } from "./ModalHeader";
import { modalTheme } from "./theme";

export interface ModalTheme {
  root: ModalRootTheme;
  content: ModalContentTheme;
  body: ModalBodyTheme;
  header: ModalHeaderTheme;
  footer: ModalFooterTheme;
}

export interface ModalRootTheme {
  base: string;
  show: FlowbiteBoolean;
  sizes: ModalSizes;
  positions: ModalPositions;
}

export interface ModalContentTheme {
  base: string;
  inner: string;
}

export interface ModalPositions extends FlowbitePositions {
  [key: string]: string;
}

export interface ModalSizes extends Omit<FlowbiteSizes, "xs"> {
  [key: string]: string;
}

export interface ModalProps extends ComponentPropsWithoutRef<"div">, ThemingProps<ModalTheme> {
  onClose?: () => void;
  position?: DynamicStringEnumKeysOf<ModalPositions>;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: DynamicStringEnumKeysOf<ModalSizes>;
  dismissible?: boolean;
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
      position = "center",
      root,
      show,
      size = "2xl",
      initialFocus,
      theme: customTheme,
      resetTheme,
      applyTheme,
      ...props
    },
    theirRef,
  ) => {
    const [headerId, setHeaderId] = useState<string | undefined>(undefined);
    const provider = useThemeProvider();
    const theme = resolveTheme(
      [modalTheme, provider.theme?.modal, customTheme],
      [get(provider.resetTheme, "modal"), resetTheme],
      [get(provider.applyTheme, "modal"), applyTheme],
    );

    const { context } = useFloating({
      open: show,
      onOpenChange: () => onClose && onClose(),
    });

    const ref = useMergeRefs([context.refs.setFloating, theirRef]);

    const click = useClick(context);
    const dismiss = useDismiss(context, { outsidePressEvent: "mousedown", enabled: dismissible });
    const role = useRole(context);

    const { getFloatingProps } = useInteractions([click, dismiss, role]);

    if (!show) {
      return null;
    }

    return (
      <ModalContext.Provider value={{ theme: customTheme, resetTheme, applyTheme, popup, onClose, setHeaderId }}>
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

ModalComponent.displayName = "Modal";
ModalHeader.displayName = "Modal.Header";
ModalBody.displayName = "Modal.Body";
ModalFooter.displayName = "Modal.Footer";

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
