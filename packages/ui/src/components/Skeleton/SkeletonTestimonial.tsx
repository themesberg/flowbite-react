import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";

export interface FlowbiteSkeletonTestimonialTheme {
  base: string;
  textList: {
    firstLine: string;
    secondLine: string;
    author: {
      base: string;
      userIcon: string;
      authorName: string;
      secondText: string;
    };
  };
}

export interface SkeletonTestimonialProps {
  theme?: DeepPartial<FlowbiteSkeletonTestimonialTheme>;
  className?: string;
}

export const SkeletonTestimonial: FC<SkeletonTestimonialProps> = ({ className, theme: customTheme = {} }) => {
  const theme = mergeDeep(getTheme().skeleton.testimonial, customTheme);

  return (
    <div role="status" className={twMerge(theme.base, className)} data-testid="flowbite-skeleton-testimonial">
      <div className={theme.textList.firstLine} />
      <div className={theme.textList.secondLine} />
      <div className={theme.textList.author.base}>
        <svg
          className={theme.textList.author.userIcon}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div className={theme.textList.author.authorName} />
        <div className={theme.textList.author.secondText} />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
