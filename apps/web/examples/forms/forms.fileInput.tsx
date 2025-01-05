import { FileInput, Label } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { FileInput, Label } from "flowbite-react";

export function Component() {
  return (
    <div id="fileUpload" className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="file" value="Upload file" />
      </div>
      <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
    </div>
  );
}
`;

export function Component() {
  return (
    <div id="fileUpload" className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="file" value="Upload file" />
      </div>
      <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
    </div>
  );
}

export const fileInput: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "forms/forms.fileInput.tsx",
  component: <Component />,
};
