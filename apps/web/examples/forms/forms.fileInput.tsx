import { FileInput, Label } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

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

const codeRSC = `
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
  githubSlug: "forms/forms.fileInput.tsx",
  component: <Component />,
};
