"use client";

import type { ComponentProps } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { avatarTheme } from "./theme";

export interface FlowbiteAvatarGroupTheme {
  base: string;
}

export interface AvatarGroupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteAvatarGroupTheme>;
  resetTheme?: ResetTheme<FlowbiteAvatarGroupTheme>;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([avatarTheme.group, provider.theme?.avatar?.group, customTheme], [resetTheme]);

  return (
    <div data-testid="avatar-group-element" className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};

AvatarGroup.displayName = "Avatar.Group";
