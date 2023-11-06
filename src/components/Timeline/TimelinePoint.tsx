'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useTimelineContext } from './TimelineContext';
import { useTimelineItemContext } from './TimelineItemContext';

export interface FlowbiteTimelinePointTheme {
  horizontal: string;
  line: string;
  marker: {
    base: {
      horizontal: string;
      vertical: string;
    };
    icon: {
      base: string;
      wrapper: string;
    };
  };
  vertical: string;
}

export interface TimelnePointProps extends ComponentProps<'div'> {
  icon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<FlowbiteTimelinePointTheme>;
}

export const TimelinePoint: FC<TimelnePointProps> = ({
  children,
  className,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();

  const theme = mergeDeep(itemTheme.point, customTheme);

  return (
    <div
      data-testid="timeline-point"
      className={twMerge(horizontal && theme.horizontal, !horizontal && theme.vertical, className)}
      {...props}
    >
      {children}
      {Icon ? (
        <span className={twMerge(theme.marker.icon.wrapper)}>
          <Icon aria-hidden className={twMerge(theme.marker.icon.base)} />
        </span>
      ) : (
        <div
          className={twMerge(horizontal && theme.marker.base.horizontal, !horizontal && theme.marker.base.vertical)}
        />
      )}
      {horizontal && <div className={twMerge(theme.line)} />}
    </div>
  );
};
