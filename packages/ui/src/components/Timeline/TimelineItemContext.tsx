"use client";

import { createContext, useContext } from "react";
import type { ThemingProps } from "../../types";
import type { TimelineItemTheme } from "./TimelineItem";

export type TimelineItemContext = ThemingProps<TimelineItemTheme>;

export const TimelineItemContext = createContext<TimelineItemContext | undefined>(undefined);

export function useTimelineItemContext(): TimelineItemContext {
  const context = useContext(TimelineItemContext);

  if (!context) {
    throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
  }

  return context;
}
