import type { CodeData } from '~/components/code-demo';
import { SkeletonVideo } from '~/src';

const code = `
'use client';

import { Skeleton } from 'flowbite-react';

function Component() {
  return (
    <div>
      <Skeleton.Video />
    </div>
  )
}
`;

const codeRSC = `
import { SkeletonVideo } from 'flowbite-react';

function Component() {
  return (
    <div>
      <SkeletonVideo />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <SkeletonVideo />
    </div>
  );
}

export const video: CodeData = {
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
  githubSlug: 'skeleton/skeleton.video.tsx',
  component: <Component />,
};
