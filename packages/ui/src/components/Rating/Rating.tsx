"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
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

export const Rating: FC<RatingProps> = ({
  children,
  className,
  size = "sm",
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [ratingTheme, provider.theme?.rating, customTheme],
    [get(provider.clearTheme, "rating"), clearTheme],
    [get(provider.applyTheme, "rating"), applyTheme],
  );

  return (
    <RatingContext.Provider value={{ theme: customTheme, clearTheme, applyTheme, size }}>
      <div className={twMerge(theme.root.base, className)} {...props}>
        {children}
      </div>
    </RatingContext.Provider>
  );
};

Rating.displayName = "Rating";
