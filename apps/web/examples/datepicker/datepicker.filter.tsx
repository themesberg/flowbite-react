import { Datepicker, Views } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Datepicker, Views } from "flowbite-react";

const filterFn = (date: Date, view: Views) => {
  if (view === Views.Days) {
    const day = date.getDay();
    return day >= 1 && day <= 5;
  }
  return true;
};

export function Component() {
  return <Datepicker filterDate={filterFn} />;
}
`;

const filterFn = (date: Date, view: Views) => {
  if (view === Views.Days) {
    const day = date.getDay();
    return day >= 1 && day <= 5;
  }
  return true;
};

export function Component() {
  return <Datepicker filterDate={filterFn} />;
}

export const filter: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "datepicker/datepicker.filter.tsx",
  component: <Component />,
};
