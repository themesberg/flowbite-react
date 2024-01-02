import { type CodeData } from '~/components/code-demo';
import { Datepicker } from '~/src';

const code = `
'use client';

import { Datepicker } from 'flowbite-react';

function Component() {
  return (
    <Datepicker
      value={new Date(2022, 11, 25)} // 25th December 2022
    />
  );
}
`;

const codeRSC = `
import { Datepicker } from 'flowbite-react';

function Component() {
  return (
    <Datepicker
      value={new Date(2022, 11, 25);} // 25th December 2022
    />
  );
}
`;

function Component() {
  return (
    <Datepicker
      value={new Date(2022, 11, 25)} // 25th December 2022
    />
  );
}

export const value: CodeData = {
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
  githubSlug: 'datepicker/datepicker.value.tsx',
  component: <Component />,
};
