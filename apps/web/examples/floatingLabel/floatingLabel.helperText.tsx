import { FloatingLabel } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { FloatingLabel } from "flowbite-react";

export function Component() {
  return (
    <FloatingLabel
      variant="filled"
      label="Floating Helper"
      helperText="Remember, contributions to this topic should follow our Community Guidelines."
    />
  );
}
`;

export function Component() {
  return (
    <FloatingLabel
      variant="filled"
      label="Floating Helper"
      helperText="Remember, contributions to this topic should follow our Community Guidelines."
    />
  );
}

export const helperText: CodeData = {
  type: "single",
  code: [
    {
      fileName: "index",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "floatingLabel/floatingLabel.helperText.tsx",
  component: <Component />,
};
