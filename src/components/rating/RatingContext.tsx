import { ComponentProps, createContext, useContext } from 'react';

export type Size = 'sm' | 'md' | 'lg';

export type RatingContext = ComponentProps<'svg'> & {
  size?: Size;
};

export const RatingContext = createContext<RatingContext | undefined>(undefined);

export function useRatingContext(): RatingContext {
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error('useRatingContext should be used within the RatingContext provider!');
  }

  return context;
}
