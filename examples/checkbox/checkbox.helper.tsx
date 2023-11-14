import { type CodeData } from '~/components/code-demo';
import { Checkbox, Label } from '~/src';

const code = `
'use client';

import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div className="flex">
      <div className="flex items-center h-5">
        <Checkbox id="helper-checkbox" />
      </div>
      <div className="ms-2 text-sm">
        <Label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">
          Free shipping via Flowbite
        </Label>
        <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">
          For orders shipped from $25 in books or $29 in other categories
        </p>
      </div>
    </div>
  );
}
`;

const codeRSC = `
import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div className="flex">
      <div className="flex items-center h-5">
        <Checkbox id="helper-checkbox" />
      </div>
      <div className="ms-2 text-sm">
        <Label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">
          Free shipping via Flowbite
        </Label>
        <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">
          For orders shipped from $25 in books or $29 in other categories
        </p>
      </div>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex">
      <div className="flex items-center h-5">
        <Checkbox id="helper-checkbox" />
      </div>
      <div className="ms-2 text-sm">
        <Label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">
          Free shipping via Flowbite
        </Label>
        <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">
          For orders shipped from $25 in books or $29 in other categories
        </p>
      </div>
    </div>
  );
}

export const helper: CodeData = {
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
  githubSlug: 'checkbox/checkbox.helper.tsx',
  component: <Component />,
};
