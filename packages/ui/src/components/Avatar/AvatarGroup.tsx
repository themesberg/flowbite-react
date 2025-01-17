"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { avatarTheme } from "./theme";

export interface AvatarGroupTheme {
  base: string;
}

export interface AvatarGroupProps extends ComponentProps<"div">, ThemingProps<AvatarGroupTheme> {}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [avatarTheme.group, provider.theme?.avatar?.group, customTheme],
      [get(provider.clearTheme, "avatar"), clearTheme],
      [get(provider.applyTheme, "avatar"), applyTheme],
    );

    return (
      <div ref={ref} data-testid="avatar-group-element" className={twMerge(theme.base, className)} {...props}>
        {children}
      </div>
    );
  },
);

AvatarGroup.displayName = "AvatarGroup";
