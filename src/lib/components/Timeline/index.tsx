import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { TimelineItem } from './TimelineItem';

export type TimelineProps = PropsWithChildren<{
  className?: string;
}>;

const TimelineComponent: FC<TimelineProps> = ({ className, children }) => {
  return <ol className="relative border-l border-gray-200 dark:border-gray-700">{children}</ol>;
};

TimelineComponent.displayName = 'Timeline';
TimelineItem.displayName = 'Timeline.Item';

export const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
});
