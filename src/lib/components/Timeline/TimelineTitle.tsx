import { FC, PropsWithChildren } from 'react';

export const TimelineTitle: FC<PropsWithChildren<any>> = ({ children }) => {
  return <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{children}</h3>;
};
