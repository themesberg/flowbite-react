"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, DynamicStringEnumKeysOf, Unstyled } from "../../types";
import { RatingAdvanced } from "./RatingAdvanced";
import { RatingContext } from "./RatingContext";
import type { FlowbiteRatingStarTheme, FlowbiteStarSizes } from "./RatingStar";
import { RatingStar } from "./RatingStar";
import { ratingTheme } from "./theme";

export interface FlowbiteRatingTheme {
  root: {
    base: string;
  };
  star: FlowbiteRatingStarTheme;
}

export interface RatingProps extends ComponentProps<"div"> {
  size?: DynamicStringEnumKeysOf<FlowbiteStarSizes>;
  theme?: DeepPartial<FlowbiteRatingTheme>;
  unstyled?: Unstyled<FlowbiteRatingTheme>;
}

const RatingComponent: FC<RatingProps> = ({
  children,
  className,
  size = "sm",
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const theme = resolveTheme([ratingTheme, getStore().theme?.rating, customTheme], [unstyled]);

  return (
    <RatingContext.Provider value={{ theme: customTheme, unstyled, size }}>
      <div className={twMerge(theme.root.base, className)} {...props}>
        {children}
      </div>
    </RatingContext.Provider>
  );
};

RatingComponent.displayName = "Rating";
RatingStar.displayName = "Rating.Star";
RatingAdvanced.displayName = "Rating.Advanced";

export const Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced,
});
