import { type CodeData } from '~/app/components/code-demo';
import { Datepicker } from '~/src';

const code = `
'use client';

import { Datepicker } from 'flowbite-react';

function Component() {
  return <Datepicker title="Flowbite Datepicker" />
}
`;

const codeRSC = `
import { Datepicker } from 'flowbite-react';

function Component() {
  return <Datepicker title="Flowbite Datepicker" />
}
`;

function Component() {
  return <Datepicker title="Flowbite Datepicker" />;
}

export const title: CodeData = {
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
  githubSlug: 'datepicker/datepicker.title.tsx',
  component: <Component />,
};
