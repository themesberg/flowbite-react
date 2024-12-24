"use client";

import { createContext, useContext } from "react";
import { DynamicStringEnumKeysOf, type DeepPartial, type ResetTheme } from "../../types";
import type { RatingTheme } from "./Rating";
import type { RatingStarSizes } from "./RatingStar";

export type RatingContext = {
  theme?: DeepPartial<RatingTheme>;
  resetTheme?: ResetTheme<RatingTheme>;
  size?: DynamicStringEnumKeysOf<RatingStarSizes>;
};

export const RatingContext = createContext<RatingContext | undefined>(undefined);

export function useRatingContext(): RatingContext {
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  }

  return context;
}
