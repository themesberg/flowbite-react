"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { timelineTheme } from "./theme";
import { TimelineContext } from "./TimelineContext";
import type { TimelineItemTheme } from "./TimelineItem";

export interface TimelineTheme {
  root: {
    direction: {
      horizontal: string;
      vertical: string;
    };
  };
  item: TimelineItemTheme;
}

export interface TimelineProps extends ComponentProps<"ol">, ThemingProps<TimelineTheme> {
  horizontal?: boolean;
}

export function Timeline({
  children,
  className,
  horizontal,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: TimelineProps) {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [timelineTheme, provider.theme?.timeline, customTheme],
    [get(provider.clearTheme, "timeline"), clearTheme],
    [get(provider.applyTheme, "timeline"), applyTheme],
  );

  return (
    <TimelineContext.Provider value={{ theme: customTheme, clearTheme, applyTheme, horizontal }}>
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
}

Timeline.displayName = "Timeline";
