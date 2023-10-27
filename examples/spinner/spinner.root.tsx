import { type CodeData } from '~/app/components/code-demo';
import { Spinner } from '~/src';

const code = `
'use client';

import { Spinner } from 'flowbite-react';

function Component() {
  return <Spinner aria-label="Default status example" />;
}
`;

const codeRSC = `
import { Spinner } from 'flowbite-react';

function Component() {
  return <Spinner aria-label="Default status example" />;
}
`;

function Component() {
  return <Spinner aria-label="Default status example" />;
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
  githubSlug: 'components/spinner.md#default-spinner',
  component: <Component />,
};
