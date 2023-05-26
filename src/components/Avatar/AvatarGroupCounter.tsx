import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '~/src';
import { useTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';

export interface FlowbiteAvatarGroupCounterTheme {
  base: string;
}

export interface AvatarGroupCounterProps extends PropsWithChildren<ComponentProps<'a'>> {
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
  const theme = mergeDeep(useTheme().theme.avatar.groupCounter, customTheme);

  return (
    <a href={href} className={classNames(theme.base, className)} {...props}>
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = 'Avatar.GroupCounter';
