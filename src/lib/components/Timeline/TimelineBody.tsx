import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

export type TimelineBodyProps = PropsWithChildren<
  ComponentProps<'p'> & {
    className?: string;
  }
>;

export const TimelineBody: FC<TimelineBodyProps> = ({ children, className, ...props }) => {
  return (
    <p className={classNames('mb-4 text-base font-normal text-gray-500 dark:text-gray-400', className)} {...props}>
      {children}
    </p>
  );
};
