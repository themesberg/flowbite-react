import { type CodeData } from '~/components/code-demo';
import { Checkbox, Label } from '~/src';

const code = `
'use client';

import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-1 items-center rounded border border-gray-200 pl-4 dark:border-gray-700">
        <Checkbox id="default-radio" defaultChecked />
        <Label htmlFor="default-radio" className="w-100 ml-2 flex py-4">
          Default radio
        </Label>
      </div>
      <div className="flex flex-1 items-center rounded border border-gray-200 pl-4 dark:border-gray-700">
        <Checkbox id="checked-state" />
        <Label htmlFor="checked-state" className="w-100 ml-2 flex py-4">
          Checked state
        </Label>
      </div>
    </div>
  );
}
`;

const codeRSC = `
import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-1 items-center rounded border border-gray-200 pl-4 dark:border-gray-700">
        <Checkbox id="default-radio" defaultChecked />
        <Label htmlFor="default-radio" className="w-100 ml-2 flex py-4">
          Default radio
        </Label>
      </div>
      <div className="flex flex-1 items-center rounded border border-gray-200 pl-4 dark:border-gray-700">
        <Checkbox id="checked-state" />
        <Label htmlFor="checked-state" className="w-100 ml-2 flex py-4">
          Checked state
        </Label>
      </div>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-1 items-center rounded border border-gray-200 pl-4 dark:border-gray-700">
        <Checkbox id="default-radio" defaultChecked />
        <Label htmlFor="default-radio" className="w-100 ml-2 flex py-4">
          Default radio
        </Label>
      </div>
      <div className="flex flex-1 items-center rounded border border-gray-200 pl-4 dark:border-gray-700">
        <Checkbox id="checked-state" />
        <Label htmlFor="checked-state" className="w-100 ml-2 flex py-4">
          Checked state
        </Label>
      </div>
    </div>
  );
}

export const bordered: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'checkbox/checkbox.bordered.tsx',
  component: <Component />,
};
