import { SkeletonImage } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Skeleton } from "flowbite-react";

function Component() {
  return (
    <div>
      <Skeleton.Image />
    </div>
  )
}
`;

const codeRSC = `
import { SkeletonImage } from "flowbite-react";

function Component() {
  return (
    <div>
      <SkeletonImage />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <SkeletonImage />
    </div>
  );
}

export const image: CodeData = {
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
  githubSlug: "skeleton/skeleton.image.tsx",
  component: <Component />,
};
