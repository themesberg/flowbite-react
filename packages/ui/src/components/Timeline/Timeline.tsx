'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import { TimelineBody } from './TimelineBody';
import { TimelineContent } from './TimelineContent';
import { TimelineContext } from './TimelineContext';
import { TimelineItem, type FlowbiteTimelineItemTheme } from './TimelineItem';
import { TimelinePoint } from './TimelinePoint';
import { TimelineTime } from './TimelineTime';
import { TimelineTitle } from './TimelineTitle';

export interface FlowbiteTimelineTheme {
  root: {
    direction: {
      horizontal: string;
      vertical: string;
    };
  };
  item: FlowbiteTimelineItemTheme;
}

export interface TimelineProps extends ComponentProps<'ol'> {
  horizontal?: boolean;
  theme?: DeepPartial<FlowbiteTimelineTheme>;
}

const TimelineComponent: FC<TimelineProps> = ({
  children,
  className,
  horizontal,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().timeline, customTheme);

  return (
    <TimelineContext.Provider value={{ theme, horizontal }}>
      <ol
        data-testid="timeline-component"
        className={twMerge(
          horizontal && theme.root.direction.horizontal,
          !horizontal && theme.root.direction.vertical,
          className,
        )}
        {...props}
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
