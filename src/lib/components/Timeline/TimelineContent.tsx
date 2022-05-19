import { FC, PropsWithChildren, ComponentProps } from 'react';
import classNames from 'classnames';
import { useTimelineContext } from './TimelineContext';

export type TimelineContentProps = PropsWithChildren<ComponentProps<'div'>>;

export const TimelineContent: FC<TimelineContentProps> = ({ children, ...props }) => {
  const { horizontal } = useTimelineContext();
  return (
    <div data-testid="timeline-content" className={classNames({ 'mt-3 sm:pr-8': horizontal })} {...props}>
      {children}
    </div>
  );
};
