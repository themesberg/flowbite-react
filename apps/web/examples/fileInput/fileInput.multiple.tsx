import { FileInput, Label } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { FileInput, Label } from "flowbite-react";

export function Component() {
  return (
    <div>
      <div>
        <Label htmlFor="multiple-file-upload" value="Upload multiple files" />
      </div>
      <FileInput id="multiple-file-upload" multiple />
    </div>
  );
}
`;

export function Component() {
  return (
    <div>
      <div>
        <Label htmlFor="multiple-file-upload" value="Upload multiple files" />
      </div>
      <FileInput id="multiple-file-upload" multiple />
    </div>
  );
}

export const multiple: CodeData = {
  type: "single",
  code: [
    {
      fileName: "index",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "fileInput/fileInput.multiple.tsx",
  component: <Component />,
};
