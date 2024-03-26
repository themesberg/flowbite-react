import { Datepicker } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
'use client';

import { Datepicker } from "flowbite-react";

function Component() {
  return <Datepicker inputFormat="dd-MMM-yyyy" />;
}
`;

const codeRSC = `
import { Datepicker } from "flowbite-react";

function Component() {
  return <Datepicker inputFormat="dd-MMM-yyyy" />;
}
`;

function Component() {
  return <Datepicker inputFormat="dd-MMM-yyyy" />;
}

export const format: CodeData = {
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
  githubSlug: "datepicker/datepicker.format.tsx",
  component: <Component />,
};
