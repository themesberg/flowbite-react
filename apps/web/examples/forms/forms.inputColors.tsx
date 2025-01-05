import { Label, TextInput } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Label, TextInput } from "flowbite-react";

export function Component() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-gray" color="gray" value="Gray" />
        </div>
        <TextInput id="input-gray" placeholder="Input Gray" required color="gray" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-info" color="info" value="Info" />
        </div>
        <TextInput id="input-info" placeholder="Input Info" required color="info" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-success" color="success" value="Success" />
        </div>
        <TextInput id="input-success" placeholder="Input Success" required color="success" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-failure" color="failure" value="Failure" />
        </div>
        <TextInput id="input-failure" placeholder="Input Failure" required color="failure" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-warning" color="warning" value="Warning" />
        </div>
        <TextInput id="input-warning" placeholder="Input Warning" required color="warning" />
      </div>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-gray" color="gray" value="Gray" />
        </div>
        <TextInput id="input-gray" placeholder="Input Gray" required color="gray" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-info" color="info" value="Info" />
        </div>
        <TextInput id="input-info" placeholder="Input Info" required color="info" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-success" color="success" value="Success" />
        </div>
        <TextInput id="input-success" placeholder="Input Success" required color="success" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-failure" color="failure" value="Failure" />
        </div>
        <TextInput id="input-failure" placeholder="Input Failure" required color="failure" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-warning" color="warning" value="Warning" />
        </div>
        <TextInput id="input-warning" placeholder="Input Warning" required color="warning" />
      </div>
    </div>
  );
}

export const inputColors: CodeData = {
  type: "single",
  code: [
    {
      fileName: "index",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "forms/forms.inputColors.tsx",
  component: <Component />,
};
