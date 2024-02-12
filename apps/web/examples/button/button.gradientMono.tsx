import { Button } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Button } from "flowbite-react";

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button gradientMonochrome="info">Info</Button>
      <Button gradientMonochrome="success">Success</Button>
      <Button gradientMonochrome="cyan">Cyan</Button>
      <Button gradientMonochrome="teal">Teal</Button>
      <Button gradientMonochrome="lime">Lime</Button>
      <Button gradientMonochrome="failure">Failure</Button>
      <Button gradientMonochrome="pink">Pink</Button>
      <Button gradientMonochrome="purple">Purple</Button>
    </div>
  );
}
`;

const codeRSC = `
import { Button } from "flowbite-react";

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button gradientMonochrome="info">Info</Button>
      <Button gradientMonochrome="success">Success</Button>
      <Button gradientMonochrome="cyan">Cyan</Button>
      <Button gradientMonochrome="teal">Teal</Button>
      <Button gradientMonochrome="lime">Lime</Button>
      <Button gradientMonochrome="failure">Failure</Button>
      <Button gradientMonochrome="pink">Pink</Button>
      <Button gradientMonochrome="purple">Purple</Button>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button gradientMonochrome="info">Info</Button>
      <Button gradientMonochrome="success">Success</Button>
      <Button gradientMonochrome="cyan">Cyan</Button>
      <Button gradientMonochrome="teal">Teal</Button>
      <Button gradientMonochrome="lime">Lime</Button>
      <Button gradientMonochrome="failure">Failure</Button>
      <Button gradientMonochrome="pink">Pink</Button>
      <Button gradientMonochrome="purple">Purple</Button>
    </div>
  );
}

export const gradientMono: CodeData = {
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
  githubSlug: "button/button.gradientMono.tsx",
  component: <Component />,
};
