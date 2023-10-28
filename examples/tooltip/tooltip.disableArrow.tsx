import { type CodeData } from '~/app/components/code-demo';
import { Button, Tooltip } from '~/src';

const code = `
'use client';

import { Button, Tooltip } from 'flowbite-react';

function Component() {
  return (
    <Tooltip content="Tooltip content" arrow={false}>
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}
`;

const codeRSC = `
import { Button, Tooltip } from 'flowbite-react';

function Component() {
  return (
    <Tooltip content="Tooltip content" arrow={false}>
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}
`;

function Component() {
  return (
    <Tooltip content="Tooltip content" arrow={false}>
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}

export const disableArrow: CodeData = {
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
  githubSlug: 'components/tooltip.md#disable-arrow',
  component: <Component />,
};
