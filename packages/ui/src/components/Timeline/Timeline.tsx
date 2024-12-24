"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { timelineTheme } from "./theme";
import { TimelineBody } from "./TimelineBody";
import { TimelineContent } from "./TimelineContent";
import { TimelineContext } from "./TimelineContext";
import { TimelineItem, type TimelineItemTheme } from "./TimelineItem";
import { TimelinePoint } from "./TimelinePoint";
import { TimelineTime } from "./TimelineTime";
import { TimelineTitle } from "./TimelineTitle";

export interface TimelineTheme {
  root: {
    direction: {
      horizontal: string;
      vertical: string;
    };
  };
  item: TimelineItemTheme;
}

export interface TimelineProps extends ComponentProps<"ol"> {
  horizontal?: boolean;
  theme?: DeepPartial<TimelineTheme>;
  resetTheme?: ResetTheme<TimelineTheme>;
}

const TimelineComponent: FC<TimelineProps> = ({
  children,
  className,
  horizontal,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([timelineTheme, provider.theme?.timeline, customTheme], [resetTheme]);

  return (
    <TimelineContext.Provider value={{ theme: customTheme, resetTheme, horizontal }}>
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

TimelineComponent.displayName = "Timeline";
TimelineItem.displayName = "Timeline.Item";
TimelinePoint.displayName = "Timeline.Point";
TimelineContent.displayName = "Timeline.Content";
TimelineTime.displayName = "Timeline.Time";
TimelineTitle.displayName = "Timeline.Title";
TimelineBody.displayName = "Timeline.Body";

export const Timeline = Object.assign(TimelineComponent, {
  Body: TimelineBody,
  Content: TimelineContent,
  Item: TimelineItem,
  Point: TimelinePoint,
  Time: TimelineTime,
  Title: TimelineTitle,
});
