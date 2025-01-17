"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, ThemingProps } from "../../types";
import { RatingContext } from "./RatingContext";
import type { RatingStarSizes, RatingStarTheme } from "./RatingStar";
import { ratingTheme } from "./theme";

export interface RatingTheme {
  root: {
    base: string;
  };
  star: RatingStarTheme;
}

export interface RatingProps extends ComponentProps<"div">, ThemingProps<RatingTheme> {
  size?: DynamicStringEnumKeysOf<RatingStarSizes>;
}

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  ({ children, className, size = "sm", theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [ratingTheme, provider.theme?.rating, customTheme],
      [get(provider.clearTheme, "rating"), clearTheme],
      [get(provider.applyTheme, "rating"), applyTheme],
    );

    return (
      <RatingContext.Provider value={{ theme: customTheme, clearTheme, applyTheme, size }}>
        <div ref={ref} className={twMerge(theme.root.base, className)} {...props}>
          {children}
        </div>
      </RatingContext.Provider>
    );
  },
);

Rating.displayName = "Rating";
