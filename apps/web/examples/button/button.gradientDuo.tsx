import { Button } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Button } from "flowbite-react";

function Component() {
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

const codeRSC = `
import { Button } from "flowbite-react";

function Component() {
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

function Component() {
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
  githubSlug: "button/button.gradientDuo.tsx",
  component: <Component />,
};
