import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';
import { useTimelineContext } from './TimelineContext';

export type TimelineItemProps = PropsWithChildren<
  ComponentProps<'li'> & {
    className?: string;
  }
>;

export const TimelineItem: FC<TimelineItemProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.timeline.item;
  const { horizontal } = useTimelineContext();

  return (
    <li
      data-testid="timeline-item"
      className={classNames(horizontal && theme.base.horizontal, !horizontal && theme.base.vertical, className)}
      {...props}
    >
      {children}
    </li>
  );
};
