import { GooglePixelMockup } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { GooglePixelMockup } from "flowbite-react";

export function Component() {
  return (
    <GooglePixelMockup>
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
    </GooglePixelMockup>
  );
}
`;

const codeRSC = `
import { GooglePixelMockup } from "flowbite-react";

export function Component() {
  return (
    <GooglePixelMockup>
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
    </GooglePixelMockup>
  );
}
`;

export function Component() {
  return (
    <GooglePixelMockup>
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
    </GooglePixelMockup>
  );
}

export const googlePixel: CodeData = {
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
  githubSlug: "mockup/mockup.googlePixel.tsx",
  component: <Component />,
};
