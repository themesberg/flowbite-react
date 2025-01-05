import { Label, TextInput } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Label, TextInput } from "flowbite-react";

export function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="username3" value="Username" />
      </div>
      <TextInput id="username3" placeholder="Bonnie Green" addon="@" required />
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="username3" value="Username" />
      </div>
      <TextInput id="username3" placeholder="Bonnie Green" addon="@" required />
    </div>
  );
}

export const inputAddon: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "forms/forms.inputAddon.tsx",
  component: <Component />,
};
