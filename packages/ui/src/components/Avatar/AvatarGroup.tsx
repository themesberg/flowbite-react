import type { ComponentProps } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { avatarTheme } from "./theme";

export interface FlowbiteAvatarGroupTheme {
  base: string;
}

export interface AvatarGroupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteAvatarGroupTheme>;
  unstyled?: Unstyled<FlowbiteAvatarGroupTheme>;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const theme = resolveTheme([avatarTheme.group, getTheme()?.avatar?.group, customTheme], [unstyled]);

  return (
    <div data-testid="avatar-group-element" className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};

AvatarGroup.displayName = "Avatar.Group";
