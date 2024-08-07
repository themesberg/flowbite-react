import { IPhone12Mockup } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
import { IPhone12Mockup } from "flowbite-react";

export function Component() {
  return (
    <IPhone12Mockup>
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
        className="h-[572px] w-[272px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
        className="hidden h-[572px] w-[272px] dark:block"
        alt=""
      />
    </IPhone12Mockup>
  );
}
`;

export function Component() {
  return (
    <IPhone12Mockup>
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
        className="h-[572px] w-[272px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
        className="hidden h-[572px] w-[272px] dark:block"
        alt=""
      />
    </IPhone12Mockup>
  );
}

export const iPhone12: CodeData = {
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
  githubSlug: "mockup/mockup.iPhone12.tsx",
  component: <Component />,
};
