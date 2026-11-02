import { Datepicker } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Datepicker } from "flowbite-react";

export function Component() {
  return (
    <Datepicker
      language="en-GB"
      dateFormat={{ day: "2-digit", month: "2-digit", year: "numeric" }}
    />
  );
}
`;

export function Component() {
  return <Datepicker language="en-GB" dateFormat={{ day: "2-digit", month: "2-digit", year: "numeric" }} />;
}

export const format: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "datepicker/datepicker.format.tsx",
  component: <Component />,
};
