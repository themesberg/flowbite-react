"use client";

import { forwardRef, type ComponentProps, type FC, type MouseEvent } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { XIcon as DefaultXIcon } from "../../icons";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { toastTheme } from "./theme";
import { useToastContext } from "./ToastContext";

export interface ToastToggleTheme {
  base: string;
  icon: string;
}

export interface ToastToggleProps extends ComponentProps<"button">, ThemingProps<ToastToggleTheme> {
  xIcon?: FC<ComponentProps<"svg">>;
  onDismiss?: () => void;
}

export const ToastToggle = forwardRef<HTMLButtonElement, ToastToggleProps>(
  (
    {
      className,
      onClick,
      onDismiss,
      xIcon: XIcon = DefaultXIcon,
      theme: customTheme,
      clearTheme,
      applyTheme,
      ...props
    },
    ref,
  ) => {
    const {
      theme: rootTheme,
      clearTheme: rootClearTheme,
      applyTheme: rootApplyTheme,
      duration,
      isClosed,
      isRemoved,
      setIsClosed,
      setIsRemoved,
    } = useToastContext();

    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [toastTheme.toggle, provider.theme?.toast?.toggle, rootTheme?.toggle, customTheme],
      [get(provider.clearTheme, "toast.toggle"), get(rootClearTheme, "toggle"), clearTheme],
      [get(provider.applyTheme, "toast.toggle"), get(rootApplyTheme, "toggle"), applyTheme],
    );

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
      if (onClick) onClick(e);

      if (onDismiss) {
        onDismiss();
        return;
      }

      setIsClosed(!isClosed);
      setTimeout(() => setIsRemoved(!isRemoved), duration);
    }

    return (
      <button
        ref={ref}
        aria-label="Close"
        onClick={handleClick}
        type="button"
        className={twMerge(theme.base, className)}
        {...props}
      >
        <XIcon aria-hidden className={theme.icon} />
      </button>
    );
  },
);
ToastToggle.displayName = "ToastToggle";
