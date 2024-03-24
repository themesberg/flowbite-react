import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";

export interface FlowbiteAvatarGroupCounterTheme {
  base: string;
}

export interface AvatarGroupCounterProps extends ComponentProps<"a"> {
  theme?: DeepPartial<FlowbiteAvatarGroupCounterTheme>;
  total?: number;
}

export const AvatarGroupCounter: FC<AvatarGroupCounterProps> = ({
  className,
  href,
  theme: customTheme = {},
  total,
  ...props
}) => {
  const theme = mergeDeep(getTheme().avatar.groupCounter, customTheme);

  return (
    <a href={href} className={twMerge(theme.base, className)} {...props}>
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = "Avatar.GroupCounter";
