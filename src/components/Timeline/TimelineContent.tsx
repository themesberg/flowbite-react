'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import type { FlowbiteTimelineBodyTheme } from './TimelineBody';
import { useTimelineContext } from './TimelineContext';
import type { FlowbiteTimelineTimeTheme } from './TimelineTime';
import type { FlowbiteTimelineTitleTheme } from './TimelineTitle';

export interface FlowbiteTimelineContentTheme
  extends FlowbiteTimelineBodyTheme,
    FlowbiteTimelineTimeTheme,
    FlowbiteTimelineTitleTheme {
  root: {
    base: string;
  };
}

export interface TimelineContentProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteTimelineContentTheme>;
}

export const TimelineContent: FC<TimelineContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, horizontal } = useTimelineContext();

  const theme = mergeDeep(rootTheme.item.content, customTheme);

  return (
    <div data-testid="timeline-content" className={twMerge(horizontal && theme.root.base, className)} {...props}>
      {children}
    </div>
  );
};
