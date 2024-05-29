import { TabletMockup } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { DefaultMockup } from "flowbite-react";

export function Component() {
  return (
    <TabletMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
        className="h-[426px] md:h-[654px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
        className="hidden h-[426px] md:h-[654px] dark:block"
        alt=""
      />
    </TabletMockup>
  );
}
`;

const codeRSC = `
import { DefaultMockup } from "flowbite-react";

export function Component() {
  return (
    <TabletMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
        className="h-[426px] md:h-[654px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
        className="hidden h-[426px] md:h-[654px] dark:block"
        alt=""
      />
    </TabletMockup>
  );
}
`;

export function Component() {
  return (
    <TabletMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
        className="h-[426px] md:h-[654px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
        className="hidden h-[426px] md:h-[654px] dark:block"
        alt=""
      />
    </TabletMockup>
  );
}

export const tablet: CodeData = {
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
  githubSlug: "mockup/mockup.tablet.tsx",
  component: <Component />,
};
