"use client";

import { createContext, useContext } from "react";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteTimelineItemTheme } from "./TimelineItem";

export type TimelineItemContext = {
  theme?: DeepPartial<FlowbiteTimelineItemTheme>;
  unstyled?: Unstyled<FlowbiteTimelineItemTheme>;
};

export const TimelineItemContext = createContext<TimelineItemContext | undefined>(undefined);

export function useTimelineItemContext(): TimelineItemContext {
  const context = useContext(TimelineItemContext);

  if (!context) {
    throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
  }

  return context;
}
