import { type CodeData } from '~/app/components/code-demo';
import { Datepicker } from '~/src';

const code = `
'use client';

import { Datepicker } from 'flowbite-react';

function Component() {
  return (
    <Datepicker
      weekStart={2} // Monday
    />
  );
}
`;

const codeRSC = `
import { Datepicker } from 'flowbite-react';

function Component() {
  return (
    <Datepicker
      weekStart={2} // Monday
    />
  );
}
`;

function Component() {
  return (
    <Datepicker
      weekStart={2} // Monday
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
