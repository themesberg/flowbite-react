"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { useModalContext } from "./ModalContext";
import { modalTheme } from "./theme";

export interface FlowbiteModalBodyTheme {
  base: string;
  popup: string;
}

export interface ModalBodyProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteModalBodyTheme>;
  unstyled?: Unstyled<FlowbiteModalBodyTheme>;
}

export const ModalBody: FC<ModalBodyProps> = ({ children, className, theme: customTheme, unstyled, ...props }) => {
  const { theme: rootTheme, unstyled: rootUnstyled, popup } = useModalContext();

  const theme = resolveTheme(
    [modalTheme.body, getTheme()?.modal?.body, rootTheme?.body, customTheme],
    [get(rootUnstyled, "body"), unstyled],
  );

  return (
    <div className={twMerge(theme.base, popup && theme.popup, className)} {...props}>
      {children}
    </div>
  );
};
