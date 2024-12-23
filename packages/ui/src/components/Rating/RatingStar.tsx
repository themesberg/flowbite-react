"use client";

import type { ComponentProps, FC } from "react";
import { HiStar } from "react-icons/hi";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteSizes } from "../Flowbite/FlowbiteTheme";
import { useRatingContext } from "./RatingContext";
import { ratingTheme } from "./theme";

export interface FlowbiteRatingStarTheme {
  empty: string;
  filled: string;
  sizes: FlowbiteStarSizes;
}

export interface FlowbiteStarSizes extends Pick<FlowbiteSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface RatingStarProps extends ComponentProps<"svg"> {
  filled?: boolean;
  starIcon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<FlowbiteRatingStarTheme>;
  unstyled?: Unstyled<FlowbiteRatingStarTheme>;
}

export const RatingStar: FC<RatingStarProps> = ({
  className,
  filled = true,
  starIcon: Icon = HiStar,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme, unstyled: rootUnstyled, size = "sm" } = useRatingContext();

  const theme = resolveTheme(
    [ratingTheme.star, getTheme()?.rating?.star, rootTheme?.star, customTheme],
    [get(rootUnstyled, "star"), unstyled],
  );

  return (
    <Icon
      data-testid="flowbite-rating-star"
      className={twMerge(theme.sizes[size], theme[filled ? "filled" : "empty"], className)}
      {...props}
    />
  );
};
