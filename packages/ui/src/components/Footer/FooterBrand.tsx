"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { footerTheme } from "./theme";

export interface FooterBrandTheme {
  base: string;
  img: string;
  span: string;
}

type GenericLinkImageProps = ComponentProps<"a"> & ComponentProps<"img">;

export interface FooterBrandProps extends GenericLinkImageProps, ThemingProps<FooterBrandTheme> {
  name?: string;
  src: string;
}

export const FooterBrand = forwardRef<HTMLDivElement, FooterBrandProps>(
  ({ alt, className, children, href, name, src, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [footerTheme.brand, provider.theme?.footer?.brand, customTheme],
      [get(provider.clearTheme, "footer.brand"), clearTheme],
      [get(provider.applyTheme, "footer.brand"), applyTheme],
    );

    return (
      <div ref={ref}>
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
  },
);

FooterBrand.displayName = "FooterBrand";
