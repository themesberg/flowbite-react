"use client";

import { Button, ButtonGroup } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button, ButtonGroup } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup outline>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientMonochrome="info">Profile</Button>
        <Button gradientMonochrome="info">Settings</Button>
        <Button gradientMonochrome="info">Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientDuoTone="cyanToBlue">Profile</Button>
        <Button gradientDuoTone="cyanToBlue">Settings</Button>
        <Button gradientDuoTone="cyanToBlue">Messages</Button>
      </ButtonGroup>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup outline>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientMonochrome="info">Profile</Button>
        <Button gradientMonochrome="info">Settings</Button>
        <Button gradientMonochrome="info">Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientDuoTone="cyanToBlue">Profile</Button>
        <Button gradientDuoTone="cyanToBlue">Settings</Button>
        <Button gradientDuoTone="cyanToBlue">Messages</Button>
      </ButtonGroup>
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
  githubSlug: "buttonGroup/buttonGroup.outline.tsx",
  component: <Component />,
};
