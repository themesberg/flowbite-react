"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
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

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme, popup } = useModalContext();

    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [modalTheme.footer, provider.theme?.modal?.footer, rootTheme?.footer, customTheme],
      [get(provider.clearTheme, "modal.footer"), get(rootClearTheme, "footer"), clearTheme],
      [get(provider.applyTheme, "modal.footer"), get(rootApplyTheme, "footer"), applyTheme],
    );

    return (
      <div ref={ref} className={twMerge(theme.base, !popup && theme.popup, className)} {...props}>
        {children}
      </div>
    );
  },
);

ModalFooter.displayName = "ModalFooter";
