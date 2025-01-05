import { FileInput, Label } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { FileInput, Label } from "flowbite-react";

export function Component() {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload file" />
      </div>
      <FileInput id="file-upload" />
    </div>
  );
}
`;

export function Component() {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload file" />
      </div>
      <FileInput id="file-upload" />
    </div>
  );
}

export const root: CodeData = {
  type: "single",
  code: [
    {
      fileName: "index",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "fileInput/fileInput.root.tsx",
  component: <Component />,
};
