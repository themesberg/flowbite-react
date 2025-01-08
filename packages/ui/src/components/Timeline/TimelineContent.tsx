"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { timelineTheme } from "./theme";
import type { TimelineBodyTheme } from "./TimelineBody";
import { TimelineContentContext } from "./TimelineContentContext";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";
import type { TimelineTimeTheme } from "./TimelineTime";
import type { TimelineTitleTheme } from "./TimelineTitle";

export interface TimelineContentTheme {
  root: {
    base: string;
    horizontal: string;
    vertical: string;
  };
  time: TimelineTitleTheme;
  title: TimelineTimeTheme;
  body: TimelineBodyTheme;
}

export interface TimelineContentProps extends ComponentProps<"div">, ThemingProps<TimelineContentTheme> {}

export function TimelineContent({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: TimelineContentProps) {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme, horizontal } = useTimelineContext();
  const { theme: itemTheme, clearTheme: itemClearTheme, applyTheme: itemApplyTheme } = useTimelineItemContext();

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [
      timelineTheme.item.content,
      provider.theme?.timeline?.item?.content,
      rootTheme?.item?.content,
      itemTheme?.content,
      customTheme,
    ],
    [
      get(provider.clearTheme, "timeline.item.content"),
      get(rootClearTheme, "item.content"),
      get(itemClearTheme, "content"),
      clearTheme,
    ],
    [
      get(provider.applyTheme, "timeline.item.content"),
      get(rootApplyTheme, "item.content"),
      get(itemApplyTheme, "content"),
      applyTheme,
    ],
  );

  return (
    <TimelineContentContext.Provider value={{ theme: customTheme, clearTheme, applyTheme }}>
      <div
        data-testid="timeline-content"
        className={twMerge(theme.root.base, horizontal ? theme.root.horizontal : theme.root.vertical, className)}
        {...props}
      >
        {children}
      </div>
    </TimelineContentContext.Provider>
  );
}

TimelineContent.displayName = "TimelineContent";
