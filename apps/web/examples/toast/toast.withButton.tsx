import { Toast, ToastToggle } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Toast } from "flowbite-react";

function Component() {
  return (
    <Toast>
      <div className="text-sm font-normal">Conversation archived.</div>
      <div className="ml-auto flex items-center space-x-2">
        <a
          href="#"
          className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700"
        >
          Undo
        </a>
        <Toast.Toggle />
      </div>
    </Toast>
  );
}
`;

const codeRSC = `
import { Toast, ToastToggle } from "flowbite-react";

function Component() {
  return (
    <Toast>
      <div className="text-sm font-normal">Conversation archived.</div>
      <div className="ml-auto flex items-center space-x-2">
        <a
          href="#"
          className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700"
        >
          Undo
        </a>
        <ToastToggle />
      </div>
    </Toast>
  );
}
`;

function Component() {
  return (
    <Toast>
      <div className="text-sm font-normal">Conversation archived.</div>
      <div className="ml-auto flex items-center space-x-2">
        <a
          href="#"
          className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700"
        >
          Undo
        </a>
        <ToastToggle />
      </div>
    </Toast>
  );
}

export const withButton: CodeData = {
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
  githubSlug: "toast/toast.withButton.tsx",
  component: <Component />,
};
