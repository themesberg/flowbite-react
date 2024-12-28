"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { avatarTheme } from "./theme";

export interface AvatarGroupTheme {
  base: string;
}

export interface AvatarGroupProps extends ComponentProps<"div">, ThemingProps<AvatarGroupTheme> {}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [avatarTheme.group, provider.theme?.avatar?.group, customTheme],
    [get(provider.resetTheme, "avatar"), resetTheme],
    [get(provider.applyTheme, "avatar"), applyTheme],
  );

  return (
    <div data-testid="avatar-group-element" className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};

AvatarGroup.displayName = "Avatar.Group";
