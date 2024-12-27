"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useModalContext } from "./ModalContext";
import { modalTheme } from "./theme";

export interface ModalFooterTheme {
  base: string;
  popup: string;
}

export interface ModalFooterProps extends ComponentProps<"div">, ThemingProps<ModalFooterTheme> {}

export const ModalFooter: FC<ModalFooterProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, popup } = useModalContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [modalTheme.footer, provider.theme?.modal?.footer, rootTheme?.footer, customTheme],
    [get(rootResetTheme, "footer"), resetTheme],
  );

  return (
    <div className={twMerge(theme.base, !popup && theme.popup, className)} {...props}>
      {children}
    </div>
  );
};
