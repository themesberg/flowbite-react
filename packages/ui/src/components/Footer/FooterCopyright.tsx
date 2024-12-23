import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial } from "../../types";
import { footerTheme } from "./theme";

export interface FlowbiteFooterCopyrightTheme {
  base: string;
  href: string;
  span: string;
}

export interface CopyrightProps extends ComponentProps<"div"> {
  by: string;
  href?: string;
  theme?: DeepPartial<FlowbiteFooterCopyrightTheme>;
  year?: number;
}

export const FooterCopyright: FC<CopyrightProps> = ({ by, className, href, theme: customTheme, year, ...props }) => {
  const theme = resolveTheme([footerTheme.copyright, getTheme()?.footer?.copyright, customTheme]);

  return (
    <div data-testid="flowbite-footer-copyright" className={twMerge(theme.base, className)} {...props}>
      © {year}
      {href ? (
        <a href={href} className={theme.href}>
          {by}
        </a>
      ) : (
        <span data-testid="flowbite-footer-copyright-span" className={theme.span}>
          {by}
        </span>
      )}
    </div>
  );
};
