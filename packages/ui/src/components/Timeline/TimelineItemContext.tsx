"use client";

import { createContext, useContext } from "react";
import type { DeepPartial, ResetTheme } from "../../types";
import type { TimelineItemTheme } from "./TimelineItem";

export type TimelineItemContext = {
  theme?: DeepPartial<TimelineItemTheme>;
  resetTheme?: ResetTheme<TimelineItemTheme>;
};

export const TimelineItemContext = createContext<TimelineItemContext | undefined>(undefined);

export function useTimelineItemContext(): TimelineItemContext {
  const context = useContext(TimelineItemContext);

  if (!context) {
    throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
  }

  return context;
}
