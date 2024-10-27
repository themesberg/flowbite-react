import type { ComponentProps } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial } from "../../types";
import { avatarTheme } from "./theme";

export interface FlowbiteAvatarGroupTheme {
  base: string;
}

export interface AvatarGroupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteAvatarGroupTheme>;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className, theme: customTheme, ...props }) => {
  const theme = resolveTheme([avatarTheme.group, getStore().theme?.avatar?.group, customTheme]);

  return (
    <div data-testid="avatar-group-element" className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};

AvatarGroup.displayName = "Avatar.Group";
