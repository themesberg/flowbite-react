"use client";

import { Clipboard } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Clipboard } from "flowbite-react"

export function Component() {
  return (
    <div className="grid w-full max-w-[23rem] grid-cols-8 gap-2">
        <label htmlFor="npm-install" className="sr-only">
            Label
        </label>
        <input id="npm-install" type="text"
            className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            value="npm install flowbite-react"
            disabled
            readOnly
            />
         <Clipboard.WithIcon valueToCopy="npm install flowbite-react" />
    </div>
  )
}
`;

export function Component() {
  return (
    <div className="grid w-full max-w-[23rem] grid-cols-8 gap-2">
      <label htmlFor="npm-install" className="sr-only">
        Label
      </label>
      <input
        id="npm-install"
        type="text"
        className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        value="npm install flowbite-react"
        disabled
        readOnly
      />
      <Clipboard.WithIcon valueToCopy="npm install flowbite-react" />
    </div>
  );
}

export const withIcon: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "clipboard/clipboard.withIcon.tsx",
  component: <Component />,
};
