import { Avatar } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Avatar } from "flowbite-react";

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar />
      <Avatar rounded />
    </div>
  );
}
`;

const codeRSC = `
import { Avatar } from "flowbite-react";

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar />
      <Avatar rounded />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar />
      <Avatar rounded />
    </div>
  );
}

export const placeholder: CodeData = {
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
  githubSlug: "avatar/avatar.placeholder.tsx",
  component: <Component />,
};
