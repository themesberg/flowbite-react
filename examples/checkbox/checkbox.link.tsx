import { type CodeData } from '~/components/code-demo';
import { Checkbox, Label } from '~/src';
import Link from 'next/link';

const code = `
'use client';

import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="agree" />
      <Label htmlFor="agree" className="flex">
        I agree with the&nbsp;
        <Link href="/forms" className="text-cyan-600 hover:underline dark:text-cyan-500">
          terms and conditions.
        </Link>
      </Label>
    </div>
  );
}
`;

const codeRSC = `
import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="agree" />
      <Label htmlFor="agree" className="flex">
        I agree with the&nbsp;
        <Link href="/forms" className="text-cyan-600 hover:underline dark:text-cyan-500">
          terms and conditions.
        </Link>
      </Label>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="agree" />
      <Label htmlFor="agree" className="flex">
        I agree with the&nbsp;
        <Link href="/forms" className="text-cyan-600 hover:underline dark:text-cyan-500">
          terms and conditions.
        </Link>
      </Label>
    </div>
  );
}

export const link: CodeData = {
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
  githubSlug: 'checkbox/checkbox.link.tsx',
  component: <Component />,
};
