"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
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

export const TimelineContent: FC<TimelineContentProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, horizontal } = useTimelineContext();
  const { theme: itemTheme, resetTheme: itemResetTheme } = useTimelineItemContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [
      timelineTheme.item.content,
      provider.theme?.timeline?.item?.content,
      rootTheme?.item?.content,
      itemTheme?.content,
      customTheme,
    ],
    [get(rootResetTheme, "item.content"), get(itemResetTheme, "content"), resetTheme],
  );

  return (
    <TimelineContentContext.Provider value={{ theme: customTheme, resetTheme }}>
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
