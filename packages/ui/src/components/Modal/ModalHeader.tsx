"use client";

import { useId, useLayoutEffect, type ComponentProps, type ElementType, type FC } from "react";
import { HiOutlineX } from "react-icons/hi";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { useModalContext } from "./ModalContext";
import { modalTheme } from "./theme";

export interface FlowbiteModalHeaderTheme {
  base: string;
  popup: string;
  title: string;
  close: {
    base: string;
    icon: string;
  };
}

export interface ModalHeaderProps extends ComponentProps<"div"> {
  as?: ElementType;
  theme?: DeepPartial<FlowbiteModalHeaderTheme>;
  unstyled?: Unstyled<FlowbiteModalHeaderTheme>;
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  as: Component = "h3",
  children,
  className,
  theme: customTheme,
  unstyled,
  id,
  ...props
}) => {
  const innerHeaderId = useId();
  const headerId = id || innerHeaderId;

  const { theme: rootTheme, unstyled: rootUnstyled, popup, onClose, setHeaderId } = useModalContext();

  const theme = resolveTheme(
    [modalTheme.header, getStore().theme?.modal?.header, rootTheme?.header, customTheme],
    [get(rootUnstyled, "header"), unstyled],
  );

  useLayoutEffect(() => {
    setHeaderId(headerId);

    return () => setHeaderId(undefined);
  }, [headerId, setHeaderId]);

  return (
    <div className={twMerge(theme.base, popup && theme.popup, className)} {...props}>
      <Component id={headerId} className={theme.title}>
        {children}
      </Component>
      <button aria-label="Close" className={theme.close.base} type="button" onClick={onClose}>
        <HiOutlineX aria-hidden className={theme.close.icon} />
      </button>
    </div>
  );
};
