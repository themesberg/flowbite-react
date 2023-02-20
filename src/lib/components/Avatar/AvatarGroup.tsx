import classNames from 'classnames';
import type { ComponentProps, PropsWithChildren } from 'react';
import React from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite';

export interface FlowbiteAvatarGroupTheme {
  base: string;
}

export interface AvatarGroupProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteAvatarGroupTheme>;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.avatar.group, customTheme);

  return (
    <div data-testid="avatar-group-element" className={classNames(theme.base, className)} {...props}>
      {children}
    </div>
  );
};

AvatarGroup.displayName = 'Avatar.Group';
export default AvatarGroup;
