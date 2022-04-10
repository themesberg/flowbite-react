import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type AvatarProps = PropsWithChildren<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: boolean;
  bordered?: boolean;
  img: string;
}>;

const sizeClasses: Record<AvatarProps['size'] & string, string> = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-20 h-20',
  xl: 'w-36 h-36',
};

export const Avatar: React.FC<AvatarProps> = ({ size = 'md', rounded = false, bordered = false, img = null }) => {
  return (
    <img
      className={classNames(sizeClasses[size], {
        rounded: !rounded,
        'rounded-full': rounded,
        'rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500': bordered,
      })}
      src={img}
      alt="Rounded avatar"
    />
  );
};
