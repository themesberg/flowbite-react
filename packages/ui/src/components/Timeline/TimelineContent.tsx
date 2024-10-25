"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import type { DeepPartial } from "../../types";
import type { FlowbiteTimelineBodyTheme } from "./TimelineBody";
import { TimelineContentContext } from "./TimelineContentContext";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";
import type { FlowbiteTimelineTimeTheme } from "./TimelineTime";
import type { FlowbiteTimelineTitleTheme } from "./TimelineTitle";

export interface FlowbiteTimelineContentTheme {
  root: {
    base: string;
    horizontal: string;
    vertical: string;
  };
  time: FlowbiteTimelineTitleTheme;
  title: FlowbiteTimelineTimeTheme;
  body: FlowbiteTimelineBodyTheme;
}

export interface TimelineContentProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteTimelineContentTheme>;
}

export const TimelineContent: FC<TimelineContentProps> = ({ children, className, theme: customTheme, ...props }) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();

  const theme = resolveTheme([itemTheme.content, {}, customTheme], { shouldPrefix: false });

  return (
    <TimelineContentContext.Provider value={{ theme }}>
      <div
        data-testid="timeline-content"
        className={twMerge(theme.root.base, horizontal ? theme.root.horizontal : theme.root.vertical, className)}
        {...props}
      >
        {children}
      </div>
    </TimelineContentContext.Provider>
  );
};
