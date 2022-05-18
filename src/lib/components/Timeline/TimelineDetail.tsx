import { FC, PropsWithChildren } from 'react';

export const TimelineDetail: FC<PropsWithChildren<any>> = ({ children }) => {
  return <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{children}</p>;
};
