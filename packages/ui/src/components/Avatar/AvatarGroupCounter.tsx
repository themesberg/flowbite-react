import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { avatarTheme } from "./theme";

export interface FlowbiteAvatarGroupCounterTheme {
  base: string;
}

export interface AvatarGroupCounterProps extends ComponentProps<"a"> {
  total?: number;
  theme?: DeepPartial<FlowbiteAvatarGroupCounterTheme>;
  unstyled?: Unstyled<FlowbiteAvatarGroupCounterTheme>;
}

export const AvatarGroupCounter: FC<AvatarGroupCounterProps> = ({
  className,
  href,
  total,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const theme = resolveTheme([avatarTheme.groupCounter, getTheme()?.avatar?.groupCounter, customTheme], [unstyled]);

  return (
    <a href={href} className={twMerge(theme.base, className)} {...props}>
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = "Avatar.GroupCounter";
