"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, DynamicStringEnumKeysOf, ResetTheme } from "../../types";
import { RatingAdvanced } from "./RatingAdvanced";
import { RatingContext } from "./RatingContext";
import type { RatingStarSizes, RatingStarTheme } from "./RatingStar";
import { RatingStar } from "./RatingStar";
import { ratingTheme } from "./theme";

export interface RatingTheme {
  root: {
    base: string;
  };
  star: RatingStarTheme;
}

export interface RatingProps extends ComponentProps<"div"> {
  size?: DynamicStringEnumKeysOf<RatingStarSizes>;
  theme?: DeepPartial<RatingTheme>;
  resetTheme?: ResetTheme<RatingTheme>;
}

const RatingComponent: FC<RatingProps> = ({
  children,
  className,
  size = "sm",
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([ratingTheme, provider.theme?.rating, customTheme], [resetTheme]);

  return (
    <RatingContext.Provider value={{ theme: customTheme, resetTheme, size }}>
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
