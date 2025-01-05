"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { footerTheme } from "./theme";

export interface FooterCopyrightTheme {
  base: string;
  href: string;
  span: string;
}

export interface CopyrightProps extends ComponentProps<"div">, ThemingProps<FooterCopyrightTheme> {
  by: string;
  href?: string;
  year?: number;
}

export const FooterCopyright: FC<CopyrightProps> = ({
  by,
  className,
  href,
  year,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [footerTheme.copyright, provider.theme?.footer?.copyright, customTheme],
    [get(provider.clearTheme, "footer.copyright"), clearTheme],
    [get(provider.applyTheme, "footer.copyright"), applyTheme],
  );

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

FooterCopyright.displayName = "FooterCopyright";
