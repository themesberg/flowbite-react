import { Button } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
      <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
      <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
      <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
      <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
      <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
      <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
      <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
      <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
      <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
      <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
      <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
      <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
    </div>
  );
}

export const gradientDuo: CodeData = {
  type: "single",
  code: [
    {
      fileName: "index",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "button/button.gradientDuo.tsx",
  component: <Component />,
};
