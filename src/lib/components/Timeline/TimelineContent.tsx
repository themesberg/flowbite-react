import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';
import { useTimelineContext } from './TimelineContext';

export type TimelineContentProps = PropsWithChildren<
  ComponentProps<'div'> & {
    className?: string;
  }
>;

export const TimelineContent: FC<TimelineContentProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.timeline.item.content;
  const { horizontal } = useTimelineContext();

  return (
    <div data-testid="timeline-content" className={classNames(horizontal && theme.base, className)} {...props}>
      {children}
    </div>
  );
};
