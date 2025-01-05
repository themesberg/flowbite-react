"use client";

import { useId, useLayoutEffect, type ComponentProps, type ElementType, type FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { OutlineXIcon } from "../../icons";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useModalContext } from "./ModalContext";
import { modalTheme } from "./theme";

export interface ModalHeaderTheme {
  base: string;
  popup: string;
  title: string;
  close: {
    base: string;
    icon: string;
  };
}

export interface ModalHeaderProps extends ComponentProps<"div">, ThemingProps<ModalHeaderTheme> {
  as?: ElementType;
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  as: Component = "h3",
  children,
  className,
  id,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const innerHeaderId = useId();
  const headerId = id || innerHeaderId;

  const {
    theme: rootTheme,
    clearTheme: rootClearTheme,
    applyTheme: rootApplyTheme,
    popup,
    onClose,
    setHeaderId,
  } = useModalContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [modalTheme.header, provider.theme?.modal?.header, rootTheme?.header, customTheme],
    [get(provider.clearTheme, "modal.header"), get(rootClearTheme, "header"), clearTheme],
    [get(provider.applyTheme, "modal.header"), get(rootApplyTheme, "header"), applyTheme],
  );

  useLayoutEffect(() => {
    setHeaderId(headerId);

    return () => setHeaderId(undefined);
  }, [headerId, setHeaderId]);

  return (
    <div className={twMerge(theme.base, popup && theme.popup, className)} {...props}>
      <Component id={headerId} className={theme.title}>
        {children}
      </Component>
      <button aria-label="Close" className={theme.close.base} type="button" onClick={onClose}>
        <OutlineXIcon aria-hidden className={theme.close.icon} />
      </button>
    </div>
  );
};

ModalHeader.displayName = "ModalHeader";
