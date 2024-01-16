import { Progress } from 'flowbite-react';
import { type CodeData } from '~/components/code-demo';

const code = `
'use client';

import { Progress } from 'flowbite-react';

function Component() {
  return <Progress progress={45} />;
}
`;

const codeRSC = `
import { Progress } from 'flowbite-react';

function Component() {
  return <Progress progress={45} />;
}
`;

function Component() {
  return <Progress progress={45} />;
}

export const root: CodeData = {
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
  githubSlug: 'progress/progress.root.tsx',
  component: <Component />,
};
