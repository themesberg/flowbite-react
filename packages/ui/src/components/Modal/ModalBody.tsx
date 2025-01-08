"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useModalContext } from "./ModalContext";
import { modalTheme } from "./theme";

export interface ModalBodyTheme {
  base: string;
  popup: string;
}

export interface ModalBodyProps extends ComponentProps<"div">, ThemingProps<ModalBodyTheme> {}

export function ModalBody({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: ModalBodyProps) {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme, popup } = useModalContext();

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [modalTheme.body, provider.theme?.modal?.body, rootTheme?.body, customTheme],
    [get(provider.clearTheme, "modal.body"), get(rootClearTheme, "body"), clearTheme],
    [get(provider.applyTheme, "modal.body"), get(rootApplyTheme, "body"), applyTheme],
  );

  return (
    <div className={twMerge(theme.base, popup && theme.popup, className)} {...props}>
      {children}
    </div>
  );
}

ModalBody.displayName = "ModalBody";
