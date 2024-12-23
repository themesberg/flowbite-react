import type { ComponentProps, FC, PropsWithChildren } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial } from "../../types";
import { footerTheme } from "./theme";

export interface FlowbiteFooterBrandTheme {
  base: string;
  img: string;
  span: string;
}

export interface FooterBrandProps extends PropsWithChildren {
  alt?: string;
  className?: string;
  href?: string;
  name?: string;
  src: string;
  theme?: DeepPartial<FlowbiteFooterBrandTheme>;
}

export const FooterBrand: FC<FooterBrandProps & ComponentProps<"a"> & ComponentProps<"img">> = ({
  alt,
  className,
  children,
  href,
  name,
  src,
  theme: customTheme,
  ...props
}) => {
  const theme = resolveTheme([footerTheme.brand, getTheme()?.footer?.brand, customTheme]);

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
