import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';
import { TimelineBody } from './TimelineBody';
import { TimelineContent } from './TimelineContent';
import { TimelineContext } from './TimelineContext';
import { TimelineItem } from './TimelineItem';
import { TimelinePoint } from './TimelinePoint';
import { TimelineTime } from './TimelineTime';
import { TimelineTitle } from './TimelineTitle';

export interface FlowbiteTimelineTheme {
  direction: {
    horizontal: string;
    vertical: string;
  };
  item: {
    base: {
      horizontal: string;
      vertical: string;
    };
    point: {
      base: {
        horizontal: string;
        vertical: string;
      };
      marker: {
        base: string;
        icon: {
          wrapper: string;
          base: string;
        };
      };
      line: string;
    };
    content: {
      base: string;
      time: string;
      title: string;
      body: string;
    };
  };
}

export type TimelineProps = PropsWithChildren<{
  className?: string;
  horizontal?: boolean;
}>;

const TimelineComponent: FC<TimelineProps> = ({ children, horizontal, className }) => {
  const theme = useTheme().theme.timeline;

  return (
    <TimelineContext.Provider value={{ horizontal }}>
      <ol
        data-testid="timeline-component"
        className={classNames(
          horizontal && theme.direction.horizontal,
          !horizontal && theme.direction.vertical,
          className,
        )}
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
TimelineBody.displayName = 'Timeline.Body';

export const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Body: TimelineBody,
});
