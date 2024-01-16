import { Datepicker } from 'flowbite-react';
import { type CodeData } from '~/components/code-demo';

const code = `
'use client';

import { Datepicker } from 'flowbite-react';

function Component() {
  return (
    <Datepicker
      weekStart={1} // Monday
    />
  );
}
`;

const codeRSC = `
import { Datepicker } from 'flowbite-react';

function Component() {
  return (
    <Datepicker
      weekStart={1} // Monday
    />
  );
}
`;

function Component() {
  return (
    <Datepicker
      weekStart={1} // Monday
    />
  );
}

export const weekStart: CodeData = {
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
  githubSlug: 'datepicker/datepicker.weekStart.tsx',
  component: <Component />,
};
