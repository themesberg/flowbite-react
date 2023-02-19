import classNames from 'classnames';
import type { ComponentProps, PropsWithChildren } from 'react';
import React from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite';

export interface FlowbiteAvatarGroupCounterTheme {
  base: string;
}

export interface AvatarGroupCounterProps extends PropsWithChildren<ComponentProps<'a'>> {
  theme?: DeepPartial<FlowbiteAvatarGroupCounterTheme>;
  total?: number;
}

const AvatarGroupCounter: React.FC<AvatarGroupCounterProps> = ({ total, href, className, theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.avatar.groupCounter, customTheme);

  return (
    <a className={classNames(theme.base, className)} href={href}>
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = 'Avatar.GroupCounter';
export default AvatarGroupCounter;
