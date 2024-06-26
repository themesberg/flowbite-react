import { Skeleton } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
'use client';

import { Skeleton } from "flowbite-react";

function Component() {
  return (
    <div>
      <Skeleton />
    </div>
  )
}
`;

const codeRSC = `
import { Skeleton } from "flowbite-react";

function Component() {
  return (
    <div>
      <Skeleton />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <Skeleton />
    </div>
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
  githubSlug: "skeleton/skeleton.root.tsx",
  component: <Component />,
};
