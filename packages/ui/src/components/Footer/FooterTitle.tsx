import type { ComponentProps, ElementType, FC } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import { getStore } from "../../store";
import type { DeepPartial } from "../../types";
import { footerTheme } from "./theme";

export interface FlowbiteFooterTitleTheme {
  base: string;
}

export interface FooterTitleProps extends ComponentProps<"h2"> {
  as?: ElementType;
  theme?: DeepPartial<FlowbiteFooterTitleTheme>;
  title: string;
}

export const FooterTitle: FC<FooterTitleProps> = ({
  as: Component = "h2",
  className,
  theme: customTheme,
  title,
  ...props
}) => {
  const theme = resolveTheme([footerTheme.title, getStore().theme?.footer?.title, customTheme]);

  return (
    <Component data-testid="flowbite-footer-title" className={twMerge(theme.base, className)} {...props}>
      {title}
    </Component>
  );
};
