"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
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

export const ModalBody: FC<ModalBodyProps> = ({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme, popup } = useModalContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [modalTheme.body, provider.theme?.modal?.body, rootTheme?.body, customTheme],
    [get(provider.clearTheme, "modal.body"), get(rootClearTheme, "body"), clearTheme],
    [get(provider.applyTheme, "modal.body"), get(rootApplyTheme, "body"), applyTheme],
  );

  return (
    <div className={twMerge(theme.base, popup && theme.popup, className)} {...props}>
      {children}
    </div>
  );
};

ModalBody.displayName = "ModalBody";
