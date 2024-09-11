import { FileInput, Label } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

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

const codeRSC = `

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
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "fileInput/fileInput.multiple.tsx",
  component: <Component />,
};
