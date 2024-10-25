import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import { getStore } from "../../store";
import type { DeepPartial } from "../../types";
import { footerTheme } from "./theme";

export interface FlowbiteFooterDividerTheme {
  base: string;
}

export interface FooterDividerProps extends ComponentProps<"hr"> {
  theme?: DeepPartial<FlowbiteFooterDividerTheme>;
}

export const FooterDivider: FC<FooterDividerProps> = ({ className, theme: customTheme, ...props }) => {
  const theme = resolveTheme([footerTheme.divider, getStore().theme?.footer?.divider, customTheme]);

  return <hr data-testid="footer-divider" className={twMerge(theme.base, className)} {...props} />;
};
