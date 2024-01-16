import { Button, Tooltip } from 'flowbite-react';
import { type CodeData } from '~/components/code-demo';

const code = `
'use client';

import { Button, Tooltip } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip content="Tooltip content" animation={false}>
        <Button>Not animated tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-150">
        <Button>Fast animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-300">
        <Button>Normal speed animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-500">
        <Button>Slow animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-1000">
        <Button>Really slow animation</Button>
      </Tooltip>
    </div>
  );
}
`;

const codeRSC = `
import { Button, Tooltip } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip content="Tooltip content" animation={false}>
        <Button>Not animated tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-150">
        <Button>Fast animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-300">
        <Button>Normal speed animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-500">
        <Button>Slow animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-1000">
        <Button>Really slow animation</Button>
      </Tooltip>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip content="Tooltip content" animation={false}>
        <Button>Not animated tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-150">
        <Button>Fast animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-300">
        <Button>Normal speed animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-500">
        <Button>Slow animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-1000">
        <Button>Really slow animation</Button>
      </Tooltip>
    </div>
  );
}

export const animation: CodeData = {
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
  githubSlug: 'tooltip/tooltip.animation.tsx',
  component: <Component />,
};
