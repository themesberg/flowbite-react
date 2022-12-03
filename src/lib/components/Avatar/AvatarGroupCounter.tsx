import classNames from 'classnames';
import type { ComponentProps, PropsWithChildren } from 'react';
import React from 'react';
import { useTheme } from '../Flowbite';

export interface FlowbiteAvatarGroupCounterTheme {
  base: string;
}

export interface AvatarGroupdCounterProps extends PropsWithChildren<ComponentProps<'a'>> {
  total?: number;
}

const AvatarGroupCounter: React.FC<AvatarGroupdCounterProps> = ({ total, href, className }) => {
  const theme = useTheme().theme.avatarGroupCounter;
  return (
    <a className={classNames(theme.base, className)} href={href}>
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = 'Avatar.GroupCounter';
export default AvatarGroupCounter;
