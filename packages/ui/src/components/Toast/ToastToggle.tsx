"use client";

import type { ComponentProps, FC, MouseEvent } from "react";
import { HiX } from "react-icons/hi";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { toastTheme } from "./theme";
import { useToastContext } from "./ToastContext";

export interface FlowbiteToastToggleTheme {
  base: string;
  icon: string;
}

export interface ToastToggleProps extends ComponentProps<"button"> {
  theme?: DeepPartial<FlowbiteToastToggleTheme>;
  resetTheme?: ResetTheme<FlowbiteToastToggleTheme>;
  xIcon?: FC<ComponentProps<"svg">>;
  onDismiss?: () => void;
}

export const ToastToggle: FC<ToastToggleProps> = ({
  className,
  onClick,
  theme: customTheme,
  resetTheme,
  xIcon: XIcon = HiX,
  onDismiss,
  ...props
}) => {
  const {
    theme: rootTheme,
    resetTheme: rootResetTheme,
    duration,
    isClosed,
    isRemoved,
    setIsClosed,
    setIsRemoved,
  } = useToastContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [toastTheme.toggle, provider.theme?.toast?.toggle, rootTheme?.toggle, customTheme],
    [get(rootResetTheme, "toggle"), resetTheme],
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
