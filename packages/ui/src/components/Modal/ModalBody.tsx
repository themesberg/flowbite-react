"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { useModalContext } from "./ModalContext";
import { modalTheme } from "./theme";

export interface FlowbiteModalBodyTheme {
  base: string;
  popup: string;
}

export interface ModalBodyProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteModalBodyTheme>;
  resetTheme?: ResetTheme<FlowbiteModalBodyTheme>;
}

export const ModalBody: FC<ModalBodyProps> = ({ children, className, theme: customTheme, resetTheme, ...props }) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, popup } = useModalContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [modalTheme.body, provider.theme?.modal?.body, rootTheme?.body, customTheme],
    [get(rootResetTheme, "body"), resetTheme],
  );

  return (
    <div className={twMerge(theme.base, popup && theme.popup, className)} {...props}>
      {children}
    </div>
  );
};
