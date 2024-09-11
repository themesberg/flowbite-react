import { Progress } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Progress } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-medium dark:text-white">Small</div>
      <Progress progress={45} size="sm" color="dark" />
      <div className="text-base font-medium dark:text-white">Default</div>
      <Progress progress={45} size="md" color="dark" />
      <div className="text-lg font-medium dark:text-white">Large</div>
      <Progress progress={45} size="lg" color="dark" />
      <div className="text-lg font-medium dark:text-white">Extra Large</div>
      <Progress progress={45} size="xl" color="dark" />
    </div>
  );
}
`;

const codeRSC = `
import { Progress } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-medium dark:text-white">Small</div>
      <Progress progress={45} size="sm" color="dark" />
      <div className="text-base font-medium dark:text-white">Default</div>
      <Progress progress={45} size="md" color="dark" />
      <div className="text-lg font-medium dark:text-white">Large</div>
      <Progress progress={45} size="lg" color="dark" />
      <div className="text-lg font-medium dark:text-white">Extra Large</div>
      <Progress progress={45} size="xl" color="dark" />
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-medium dark:text-white">Small</div>
      <Progress progress={45} size="sm" color="dark" />
      <div className="text-base font-medium dark:text-white">Default</div>
      <Progress progress={45} size="md" color="dark" />
      <div className="text-lg font-medium dark:text-white">Large</div>
      <Progress progress={45} size="lg" color="dark" />
      <div className="text-lg font-medium dark:text-white">Extra Large</div>
      <Progress progress={45} size="xl" color="dark" />
    </div>
  );
}

export const sizing: CodeData = {
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
  githubSlug: "progress/progress.sizing.tsx",
  component: <Component />,
};
