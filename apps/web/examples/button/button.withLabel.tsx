import { Button } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button } from "flowbite-react";

export function Component() {
  return <Button label="2">Messages</Button>;
}
`;

export function Component() {
  return <Button label="2">Messages</Button>;
}

export const withLabel: CodeData = {
  type: "single",
  code: [
    {
      fileName: "index",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "button/button.withLabel.tsx",
  component: <Component />,
};
