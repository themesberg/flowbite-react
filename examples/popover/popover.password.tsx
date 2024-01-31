'use client';

import { type CodeData } from '~/components/code-demo';
import { Button, Checkbox, Label, Popover, TextInput } from '~/src';

const code = `
'use client';

import { Button, Checkbox, Label, Popover, TextInput } from 'flowbite-react';

function Component() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <Popover
          trigger="hover"
          content={
            <div className="space-y-2 p-3">
              <h3 className="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
              <div className="grid grid-cols-4 gap-2">
                <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
              </div>
              <p>It’s better to have:</p>
              <ul>
                <li className="mb-1 flex items-center">
                  <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  Upper & lower case letters
                </li>
                <li className="mb-1 flex items-center">
                  <svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  A symbol (#$&)
                </li>
                <li className="flex items-center">
                  <svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  A longer password (min. 12 chars.)
                </li>
              </ul>
            </div>
          }
        >
          <TextInput id="password1" type="password" required />
        </Popover>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
`;

function Component() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <Popover
          trigger="hover"
          content={
            <div className="space-y-2 p-3">
              <h3 className="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
              <div className="grid grid-cols-4 gap-2">
                <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
              </div>
              <p>It’s better to have:</p>
              <ul>
                <li className="mb-1 flex items-center">
                  <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  Upper & lower case letters
                </li>
                <li className="mb-1 flex items-center">
                  <svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  A symbol (#$&)
                </li>
                <li className="flex items-center">
                  <svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  A longer password (min. 12 chars.)
                </li>
              </ul>
            </div>
          }
        >
          <TextInput id="password1" type="password" required />
        </Popover>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const password: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
  ],
  githubSlug: 'popover/popover.password.tsx',
  component: <Component />,
};
