import { SkeletonCard } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Skeleton } from "flowbite-react";

function Component() {
  return (
    <div>
      <SkeletonCard />
    </div>
  )
}
`;

const codeRSC = `
import { SkeletonCard } from "flowbite-react";

function Component() {
  return (
    <div>
      <SkeletonCard />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <SkeletonCard />
    </div>
  );
}

export const card: CodeData = {
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
  githubSlug: "skeleton/skeleton.card.tsx",
  component: <Component />,
};
