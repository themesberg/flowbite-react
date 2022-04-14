import React, { PropsWithChildren, ReactNode } from 'react';
import { AvatarGroupCounter } from './AvatarGroupCounter';

export type AvatarGroupProps = PropsWithChildren<{
  children: ReactNode;
}>;

const AvatarGroupComponent: React.FC<AvatarGroupProps> = ({ children }) => {
  return <div className="mb-5 flex -space-x-4">{children}</div>;
};

export const AvatarGroup = Object.assign(AvatarGroupComponent, {
  Counter: AvatarGroupCounter,
});
