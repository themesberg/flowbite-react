import type { ComponentProps, PropsWithChildren } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteAvatarGroupTheme {
  base: string;
}

export interface AvatarGroupProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteAvatarGroupTheme>;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().avatar.group, customTheme);

  return (
    <div data-testid="avatar-group-element" className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};

AvatarGroup.displayName = 'Avatar.Group';
