import { Datepicker } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Datepicker } from "flowbite-react";

function Component() {
  return <Datepicker language="ptBR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
}
`;

const codeRSC = `
import { Datepicker } from "flowbite-react";

function Component() {
  return <Datepicker language="ptBR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
}
`;

function Component() {
  return <Datepicker language="ptBR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
}

export const localization: CodeData = {
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
  githubSlug: "datepicker/datepicker.localization.tsx",
  component: <Component />,
};
