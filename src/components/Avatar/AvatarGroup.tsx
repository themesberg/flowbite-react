import classNames from 'classnames';
import type { ComponentProps, PropsWithChildren } from 'react';
import React from 'react';
import type { DeepPartial } from '~/src';
import { useTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';

export interface FlowbiteAvatarGroupTheme {
  base: string;
}

export interface AvatarGroupProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteAvatarGroupTheme>;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.avatar.group, customTheme);

  return (
    <div data-testid="avatar-group-element" className={classNames(theme.base, className)} {...props}>
      {children}
    </div>
  );
};

AvatarGroup.displayName = 'Avatar.Group';
