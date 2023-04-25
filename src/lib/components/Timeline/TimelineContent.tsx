import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite';
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

export interface TimelineContentProps extends PropsWithChildren, ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteTimelineContentTheme>;
}

export const TimelineContent: FC<TimelineContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.timeline.item.content, customTheme);
  const { horizontal } = useTimelineContext();

  return (
    <div data-testid="timeline-content" className={classNames(horizontal && theme.root.base, className)} {...props}>
      {children}
    </div>
  );
};
