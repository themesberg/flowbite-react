"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { timelineTheme } from "./theme";
import type { FlowbiteTimelineContentTheme } from "./TimelineContent";
import { useTimelineContext } from "./TimelineContext";
import { TimelineItemContext } from "./TimelineItemContext";
import type { FlowbiteTimelinePointTheme } from "./TimelinePoint";

export interface FlowbiteTimelineItemTheme {
  root: {
    horizontal: string;
    vertical: string;
  };
  content: FlowbiteTimelineContentTheme;
  point: FlowbiteTimelinePointTheme;
}

export interface TimelineItemProps extends ComponentProps<"li"> {
  theme?: DeepPartial<FlowbiteTimelineItemTheme>;
  unstyled?: Unstyled<FlowbiteTimelineItemTheme>;
}

export const TimelineItem: FC<TimelineItemProps> = ({
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme, unstyled: rootUnstyled, horizontal } = useTimelineContext();

  const theme = resolveTheme(
    [timelineTheme.item, getTheme()?.timeline?.item, rootTheme?.item, customTheme],
    [get(rootUnstyled, "item"), unstyled],
  );

  return (
    <TimelineItemContext.Provider value={{ theme: customTheme, unstyled }}>
      <li
        data-testid="timeline-item"
        className={twMerge(horizontal && theme.root.horizontal, !horizontal && theme.root.vertical, className)}
        {...props}
      >
        {children}
      </li>
    </TimelineItemContext.Provider>
  );
};
