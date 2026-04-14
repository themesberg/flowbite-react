import { Datepicker } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Datepicker } from "flowbite-react";

export function Component() {
  return <Datepicker showOutsideDays={false} />;
}
`;

export function Component() {
  return <Datepicker showOutsideDays={false} />;
}

export const showOutsideDays: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "datepicker/datepicker.showOutsideDays.tsx",
  component: <Component />,
};
