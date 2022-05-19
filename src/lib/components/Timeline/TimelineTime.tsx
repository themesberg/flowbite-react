import { FC, PropsWithChildren, ComponentProps } from 'react';

export type TimelineTimeProps = PropsWithChildren<ComponentProps<'time'>>;

export const TimelineTime: FC<TimelineTimeProps> = ({ children, ...props }) => {
  return (
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" {...props}>
      {children}
    </time>
  );
};
