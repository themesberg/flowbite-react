import { Avatar } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Avatar } from "flowbite-react";

function Component() {
  return (
    <Avatar img="/images/people/profile-picture-5.jpg" rounded>
      <div className="space-y-1 font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
      </div>
    </Avatar>
  );
}
`;

const codeRSC = `
import { Avatar } from "flowbite-react";

function Component() {
  return (
    <Avatar img="/images/people/profile-picture-5.jpg" rounded>
      <div className="space-y-1 font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
      </div>
    </Avatar>
  );
}
`;

function Component() {
  return (
    <Avatar img="/images/people/profile-picture-5.jpg" rounded>
      <div className="space-y-1 font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
      </div>
    </Avatar>
  );
}

export const withText: CodeData = {
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
  githubSlug: "avatar/avatar.withText.tsx",
  component: <Component />,
};
