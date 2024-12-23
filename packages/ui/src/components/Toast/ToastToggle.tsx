"use client";

import type { ComponentProps, FC, MouseEvent } from "react";
import { HiX } from "react-icons/hi";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { toastTheme } from "./theme";
import { useToastContext } from "./ToastContext";

export interface FlowbiteToastToggleTheme {
  base: string;
  icon: string;
}

export interface ToastToggleProps extends ComponentProps<"button"> {
  theme?: DeepPartial<FlowbiteToastToggleTheme>;
  unstyled?: Unstyled<FlowbiteToastToggleTheme>;
  xIcon?: FC<ComponentProps<"svg">>;
  onDismiss?: () => void;
}

export const ToastToggle: FC<ToastToggleProps> = ({
  className,
  onClick,
  theme: customTheme,
  unstyled,
  xIcon: XIcon = HiX,
  onDismiss,
  ...props
}) => {
  const {
    theme: rootTheme,
    unstyled: rootUnstyled,
    duration,
    isClosed,
    isRemoved,
    setIsClosed,
    setIsRemoved,
  } = useToastContext();

  const theme = resolveTheme(
    [toastTheme.toggle, getTheme()?.toast?.toggle, rootTheme?.toggle, customTheme],
    [get(rootUnstyled, "toggle"), unstyled],
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
