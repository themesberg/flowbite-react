"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { timelineTheme } from "./theme";
import type { TimelineContentTheme } from "./TimelineContent";
import { useTimelineContext } from "./TimelineContext";
import { TimelineItemContext } from "./TimelineItemContext";
import type { TimelinePointTheme } from "./TimelinePoint";

export interface TimelineItemTheme {
  root: {
    horizontal: string;
    vertical: string;
  };
  content: TimelineContentTheme;
  point: TimelinePointTheme;
}

export interface TimelineItemProps extends ComponentProps<"li">, ThemingProps<TimelineItemTheme> {}

export const TimelineItem: FC<TimelineItemProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, applyTheme: rootApplyTheme, horizontal } = useTimelineContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [timelineTheme.item, provider.theme?.timeline?.item, rootTheme?.item, customTheme],
    [get(provider.resetTheme, "timeline.item"), get(rootResetTheme, "item"), resetTheme],
    [get(provider.applyTheme, "timeline.item"), get(rootApplyTheme, "item"), applyTheme],
  );

  return (
    <TimelineItemContext.Provider value={{ theme: customTheme, resetTheme, applyTheme }}>
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

TimelineItem.displayName = "TimelineItem";
