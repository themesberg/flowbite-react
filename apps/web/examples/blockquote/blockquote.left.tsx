import { Blockquote } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Blockquote } from "flowbite-react";

export function Component() {
  return (
    <Blockquote>
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
      complex dashboard. Perfect choice for your next SaaS application."
    </Blockquote>
  );
}
`;

const codeRSC = `
import { Blockquote } from "flowbite-react";

export function Component() {
  return (
    <Blockquote>
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
      complex dashboard. Perfect choice for your next SaaS application."
    </Blockquote>
  );
}
`;

export function Component() {
  return (
    <Blockquote>
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
      complex dashboard. Perfect choice for your next SaaS application."
    </Blockquote>
  );
}

export const left: CodeData = {
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
  githubSlug: "blockquote/blockquote.left.tsx",
  component: <Component />,
};
