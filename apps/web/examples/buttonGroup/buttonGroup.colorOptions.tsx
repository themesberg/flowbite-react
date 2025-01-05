"use client";

import { Button, ButtonGroup } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Button, ButtonGroup } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup>
        <Button color="info">Profile</Button>
        <Button color="info">Settings</Button>
        <Button color="info">Messages</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button gradientMonochrome="info">Profile</Button>
        <Button gradientMonochrome="info">Settings</Button>
        <Button gradientMonochrome="info">Messages</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button gradientDuoTone="greenToBlue">Profile</Button>
        <Button gradientDuoTone="greenToBlue">Settings</Button>
        <Button gradientDuoTone="greenToBlue">Messages</Button>
      </ButtonGroup>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup>
        <Button color="info">Profile</Button>
        <Button color="info">Settings</Button>
        <Button color="info">Messages</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button gradientMonochrome="info">Profile</Button>
        <Button gradientMonochrome="info">Settings</Button>
        <Button gradientMonochrome="info">Messages</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button gradientDuoTone="greenToBlue">Profile</Button>
        <Button gradientDuoTone="greenToBlue">Settings</Button>
        <Button gradientDuoTone="greenToBlue">Messages</Button>
      </ButtonGroup>
    </div>
  );
}

export const colorOptions: CodeData = {
  type: "single",
  code: [
    {
      fileName: "index",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "buttonGroup/buttonGroup.colorOptions.tsx",
  component: <Component />,
};
