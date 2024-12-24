"use client";

import { createContext, useContext } from "react";
import type { DeepPartial, ResetTheme } from "../../types";
import type { TimelineTheme } from "./Timeline";

export type TimelineContext = {
  theme?: DeepPartial<TimelineTheme>;
  resetTheme?: ResetTheme<TimelineTheme>;
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
