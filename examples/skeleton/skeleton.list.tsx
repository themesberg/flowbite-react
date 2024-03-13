import type { CodeData } from '~/components/code-demo';
import { SkeletonList } from '~/src';

const code = `
'use client';

import { Skeleton } from 'flowbite-react';

function Component() {
  return (
    <div>
      <Skeleton.List />
    </div>
  )
}
`;

const codeRSC = `
import { SkeletonVideo } from 'flowbite-react';

function Component() {
  return (
    <div>
      <SkeletonList />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <SkeletonList />
      <SkeletonList />
      <SkeletonList />
    </div>
  );
}

export const list: CodeData = {
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
  githubSlug: 'skeleton/skeleton.list.tsx',
  component: <Component />,
};
