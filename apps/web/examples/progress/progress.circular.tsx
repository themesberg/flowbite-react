import { Progress } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Progress } from "flowbite-react";

export function Component() {
  return <Progress.Circular progress={45} />;
}
`;

const codeRSC = `
import { ProgressCircular } from "flowbite-react";

export function Component() {
  return <ProgressCircular progress={45} />;
}
`;

export function Component() {
  return <Progress.Circular progress={45} />;
}

export const circularProgress: CodeData = {
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
  githubSlug: "progress/progress.circular.tsx",
  component: <Component />,
};
