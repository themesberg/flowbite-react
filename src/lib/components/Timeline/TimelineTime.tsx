import { FC, PropsWithChildren } from 'react';

export const TimelineTime: FC<PropsWithChildren<any>> = ({ children }) => {
  return <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{children}</time>;
};
