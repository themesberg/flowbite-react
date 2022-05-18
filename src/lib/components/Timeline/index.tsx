import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { TimelineItem } from './TimelineItem';
import { TimelineContext } from './TimelineContext';
import { TimelinePoint } from './TimelinePoint';
import { TimelineContent } from './TimelineContent';
import { TimelineTime } from './TimelineTime';
import { TimelineTitle } from './TimelineTitle';
import { TimelineDetail } from './TimelineDetail';

export type TimelineProps = PropsWithChildren<{
  className?: string;
  horizontal?: boolean;
}>;

const TimelineComponent: FC<TimelineProps> = ({ children, horizontal }) => {
  return (
    <TimelineContext.Provider value={{ horizontal }}>
      <ol
        className={classNames({
          'relative border-l border-gray-200 dark:border-gray-700': !horizontal,
          'items-center sm:flex': horizontal,
        })}
      >
        {children}
      </ol>
    </TimelineContext.Provider>
  );
};

TimelineComponent.displayName = 'Timeline';
TimelineItem.displayName = 'Timeline.Item';
TimelinePoint.displayName = 'Timeline.Point';
TimelineContent.displayName = 'Timeline.Content';
TimelineTime.displayName = 'Timeline.Time';
TimelineTitle.displayName = 'Timeline.Title';
TimelineDetail.displayName = 'Timeline.Detail';

export const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Date: TimelineTime,
  Title: TimelineTitle,
  Detail: TimelineDetail,
});
