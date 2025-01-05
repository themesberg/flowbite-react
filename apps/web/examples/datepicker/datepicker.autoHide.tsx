import { Datepicker } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Datepicker } from "flowbite-react";

export function Component() {
  return <Datepicker autoHide={false} />;
}
`;

export function Component() {
  return <Datepicker autoHide={false} />;
}

export const autoHide: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "datepicker/datepicker.autoHide.tsx",
  component: <Component />,
};
