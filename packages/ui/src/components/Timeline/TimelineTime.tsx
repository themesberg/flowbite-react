"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { timelineTheme } from "./theme";
import { useTimelineContentContext } from "./TimelineContentContext";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";

export interface TimelineTimeTheme {
  base: string;
}

export interface TimelineTimeProps extends ComponentProps<"time">, ThemingProps<TimelineTimeTheme> {}

export const TimelineTime: FC<TimelineTimeProps> = ({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme } = useTimelineContext();
  const { theme: itemTheme, clearTheme: itemClearTheme, applyTheme: itemApplyTheme } = useTimelineItemContext();
  const {
    theme: contentTheme,
    clearTheme: contentClearTheme,
    applyTheme: contentApplyTheme,
  } = useTimelineContentContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [
      timelineTheme.item.content.time,
      provider.theme?.timeline?.item?.content?.time,
      rootTheme?.item?.content?.time,
      itemTheme?.content?.time,
      contentTheme?.time,
      customTheme,
    ],
    [
      get(provider.clearTheme, "timeline.item.content.time"),
      get(rootClearTheme, "item.content.time"),
      get(itemClearTheme, "content.time"),
      get(contentClearTheme, "time"),
      clearTheme,
    ],
    [
      get(provider.applyTheme, "timeline.item.content.time"),
      get(rootApplyTheme, "item.content.time"),
      get(itemApplyTheme, "content.time"),
      get(contentApplyTheme, "time"),
      applyTheme,
    ],
  );

  return (
    <time className={twMerge(theme.base, className)} {...props}>
      {children}
    </time>
  );
};

TimelineTime.displayName = "TimelineTime";
