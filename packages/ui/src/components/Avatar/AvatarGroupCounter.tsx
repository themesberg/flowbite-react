"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { avatarTheme } from "./theme";

export interface FlowbiteAvatarGroupCounterTheme {
  base: string;
}

export interface AvatarGroupCounterProps extends ComponentProps<"a"> {
  total?: number;
  theme?: DeepPartial<FlowbiteAvatarGroupCounterTheme>;
  resetTheme?: ResetTheme<FlowbiteAvatarGroupCounterTheme>;
}

export const AvatarGroupCounter: FC<AvatarGroupCounterProps> = ({
  className,
  href,
  total,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [avatarTheme.groupCounter, provider.theme?.avatar?.groupCounter, customTheme],
    [resetTheme],
  );

  return (
    <a href={href} className={twMerge(theme.base, className)} {...props}>
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = "Avatar.GroupCounter";
