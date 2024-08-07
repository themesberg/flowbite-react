import { SkeletonList } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Skeleton } from "flowbite-react";

function Component() {
  return (
    <div>
      <SkeletonList />
    </div>
  )
}
`;

const codeRSC = `
import { SkeletonList } from "flowbite-react";

function Component() {
  return (
    <div>
      <SkeletonList />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <SkeletonList />
    </div>
  );
}

export const list: CodeData = {
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
  githubSlug: "skeleton/skeleton.list.tsx",
  component: <Component />,
};
