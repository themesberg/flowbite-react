import { Skeleton } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
'use client';

import { Skeleton } from "flowbite-react";

function Component() {
  return (
    <div>
      <Skeleton variant="rectangular" />
    </div>
  )
}
`;

const codeRSC = `
import { Skeleton } from "flowbite-react";

function Component() {
  return (
    <div>
      <Skeleton variant="rectangular" />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <Skeleton variant="rectangular" />
    </div>
  );
}

export const rectangular: CodeData = {
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
  githubSlug: "skeleton/skeleton.rectangular.tsx",
  component: <Component />,
};
