"use client";

import { createContext, useContext } from "react";
import type { FlowbiteTimelineTheme } from "./Timeline";

export type TimelineContext = {
  theme: FlowbiteTimelineTheme;
  horizontal?: boolean;
};

export const TimelineContext = createContext<TimelineContext | undefined>(undefined);

export function useTimelineContext(): TimelineContext {
  const context = useContext(TimelineContext);

  if (!context) {
    throw new Error("useTimelineContext should be used within the TimelineContext provider!");
  }

  return context;
}
