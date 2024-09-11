import { Button, Tooltip } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Button, Tooltip } from "flowbite-react";

export function Component() {
  return (
    <Tooltip content="Tooltip content" arrow={false}>
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}
`;

const codeRSC = `
import { Button, Tooltip } from "flowbite-react";

export function Component() {
  return (
    <Tooltip content="Tooltip content" arrow={false}>
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}
`;

export function Component() {
  return (
    <Tooltip content="Tooltip content" arrow={false}>
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}

export const disableArrow: CodeData = {
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
  githubSlug: "tooltip/tooltip.disableArrow.tsx",
  component: <Component />,
};
