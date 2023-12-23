import { type CodeData } from '~/components/code-demo';
import { Button, Tooltip } from '~/src';

const code = `
'use client';

import { Button, Tooltip } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip content="Tooltip content" delay={{ open: 1000, close: 200 }} restMs={100}>
        <Button>Delayed tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" delay={{ open: 1000, close: 200 }}>
        <Button>Delayed tooltip without restMs</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" restMs={500}>
        <Button>Delayed tooltip with restMs only</Button>
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
      <Tooltip content="Tooltip content" delay={{ open: 1000, close: 200 }} restMs={100}>
        <Button>Delayed tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" delay={{ open: 1000, close: 200 }}>
        <Button>Delayed tooltip without restMs</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" restMs={500}>
        <Button>Delayed tooltip with restMs only</Button>
      </Tooltip>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip content="Tooltip content" delay={{ open: 1000, close: 200 }} restMs={100}>
        <Button>Delayed tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" delay={{ open: 1000, close: 200 }}>
        <Button>Delayed tooltip without restMs</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" restMs={500}>
        <Button>Delayed tooltip with restMs only</Button>
      </Tooltip>
    </div>
  );
}

export const hoverDelay: CodeData = {
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
  githubSlug: 'tooltip/tooltip.hoverDelay.tsx',
  component: <Component />,
};
