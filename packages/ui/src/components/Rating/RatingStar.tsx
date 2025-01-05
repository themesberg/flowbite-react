"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { StarIcon } from "../../icons";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
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

export interface RatingStarProps extends ComponentProps<"svg">, ThemingProps<RatingStarTheme> {
  filled?: boolean;
  starIcon?: FC<ComponentProps<"svg">>;
}

export const RatingStar: FC<RatingStarProps> = ({
  className,
  filled = true,
  starIcon: Icon = StarIcon,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme, size = "sm" } = useRatingContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [ratingTheme.star, provider.theme?.rating?.star, rootTheme?.star, customTheme],
    [get(provider.clearTheme, "rating.star"), get(rootClearTheme, "star"), clearTheme],
    [get(provider.applyTheme, "rating.star"), get(rootApplyTheme, "star"), applyTheme],
  );

  return (
    <Icon
      data-testid="flowbite-rating-star"
      className={twMerge(theme.sizes[size], theme[filled ? "filled" : "empty"], className)}
      {...props}
    />
  );
};

RatingStar.displayName = "RatingStar";
