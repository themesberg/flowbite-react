import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import React from 'react';

export type AvatarGroupProps = PropsWithChildren<{
  className?: string;
}>;

const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className }) => {
  return (
    <div data-testid="avatar-group-element" className={classNames('flex mb-5 -space-x-4', className)}>
      {children}
    </div>
  );
};

AvatarGroup.displayName = 'Avatar.Group';
export default AvatarGroup;
