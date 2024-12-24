"use client";

import { createContext, useContext } from "react";
import type { DeepPartial, ResetTheme } from "../../types";
import type { FlowbiteTimelineContentTheme } from "./TimelineContent";

export type TimelineContentContext = {
  theme?: DeepPartial<FlowbiteTimelineContentTheme>;
  resetTheme?: ResetTheme<FlowbiteTimelineContentTheme>;
};

export const TimelineContentContext = createContext<TimelineContentContext | undefined>(undefined);

export function useTimelineContentContext(): TimelineContentContext {
  const context = useContext(TimelineContentContext);

  if (!context) {
    throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
  }

  return context;
}
