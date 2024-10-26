"use client";

import type { ComponentProps, FC, MouseEvent } from "react";
import { HiX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import type { DeepPartial } from "../../types";
import { useToastContext } from "./ToastContext";

export interface FlowbiteToastToggleTheme {
  base: string;
  icon: string;
}

export interface ToastToggleProps extends ComponentProps<"button"> {
  theme?: DeepPartial<FlowbiteToastToggleTheme>;
  xIcon?: FC<ComponentProps<"svg">>;
  onDismiss?: () => void;
}

export const ToastToggle: FC<ToastToggleProps> = ({
  className,
  onClick,
  theme: customTheme,
  xIcon: XIcon = HiX,
  onDismiss,
  ...props
}) => {
  const { theme: rootTheme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext();

  const theme = resolveTheme([rootTheme.toggle, customTheme], { shouldPrefix: false });

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
