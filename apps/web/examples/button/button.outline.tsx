import { Button } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to Blue
      </Button>
      <Button outline gradientDuoTone="cyanToBlue">
        Cyan to Blue
      </Button>
      <Button outline gradientDuoTone="greenToBlue">
        Green to Blue
      </Button>
      <Button outline gradientDuoTone="purpleToPink">
        Purple to Pink
      </Button>
      <Button outline gradientDuoTone="pinkToOrange">
        Pink to Orange
      </Button>
      <Button outline gradientDuoTone="tealToLime">
        Teal to Lime
      </Button>
      <Button outline gradientDuoTone="redToYellow">
        Red to Yellow
      </Button>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to Blue
      </Button>
      <Button outline gradientDuoTone="cyanToBlue">
        Cyan to Blue
      </Button>
      <Button outline gradientDuoTone="greenToBlue">
        Green to Blue
      </Button>
      <Button outline gradientDuoTone="purpleToPink">
        Purple to Pink
      </Button>
      <Button outline gradientDuoTone="pinkToOrange">
        Pink to Orange
      </Button>
      <Button outline gradientDuoTone="tealToLime">
        Teal to Lime
      </Button>
      <Button outline gradientDuoTone="redToYellow">
        Red to Yellow
      </Button>
    </div>
  );
}

export const outline: CodeData = {
  type: "single",
  code: [
    {
      fileName: "index",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "button/button.outline.tsx",
  component: <Component />,
};
