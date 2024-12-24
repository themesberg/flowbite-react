"use client";

import type { ComponentProps, FC } from "react";
import { HiStar } from "react-icons/hi";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import type { FlowbiteSizes } from "../Flowbite/FlowbiteTheme";
import { useRatingContext } from "./RatingContext";
import { ratingTheme } from "./theme";

export interface RatingStarTheme {
  empty: string;
  filled: string;
  sizes: RatingStarSizes;
}

export interface RatingStarSizes extends Pick<FlowbiteSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface RatingStarProps extends ComponentProps<"svg"> {
  filled?: boolean;
  starIcon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<RatingStarTheme>;
  resetTheme?: ResetTheme<RatingStarTheme>;
}

export const RatingStar: FC<RatingStarProps> = ({
  className,
  filled = true,
  starIcon: Icon = HiStar,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, size = "sm" } = useRatingContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [ratingTheme.star, provider.theme?.rating?.star, rootTheme?.star, customTheme],
    [get(rootResetTheme, "star"), resetTheme],
  );

  return (
    <Icon
      data-testid="flowbite-rating-star"
      className={twMerge(theme.sizes[size], theme[filled ? "filled" : "empty"], className)}
      {...props}
    />
  );
};
