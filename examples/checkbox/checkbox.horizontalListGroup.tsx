import { type CodeData } from '~/components/code-demo';
import { Checkbox, Label } from '~/src';

const code = `
'use client';

import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
      <ul className="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <Checkbox id="vue-js-hlist-checkbox" />
            <Label htmlFor="vue-js-hlist-checkbox" className="w-100 ml-2 flex py-4">
              {'Vue JS'}
            </Label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <Checkbox id="react-js-hlist-checkbox" />
            <Label htmlFor="react-js-hlist-checkbox" className="w-100 ml-2 flex py-4">
              {'React'}
            </Label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <Checkbox id="angular-js-hlist-checkbox" />
            <Label htmlFor="angular-js-hlist-checkbox" className="w-100 ml-2 flex py-4">
              {'Angular'}
            </Label>
          </div>
        </li>
        <li className="w-full dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="laravel-hlist-checkbox" />
            <Label htmlFor="laravel-hlist-checkbox" className="w-100 ml-2 flex py-4">
              {'Laravel'}
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
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
      <ul className="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <Checkbox id="vue-js-hlist-checkbox" />
            <Label htmlFor="vue-js-hlist-checkbox" className="w-100 ml-2 flex py-4">
              {'Vue JS'}
            </Label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <Checkbox id="react-js-hlist-checkbox" />
            <Label htmlFor="react-js-hlist-checkbox" className="w-100 ml-2 flex py-4">
              {'React'}
            </Label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <Checkbox id="angular-js-hlist-checkbox" />
            <Label htmlFor="angular-js-hlist-checkbox" className="w-100 ml-2 flex py-4">
              {'Angular'}
            </Label>
          </div>
        </li>
        <li className="w-full dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="laravel-hlist-checkbox" />
            <Label htmlFor="laravel-hlist-checkbox" className="w-100 ml-2 flex py-4">
              {'Laravel'}
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
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
      <ul className="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <Checkbox id="vue-js-hlist-checkbox" />
            <Label htmlFor="vue-js-hlist-checkbox" className="w-100 ml-2 flex py-4">
              Vue JS
            </Label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <Checkbox id="react-js-hlist-checkbox" />
            <Label htmlFor="react-js-hlist-checkbox" className="w-100 ml-2 flex py-4">
              React
            </Label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center pl-3">
            <Checkbox id="angular-js-hlist-checkbox" />
            <Label htmlFor="angular-js-hlist-checkbox" className="w-100 ml-2 flex py-4">
              Angular
            </Label>
          </div>
        </li>
        <li className="w-full dark:border-gray-600">
          <div className="flex items-center pl-3">
            <Checkbox id="laravel-hlist-checkbox" />
            <Label htmlFor="laravel-hlist-checkbox" className="w-100 ml-2 flex py-4">
              Laravel
            </Label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export const horizontalListGroup: CodeData = {
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
  githubSlug: 'checkbox/checkbox.horizontalListGroup.tsx',
  component: <Component />,
};
