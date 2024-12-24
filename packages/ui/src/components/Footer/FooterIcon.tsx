"use client";

import type { ComponentProps, FC, PropsWithChildren } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { footerTheme } from "./theme";

export interface FlowbiteFooterIconTheme {
  base: string;
  size: string;
}

export interface FooterIconProps extends PropsWithChildren {
  ariaLabel?: string;
  className?: string;
  href?: string;
  icon: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<FlowbiteFooterIconTheme>;
  unstyled?: Unstyled<FlowbiteFooterIconTheme>;
}

export const FooterIcon: FC<FooterIconProps & ComponentProps<"a"> & ComponentProps<"svg">> = ({
  ariaLabel,
  className,
  href,
  icon: Icon,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([footerTheme.icon, provider.theme?.footer?.icon, customTheme], [unstyled]);

  return (
    <div>
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
};
