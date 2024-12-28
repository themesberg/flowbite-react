import { Button } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Button } from "flowbite-react";

export function Component() {
  return <Button label="2">Messages</Button>;
}
`;

const codeRSC = `
import { Button } from "flowbite-react";

export function Component() {
  return <Button label="2">Messages</Button>;
}
`;

export function Component() {
  return <Button label="2">Messages</Button>;
}

export const withLabel: CodeData = {
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
  githubSlug: "button/button.withLabel.tsx",
  component: <Component />,
};
