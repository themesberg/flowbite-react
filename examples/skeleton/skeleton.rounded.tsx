import type { CodeData } from '~/components/code-demo';
import { Skeleton } from '~/src';

const code = `
'use client';

import { Skeleton } from 'flowbite-react';

function Component() {
  return (
    <div>
      <Skeleton variant='rounded' />
    </div>
  )
}
`;

const codeRSC = `
import { Skeleton } from 'flowbite-react';

function Component() {
  return (
    <div>
      <Skeleton variant='rounded' />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <Skeleton variant="rounded" />
    </div>
  );
}

export const rounded: CodeData = {
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
  githubSlug: 'skeleton/skeleton.rounded.tsx',
  component: <Component />,
};
