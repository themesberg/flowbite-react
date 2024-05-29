import { DefaultMockup, getTheme } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { DefaultMockup, getTheme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function Component() {
  return (
    <DefaultMockup theme={{ root: twMerge(getTheme().mockup.default.root, "border-gray-300") }}>
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
        className="h-[572px] w-[272px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
        className="hidden h-[572px] w-[272px] dark:block"
        alt=""
      />
    </DefaultMockup>
  );
}
`;

const codeRSC = `
import { DefaultMockup, getTheme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function Component() {
  return (
    <DefaultMockup theme={{ root: twMerge(getTheme().mockup.default.root, "border-gray-300") }}>
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
        className="h-[572px] w-[272px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
        className="hidden h-[572px] w-[272px] dark:block"
        alt=""
      />
    </DefaultMockup>
  );
}
`;

export function Component() {
  return (
    <DefaultMockup theme={{ root: twMerge(getTheme().mockup.default.root, "border-gray-300") }}>
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
        className="h-[572px] w-[272px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
        className="hidden h-[572px] w-[272px] dark:block"
        alt=""
      />
    </DefaultMockup>
  );
}

export const colors: CodeData = {
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
  githubSlug: "mockup/mockup.colors.tsx",
  component: <Component />,
};
