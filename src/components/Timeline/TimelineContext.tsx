'use client';

import { createContext, useContext } from 'react';

export type TimelineContext = {
  horizontal?: boolean;
};

export const TimelineContext = createContext<TimelineContext | undefined>(undefined);

// TODO: deprecate this in favor for vanilla CSS class targetting and enable full SSR
export function useTimelineContext(): TimelineContext {
  const context = useContext(TimelineContext);

  if (!context) {
    throw new Error('useTimelineContext should be used within the TimelineContext providor!');
  }

  return context;
}
