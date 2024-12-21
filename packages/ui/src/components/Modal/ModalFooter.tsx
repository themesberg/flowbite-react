"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { useModalContext } from "./ModalContext";
import { modalTheme } from "./theme";

export interface FlowbiteModalFooterTheme {
  base: string;
  popup: string;
}

export interface ModalFooterProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteModalFooterTheme>;
  unstyled?: Unstyled<FlowbiteModalFooterTheme>;
}

export const ModalFooter: FC<ModalFooterProps> = ({ children, className, theme: customTheme, unstyled, ...props }) => {
  const { theme: rootTheme, unstyled: rootUnstyled, popup } = useModalContext();

  const theme = resolveTheme(
    [modalTheme.footer, getStore().theme?.modal?.footer, rootTheme?.footer, customTheme],
    [get(rootUnstyled, "footer"), unstyled],
  );

  return (
    <div className={twMerge(theme.base, !popup && theme.popup, className)} {...props}>
      {children}
    </div>
  );
};
