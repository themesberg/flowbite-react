import { Button } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Button } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap items-start gap-2">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Base</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra large</Button>
    </div>
  );
}
`;

const codeRSC = `
import { Button } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap items-start gap-2">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Base</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra large</Button>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap items-start gap-2">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Base</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra large</Button>
    </div>
  );
}

export const sizes: CodeData = {
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
  githubSlug: "button/button.sizes.tsx",
  component: <Component />,
};
