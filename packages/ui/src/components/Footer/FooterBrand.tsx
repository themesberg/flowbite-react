"use client";

import type { ComponentProps, FC, PropsWithChildren } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { footerTheme } from "./theme";

export interface FooterBrandTheme {
  base: string;
  img: string;
  span: string;
}

export interface FooterBrandProps extends PropsWithChildren, ThemingProps<FooterBrandTheme> {
  alt?: string;
  className?: string;
  href?: string;
  name?: string;
  src: string;
}

export const FooterBrand: FC<FooterBrandProps & ComponentProps<"a"> & ComponentProps<"img">> = ({
  alt,
  className,
  children,
  href,
  name,
  src,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [footerTheme.brand, provider.theme?.footer?.brand, customTheme],
    [get(provider.clearTheme, "footer.brand"), clearTheme],
    [get(provider.applyTheme, "footer.brand"), applyTheme],
  );

  return (
    <div>
      {href ? (
        <a data-testid="flowbite-footer-brand" href={href} className={twMerge(theme.base, className)} {...props}>
          <img alt={alt} src={src} className={theme.img} />
          <span data-testid="flowbite-footer-brand-span" className={theme.span}>
            {name}
          </span>
          {children}
        </a>
      ) : (
        <img
          alt={alt}
          data-testid="flowbite-footer-brand"
          src={src}
          className={twMerge(theme.img, className)}
          {...props}
        />
      )}
    </div>
  );
};

FooterBrand.displayName = "FooterBrand";
