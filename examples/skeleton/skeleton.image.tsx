import type { CodeData } from '~/components/code-demo';
import { SkeletonImage } from '~/src';

const code = `
'use client';

import { Skeleton } from 'flowbite-react';

function Component() {
  return (
    <div>
      <Skeleton.Image />
    </div>
  )
}
`;

const codeRSC = `
import { SkeletonImage } from 'flowbite-react';

function Component() {
  return (
    <div>
      <SkeletonImage />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <SkeletonImage theme={{ base: 'w-48 h-48 text-gray-200 dark:text-gray-600' }} />
    </div>
  );
}

export const image: CodeData = {
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
  githubSlug: 'skeleton/skeleton.image.tsx',
  component: <Component />,
};
