import { Datepicker } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Datepicker } from "flowbite-react";

export function Component() {
  return <Datepicker inline />;
}
`;

const codeRSC = `
import { Datepicker } from "flowbite-react";

export function Component() {
  return <Datepicker inline />;
}
`;

export function Component() {
  return <Datepicker inline />;
}

export const inline: CodeData = {
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
  githubSlug: "datepicker/datepicker.inline.tsx",
  component: <Component />,
};
