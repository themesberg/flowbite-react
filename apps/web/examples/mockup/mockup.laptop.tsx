import { LaptopMockup } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { LaptopMockup } from "flowbite-react";

export function Component() {
  return (
    <LaptopMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
        className="h-[156px] w-full rounded-lg md:h-[278px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
        className="hidden h-[156px] w-full rounded-lg md:h-[278px] dark:block"
        alt=""
      />
    </LaptopMockup>
  );
}
`;

const codeRSC = `
import { LaptopMockup } from "flowbite-react";

export function Component() {
  return (
    <LaptopMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
        className="h-[156px] w-full rounded-lg md:h-[278px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
        className="hidden h-[156px] w-full rounded-lg md:h-[278px] dark:block"
        alt=""
      />
    </LaptopMockup>
  );
}
`;

export function Component() {
  return (
    <LaptopMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
        className="h-[156px] w-full rounded-lg md:h-[278px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
        className="hidden h-[156px] w-full rounded-lg md:h-[278px] dark:block"
        alt=""
      />
    </LaptopMockup>
  );
}

export const laptop: CodeData = {
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
  githubSlug: "mockup/mockup.laptop.tsx",
  component: <Component />,
};
