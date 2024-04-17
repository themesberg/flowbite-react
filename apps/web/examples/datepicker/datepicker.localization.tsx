import { Datepicker } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Datepicker } from "flowbite-react";

<<<<<<< HEAD
export function Component() {
  return <Datepicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
=======
function Component() {
  return <Datepicker language="ptBR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
>>>>>>> e9b5fa9 (now supporting localization with supported locaziation from date-fns)
}
`;

const codeRSC = `
import { Datepicker } from "flowbite-react";

<<<<<<< HEAD
export function Component() {
  return <Datepicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
}
`;

export function Component() {
  return <Datepicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
=======
function Component() {
  return <Datepicker language="ptBR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
}
`;

function Component() {
  return <Datepicker language="ptBR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
>>>>>>> e9b5fa9 (now supporting localization with supported locaziation from date-fns)
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
