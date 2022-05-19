import { FC, PropsWithChildren, ComponentProps } from 'react';
import classNames from 'classnames';
import { useTimelineContext } from './TimelineContext';

export type TimelineItemProps = PropsWithChildren<ComponentProps<'li'>>;

export const TimelineItem: FC<TimelineItemProps> = ({ children, ...props }) => {
  const { horizontal } = useTimelineContext();
  return (
    <li
      data-testid="timeline-item"
      className={classNames({ 'mb-10 ml-6': !horizontal, 'relative mb-6 sm:mb-0': horizontal })}
      {...props}
    >
      {children}
    </li>
  );
};
