import { Rating, RatingStar } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Rating } from "flowbite-react";

function Component() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
  );
}
`;

const codeRSC = `
import { Rating, RatingStar } from "flowbite-react";

function Component() {
  return (
    <Rating>
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar filled={false} />
    </Rating>
  );
}
`;

function Component() {
  return (
    <Rating>
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar filled={false} />
    </Rating>
  );
}

export const root: CodeData = {
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
  githubSlug: "rating/rating.root.tsx",
  component: <Component />,
};
