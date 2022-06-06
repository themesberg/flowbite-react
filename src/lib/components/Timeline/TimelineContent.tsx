import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTimelineContext } from './TimelineContext';

export type TimelineContentProps = PropsWithChildren<
  ComponentProps<'div'> & {
    className?: string;
  }
>;

export const TimelineContent: FC<TimelineContentProps> = ({ children, className, ...props }) => {
  const { horizontal } = useTimelineContext();
  return (
    <div data-testid="timeline-content" className={classNames({ 'mt-3 sm:pr-8': horizontal }, className)} {...props}>
      {children}
    </div>
  );
};
