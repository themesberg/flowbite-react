import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import React from 'react';

export type AvatarGroupdCounterProps = PropsWithChildren<{
  total?: number;
  href: string;
  className?: string;
}>;

const AvatarGroupCounter: React.FC<AvatarGroupdCounterProps> = ({ total, href, className }) => {
  return (
    <a
      className={classNames(
        'relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500 ',
        className,
      )}
      href={href}
    >
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = 'Avatar.GroupCounter';
export default AvatarGroupCounter;
