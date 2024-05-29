import { SmartwatchMockup } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { DefaultMockup } from "flowbite-react";

export function Component() {
  return (
    <SmartwatchMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png"
        className="h-[193px] w-[188px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png"
        className="hidden h-[193px] w-[188px] dark:block"
        alt=""
      />
    </SmartwatchMockup>
  );
}
`;

const codeRSC = `
import { DefaultMockup } from "flowbite-react";

export function Component() {
  return (
    <SmartwatchMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png"
        className="h-[193px] w-[188px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png"
        className="hidden h-[193px] w-[188px] dark:block"
        alt=""
      />
    </SmartwatchMockup>
  );
}
`;

export function Component() {
  return (
    <SmartwatchMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png"
        className="h-[193px] w-[188px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png"
        className="hidden h-[193px] w-[188px] dark:block"
        alt=""
      />
    </SmartwatchMockup>
  );
}

export const smartwatch: CodeData = {
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
  githubSlug: "mockup/mockup.smartwatch.tsx",
  component: <Component />,
};
