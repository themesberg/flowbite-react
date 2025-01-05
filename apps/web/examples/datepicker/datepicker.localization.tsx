import { Datepicker } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Datepicker } from "flowbite-react";

export function Component() {
  return <Datepicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
}
`;

export function Component() {
  return <Datepicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
}

export const localization: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "datepicker/datepicker.localization.tsx",
  component: <Component />,
};
