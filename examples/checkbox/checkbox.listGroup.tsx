import { type CodeData } from '~/components/code-demo';
import { Checkbox, Label } from '~/src';

const code = `
'use client';

import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Technology</h3>
      <ul className="w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="vue-js-list-checkbox" />
            <Label htmlFor="vue-js-list-checkbox" className="w-100 ml-2 flex py-4">
              Vue JS
            </Label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="react-list-checkbox" />
            <Label htmlFor="react-list-checkbox" className="w-100 ml-2 flex py-4">
              React
            </Label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="angular-list-checkbox" />
            <Label htmlFor="angular-list-checkbox" className="w-100 ml-2 flex py-4">
              Angular
            </Label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="laravel-list-checkbox" />
            <Label htmlFor="laravel-list-checkbox" className="w-100 ml-2 flex py-4">
              Laravel
            </Label>
          </div>
        </li>
      </ul>
    </div>
  );
}
`;

const codeRSC = `
import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Technology</h3>
      <ul className="w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="vue-js-list-checkbox" />
            <Label htmlFor="vue-js-list-checkbox" className="w-100 ml-2 flex py-4">
              Vue JS
            </Label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="react-list-checkbox" />
            <Label htmlFor="react-list-checkbox" className="w-100 ml-2 flex py-4">
              React
            </Label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="angular-list-checkbox" />
            <Label htmlFor="angular-list-checkbox" className="w-100 ml-2 flex py-4">
              Angular
            </Label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="laravel-list-checkbox" />
            <Label htmlFor="laravel-list-checkbox" className="w-100 ml-2 flex py-4">
              Laravel
            </Label>
          </div>
        </li>
      </ul>
    </div>
  );
}
`;

function Component() {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Technology</h3>
      <ul className="w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="vue-js-list-checkbox" />
            <Label htmlFor="vue-js-list-checkbox" className="w-100 ml-2 flex py-4">
              Vue JS
            </Label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="react-list-checkbox" />
            <Label htmlFor="react-list-checkbox" className="w-100 ml-2 flex py-4">
              React
            </Label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="angular-list-checkbox" />
            <Label htmlFor="angular-list-checkbox" className="w-100 ml-2 flex py-4">
              Angular
            </Label>
          </div>
        </li>
        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3 w-full">
            <Checkbox id="laravel-list-checkbox" />
            <Label htmlFor="laravel-list-checkbox" className="w-100 ml-2 flex py-4">
              Laravel
            </Label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export const listGroup: CodeData = {
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
  githubSlug: 'checkbox/checkbox.listGroup.tsx',
  component: <Component />,
};
