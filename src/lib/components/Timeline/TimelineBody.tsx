import type { FC, PropsWithChildren, ComponentProps } from 'react';
import classNames from 'classnames';

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
