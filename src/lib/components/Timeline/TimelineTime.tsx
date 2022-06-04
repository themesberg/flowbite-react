import type { FC, PropsWithChildren, ComponentProps } from 'react';
import classNames from 'classnames';

export type TimelineTimeProps = PropsWithChildren<
  ComponentProps<'time'> & {
    className?: string;
  }
>;

export const TimelineTime: FC<TimelineTimeProps> = ({ children, className, ...props }) => {
  return (
    <time
      className={classNames('mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500', className)}
      {...props}
    >
      {children}
    </time>
  );
};
