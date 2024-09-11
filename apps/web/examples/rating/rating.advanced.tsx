import { Rating, RatingAdvanced, RatingStar } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Rating } from "flowbite-react";

export function Component() {
  return (
    <>
      <Rating className="mb-2">
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
      </Rating>
      <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
      <Rating.Advanced percentFilled={70} className="mb-2">
        5 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={17} className="mb-2">
        4 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={8} className="mb-2">
        3 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={4} className="mb-2">
        2 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
    </>
  );
}
`;

const codeRSC = `
import { Rating, RatingAdvanced, RatingStar } from "flowbite-react";

export function Component() {
  return (
    <>
      <Rating className="mb-2">
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
      </Rating>
      <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
      <RatingAdvanced percentFilled={70} className="mb-2">
        5 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={17} className="mb-2">
        4 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={8} className="mb-2">
        3 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={4} className="mb-2">
        2 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>
    </>
  );
}
`;

export function Component() {
  return (
    <>
      <Rating className="mb-2">
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
      </Rating>
      <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
      <RatingAdvanced percentFilled={70} className="mb-2">
        5 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={17} className="mb-2">
        4 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={8} className="mb-2">
        3 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={4} className="mb-2">
        2 star
      </RatingAdvanced>
      <RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>
    </>
  );
}

export const advanced: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "rating/rating.advanced.tsx",
  component: <Component />,
};
