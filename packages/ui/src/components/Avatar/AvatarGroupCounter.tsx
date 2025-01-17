"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { avatarTheme } from "./theme";

export interface AvatarGroupCounterTheme {
  base: string;
}

export interface AvatarGroupCounterProps extends ComponentProps<"a">, ThemingProps<AvatarGroupCounterTheme> {
  total?: number;
}

export const AvatarGroupCounter = forwardRef<HTMLAnchorElement, AvatarGroupCounterProps>(
  ({ className, href, total, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [avatarTheme.groupCounter, provider.theme?.avatar?.groupCounter, customTheme],
      [get(provider.clearTheme, "avatar.groupCounter"), clearTheme],
      [get(provider.applyTheme, "avatar.groupCounter"), applyTheme],
    );

    return (
      <a ref={ref} href={href} className={twMerge(theme.base, className)} {...props}>
        +{total}
      </a>
    );
  },
);

AvatarGroupCounter.displayName = "AvatarGroupCounter";
