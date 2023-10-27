import { type CodeData } from '~/app/components/code-demo';
import { Progress } from '~/src';

const code = `
'use client';

import { Progress } from 'flowbite-react';

function Component() {
  return <Progress progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />;
}
`;

const codeRSC = `
import { Progress } from 'flowbite-react';

function Component() {
  return <Progress progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />;
}
`;

function Component() {
  return <Progress progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />;
}

export const withLabels: CodeData = {
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
  githubSlug: 'components/progress.md#progress-bar-with-labels',
  component: <Component />,
};
