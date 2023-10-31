import { type CodeData } from '~/components/code-demo';
import { Kbd } from '~/src';

const code = `
'use client';

import { Kbd } from 'flowbite-react';

function Component() {
  return (
    <>
      Please press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> to re-render an MDN page.
    </>
  );
}
`;

const codeRSC = `
import { Kbd } from 'flowbite-react';

function Component() {
  return (
    <>
      Please press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> to re-render an MDN page.
    </>
  );
}
`;

function Component() {
  return (
    <>
      Please press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> to re-render an MDN page.
    </>
  );
}

export const insideText: CodeData = {
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
  githubSlug: 'kbd/kbd.insideText.tsx',
  component: <Component />,
};
