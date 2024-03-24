import { Datepicker } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Datepicker } from "flowbite-react";

function Component() {
  return <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />;
}
`;

const codeRSC = `
import { Datepicker } from "flowbite-react";

function Component() {
  return <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />;
}
`;

function Component() {
  return <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />;
}

export const range: CodeData = {
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
  githubSlug: "datepicker/datepicker.range.tsx",
  component: <Component />,
};
