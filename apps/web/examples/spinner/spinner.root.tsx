import { Spinner } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Spinner } from "flowbite-react";

export function Component() {
  return <Spinner aria-label="Default status example" />;
}
`;

const codeRSC = `
import { Spinner } from "flowbite-react";

export function Component() {
  return <Spinner aria-label="Default status example" />;
}
`;

export function Component() {
  return <Spinner aria-label="Default status example" />;
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
  githubSlug: "spinner/spinner.root.tsx",
  component: <Component />,
};
