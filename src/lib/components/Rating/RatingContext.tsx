import { createContext, useContext } from 'react';
import type { FlowbiteSizes } from '../Flowbite/FlowbiteTheme';

export interface StarSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export type RatingContext = {
  size?: keyof StarSizes;
};

export const RatingContext = createContext<RatingContext | undefined>(undefined);

export function useRatingContext(): RatingContext {
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error('useRatingContext should be used within the RatingContext provider!');
  }

  return context;
}
