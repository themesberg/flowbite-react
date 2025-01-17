"use client";

import { forwardRef, type ComponentProps, type FC } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { footerTheme } from "./theme";

export interface FooterIconTheme {
  base: string;
  size: string;
}

type GenericLinkSvgProps = ComponentProps<"a"> & ComponentProps<"svg">;

export interface FooterIconProps extends GenericLinkSvgProps, ThemingProps<FooterIconTheme> {
  ariaLabel?: string;
  icon: FC<ComponentProps<"svg">>;
}

export const FooterIcon = forwardRef<HTMLDivElement, FooterIconProps>(
  ({ ariaLabel, className, href, icon: Icon, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [footerTheme.icon, provider.theme?.footer?.icon, customTheme],
      [get(provider.clearTheme, "footer.icon"), clearTheme],
      [get(provider.applyTheme, "footer.icon"), applyTheme],
    );

    return (
      <div ref={ref}>
        {href ? (
          <a
            aria-label={ariaLabel}
            data-testid="flowbite-footer-icon"
            href={href}
            className={twMerge(theme.base, className)}
            {...props}
          >
            <Icon className={theme.size} />
          </a>
        ) : (
          <Icon data-testid="flowbite-footer-icon" className={theme.size} {...props} />
        )}
      </div>
    );
  },
);

FooterIcon.displayName = "FooterIcon";
