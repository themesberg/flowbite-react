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
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, horizontal } = useTimelineContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [timelineTheme.item, provider.theme?.timeline?.item, rootTheme?.item, customTheme],
    [get(rootResetTheme, "item"), resetTheme],
  );

  return (
    <TimelineItemContext.Provider value={{ theme: customTheme, resetTheme }}>
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
