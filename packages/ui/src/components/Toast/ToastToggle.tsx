"use client";

import type { ComponentProps, FC, MouseEvent } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
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

export const ToastToggle: FC<ToastToggleProps> = ({
  className,
  onClick,
  onDismiss,
  xIcon: XIcon = DefaultXIcon,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const {
    theme: rootTheme,
    resetTheme: rootResetTheme,
    applyTheme: rootApplyTheme,
    duration,
    isClosed,
    isRemoved,
    setIsClosed,
    setIsRemoved,
  } = useToastContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [toastTheme.toggle, provider.theme?.toast?.toggle, rootTheme?.toggle, customTheme],
    [get(provider.resetTheme, "toast.toggle"), get(rootResetTheme, "toggle"), resetTheme],
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
      aria-label="Close"
      onClick={handleClick}
      type="button"
      className={twMerge(theme.base, className)}
      {...props}
    >
      <XIcon aria-hidden className={theme.icon} />
    </button>
  );
};

ToastToggle.displayName = "ToastToggle";
