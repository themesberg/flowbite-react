import { type CodeData } from '~/components/code-demo';
import { Spinner } from '~/src';

const code = `
'use client';

import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="blue" aria-label="Blue spinner example" />
      <Spinner color="cyan" aria-label="Cyan spinner example" />
      <Spinner color="green" aria-label="Green spinner example" />
      <Spinner color="indigo" aria-label="Indigo spinner example" />
      <Spinner color="lime" aria-label="Lime spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
      <Spinner color="red" aria-label="Red spinner example" />
      <Spinner color="teal" aria-label="Teal spinner example" />
      <Spinner color="yellow" aria-label="Yellow spinner example" />
    </div>
  );
}
`;

const codeRSC = `
import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="blue" aria-label="Blue spinner example" />
      <Spinner color="cyan" aria-label="Cyan spinner example" />
      <Spinner color="green" aria-label="Green spinner example" />
      <Spinner color="indigo" aria-label="Indigo spinner example" />
      <Spinner color="lime" aria-label="Lime spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
      <Spinner color="red" aria-label="Red spinner example" />
      <Spinner color="teal" aria-label="Teal spinner example" />
      <Spinner color="yellow" aria-label="Yellow spinner example" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="blue" aria-label="Blue spinner example" />
      <Spinner color="cyan" aria-label="Cyan spinner example" />
      <Spinner color="green" aria-label="Green spinner example" />
      <Spinner color="indigo" aria-label="Indigo spinner example" />
      <Spinner color="lime" aria-label="Lime spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
      <Spinner color="red" aria-label="Red spinner example" />
      <Spinner color="teal" aria-label="Teal spinner example" />
      <Spinner color="yellow" aria-label="Yellow spinner example" />
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
  githubSlug: 'spinner/spinner.colors.tsx',
  component: <Component />,
};
