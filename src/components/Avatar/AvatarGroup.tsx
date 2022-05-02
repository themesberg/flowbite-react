import React, { PropsWithChildren, ReactNode } from 'react';

export type AvatarGroupProps = PropsWithChildren<{
  children: ReactNode;
}>;

const AvatarGroup: React.FC<AvatarGroupProps> = ({ children }) => {
  return <div className="mb-5 flex -space-x-4">{children}</div>;
};

AvatarGroup.displayName = 'Avatar.Group';
export default AvatarGroup;
