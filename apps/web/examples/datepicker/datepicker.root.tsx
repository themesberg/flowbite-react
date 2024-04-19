import { Datepicker } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Datepicker } from "flowbite-react";

export function Component() {
  return <Datepicker />;
}
`;

const codeRSC = `
import { Datepicker } from "flowbite-react";

export function Component() {
  return <Datepicker />;
}
`;

export function Component() {
  return <Datepicker />;
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
  githubSlug: "datepicker/datepicker.root.tsx",
  component: <Component />,
};
