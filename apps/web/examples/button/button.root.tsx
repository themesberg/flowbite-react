import { Button } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button color="alternative">Alternative</Button>
      <Button color="light">Light</Button>
      <Button color="success">Green</Button>
      <Button color="failure">Red</Button>
      <Button color="warning">Yellow</Button>
      <Button color="purple">Purple</Button>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button color="alternative">Alternative</Button>
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button color="success">Green</Button>
      <Button color="failure">Red</Button>
      <Button color="warning">Yellow</Button>
      <Button color="purple">Purple</Button>
    </div>
  );
}

export const root: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "button/button.root.tsx",
  component: <Component />,
};
