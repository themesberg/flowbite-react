"use client";

import { createContext, useContext } from "react";
import type { ThemingProps } from "../../types";
import type { TimelineContentTheme } from "./TimelineContent";

export type TimelineContentContext = ThemingProps<TimelineContentTheme>;

export const TimelineContentContext = createContext<TimelineContentContext | undefined>(undefined);

export function useTimelineContentContext(): TimelineContentContext {
  const context = useContext(TimelineContentContext);

  if (!context) {
    throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
  }

  return context;
}
