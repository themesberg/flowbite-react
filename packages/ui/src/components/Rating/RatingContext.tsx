"use client";

import { createContext, useContext } from "react";
import { DynamicStringEnumKeysOf, type DeepPartial, type Unstyled } from "../../types";
import type { FlowbiteRatingTheme } from "./Rating";
import type { FlowbiteStarSizes } from "./RatingStar";

export type RatingContext = {
  theme?: DeepPartial<FlowbiteRatingTheme>;
  unstyled?: Unstyled<FlowbiteRatingTheme>;
  size?: DynamicStringEnumKeysOf<FlowbiteStarSizes>;
};

export const RatingContext = createContext<RatingContext | undefined>(undefined);

export function useRatingContext(): RatingContext {
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  }

  return context;
}
