import { type CodeData } from '~/app/components/code-demo';
import { Spinner } from '~/src';

const code = `
'use client';

import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="info" aria-label="Info spinner example" />
      <Spinner color="success" aria-label="Success spinner example" />
      <Spinner color="failure" aria-label="Failure spinner example" />
      <Spinner color="warning" aria-label="Warning spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
  );
}
`;

const codeRSC = `
import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="info" aria-label="Info spinner example" />
      <Spinner color="success" aria-label="Success spinner example" />
      <Spinner color="failure" aria-label="Failure spinner example" />
      <Spinner color="warning" aria-label="Warning spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="info" aria-label="Info spinner example" />
      <Spinner color="success" aria-label="Success spinner example" />
      <Spinner color="failure" aria-label="Failure spinner example" />
      <Spinner color="warning" aria-label="Warning spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
  );
}

export const colors: CodeData = {
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
  githubSlug: 'components/spinner.md#spinner-colors',
  component: <Component />,
};
