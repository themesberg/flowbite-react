import { DefaultMockup } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
import { DefaultMockup } from "flowbite-react";

export function Component() {
  return (
    <DefaultMockup>
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
    <DefaultMockup>
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

export const root: CodeData = {
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
      code,
    },
  ],
  githubSlug: "mockup/mockup.root.tsx",
  component: <Component />,
};
