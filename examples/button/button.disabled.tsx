import { type CodeData } from '~/components/code-demo';
import { Button } from '~/src';

const code = `
'use client';

import { Button } from 'flowbite-react';

function Component() {
  return <Button disabled>Disabled button</Button>;
}
`;

const codeRSC = `
import { Button } from 'flowbite-react';

function Component() {
  return <Button disabled>Disabled button</Button>;
}
`;

function Component() {
  return <Button disabled>Disabled button</Button>;
}

export const disabled: CodeData = {
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
  githubSlug: 'button/button.disabled.tsx',
  component: <Component />,
};
