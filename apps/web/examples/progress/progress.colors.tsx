import { Progress } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Progress } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-medium">Dark</div>
      <Progress progress={45} color="dark" />
      <div className="text-base font-medium text-blue-700">Blue</div>
      <Progress progress={45} color="blue" />
      <div className="text-base font-medium text-red-700">Red</div>
      <Progress progress={45} color="red" />
      <div className="text-base font-medium text-green-700">Green</div>
      <Progress progress={45} color="green" />
      <div className="text-base font-medium text-yellow-700">Yellow</div>
      <Progress progress={45} color="yellow" />
      <div className="text-base font-medium text-indigo-700">Indigo</div>
      <Progress progress={45} color="indigo" />
      <div className="text-base font-medium text-purple-700">Purple</div>
      <Progress progress={45} color="purple" />
      <div className="text-base font-medium text-cyan-700">Cyan</div>
      <Progress progress={45} color="cyan" />
      <div className="text-base font-medium text-gray-700">Gray</div>
      <Progress progress={45} color="gray" />
      <div className="text-base font-medium text-lime-700">Lime</div>
      <Progress progress={45} color="lime" />
      <div className="text-base font-medium text-pink-700">Pink</div>
      <Progress progress={45} color="pink" />
      <div className="text-base font-medium text-teal-700">Teal</div>
      <Progress progress={45} color="teal" />
    </div>
  );
}
`;

const codeRSC = `
import { Progress } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-medium">Dark</div>
      <Progress progress={45} color="dark" />
      <div className="text-base font-medium text-blue-700">Blue</div>
      <Progress progress={45} color="blue" />
      <div className="text-base font-medium text-red-700">Red</div>
      <Progress progress={45} color="red" />
      <div className="text-base font-medium text-green-700">Green</div>
      <Progress progress={45} color="green" />
      <div className="text-base font-medium text-yellow-700">Yellow</div>
      <Progress progress={45} color="yellow" />
      <div className="text-base font-medium text-indigo-700">Indigo</div>
      <Progress progress={45} color="indigo" />
      <div className="text-base font-medium text-purple-700">Purple</div>
      <Progress progress={45} color="purple" />
      <div className="text-base font-medium text-cyan-700">Cyan</div>
      <Progress progress={45} color="cyan" />
      <div className="text-base font-medium text-gray-700">Gray</div>
      <Progress progress={45} color="gray" />
      <div className="text-base font-medium text-lime-700">Lime</div>
      <Progress progress={45} color="lime" />
      <div className="text-base font-medium text-pink-700">Pink</div>
      <Progress progress={45} color="pink" />
      <div className="text-base font-medium text-teal-700">Teal</div>
      <Progress progress={45} color="teal" />
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-medium">Dark</div>
      <Progress progress={45} color="dark" />
      <div className="text-base font-medium text-blue-700">Blue</div>
      <Progress progress={45} color="blue" />
      <div className="text-base font-medium text-red-700">Red</div>
      <Progress progress={45} color="red" />
      <div className="text-base font-medium text-green-700">Green</div>
      <Progress progress={45} color="green" />
      <div className="text-base font-medium text-yellow-700">Yellow</div>
      <Progress progress={45} color="yellow" />
      <div className="text-base font-medium text-indigo-700">Indigo</div>
      <Progress progress={45} color="indigo" />
      <div className="text-base font-medium text-purple-700">Purple</div>
      <Progress progress={45} color="purple" />
      <div className="text-base font-medium text-cyan-700">Cyan</div>
      <Progress progress={45} color="cyan" />
      <div className="text-base font-medium text-gray-700">Gray</div>
      <Progress progress={45} color="gray" />
      <div className="text-base font-medium text-lime-700">Lime</div>
      <Progress progress={45} color="lime" />
      <div className="text-base font-medium text-pink-700">Pink</div>
      <Progress progress={45} color="pink" />
      <div className="text-base font-medium text-teal-700">Teal</div>
      <Progress progress={45} color="teal" />
    </div>
  );
}

export const colors: CodeData = {
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
  githubSlug: "progress/progress.colors.tsx",
  component: <Component />,
};
