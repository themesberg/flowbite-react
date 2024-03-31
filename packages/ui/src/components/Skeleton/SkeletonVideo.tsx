import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";

export interface FlowbiteSkeletonVideoTheme {
  base: string;
  svg: string;
}

export interface SkeletonVideoProps {
  theme?: DeepPartial<FlowbiteSkeletonVideoTheme>;
  className?: string;
}

export const SkeletonVideo: FC<SkeletonVideoProps> = ({ className, theme: customTheme = {} }) => {
  const theme = mergeDeep(getTheme().skeleton.video, customTheme);

  return (
    <div role="status" className={theme.base} data-testid="flowbite-skeleton-video">
      <svg
        className={twMerge(theme.svg, className)}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 20"
      >
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
