import { createContext, useContext } from 'react';

export type TimelineContext = {
  horizontal?: boolean;
};

export const TimelineContext = createContext<TimelineContext | undefined>(undefined);

export function useTimelineContext(): TimelineContext {
  const context = useContext(TimelineContext);

  if (!context) {
    throw new Error('useTimelineContext should be used within the TimelineContext providor!');
  }

  return context;
}
