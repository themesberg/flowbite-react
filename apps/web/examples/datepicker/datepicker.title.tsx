import { Datepicker } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Datepicker } from "flowbite-react";

export function Component() {
  return <Datepicker title="Flowbite Datepicker" />
}
`;

const codeRSC = `
import { Datepicker } from "flowbite-react";

export function Component() {
  return <Datepicker title="Flowbite Datepicker" />
}
`;

export function Component() {
  return <Datepicker title="Flowbite Datepicker" />;
}

export const title: CodeData = {
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
  githubSlug: "datepicker/datepicker.title.tsx",
  component: <Component />,
};
