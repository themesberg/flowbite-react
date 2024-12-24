"use client";

import type { ComponentProps, ElementType, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { footerTheme } from "./theme";

export interface FlowbiteFooterTitleTheme {
  base: string;
}

export interface FooterTitleProps extends ComponentProps<"h2"> {
  as?: ElementType;
  theme?: DeepPartial<FlowbiteFooterTitleTheme>;
  unstyled?: Unstyled<FlowbiteFooterTitleTheme>;
  title: string;
}

export const FooterTitle: FC<FooterTitleProps> = ({
  as: Component = "h2",
  className,
  theme: customTheme,
  unstyled,
  title,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([footerTheme.title, provider.theme?.footer?.title, customTheme], [unstyled]);

  return (
    <Component data-testid="flowbite-footer-title" className={twMerge(theme.base, className)} {...props}>
      {title}
    </Component>
  );
};
