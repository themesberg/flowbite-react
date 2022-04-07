import { ComponentProps } from 'react';
import { createContext, useContext } from 'react';

export type RatingContext = ComponentProps<'svg'> & {
  size?: string;
};

export const RatingContext = createContext<RatingContext | undefined>(undefined);

export function useRatingContext(): RatingContext {
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error('useRatingContext should be used within the RatingContext provider!');
  }

  return context;
}
