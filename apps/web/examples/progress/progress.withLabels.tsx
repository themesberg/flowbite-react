import { Progress } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Progress } from "flowbite-react";

function Component() {
  return <Progress progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />;
}
`;

const codeRSC = `
import { Progress } from "flowbite-react";

function Component() {
  return <Progress progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />;
}
`;

function Component() {
  return <Progress progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />;
}

export const withLabels: CodeData = {
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
  githubSlug: "progress/progress.withLabels.tsx",
  component: <Component />,
};
