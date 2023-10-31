import { type CodeData } from '~/components/code-demo';
import { Button } from '~/src';

const code = `
'use client';

import { Button } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="xs" isProcessing>
        Click me!
      </Button>
      <Button size="sm" isProcessing gradientDuoTone="purpleToBlue">
        Click me!
      </Button>
      <Button size="md" isProcessing color="red">
        Click me!
      </Button>
      <Button size="lg" isProcessing pill>
        Click me!
      </Button>
      <Button size="xl" isProcessing outline>
        Click me!
      </Button>
    </div>
  );
}
`;

const codeRSC = `
import { Button } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="xs" isProcessing>
        Click me!
      </Button>
      <Button size="sm" isProcessing gradientDuoTone="purpleToBlue">
        Click me!
      </Button>
      <Button size="md" isProcessing color="red">
        Click me!
      </Button>
      <Button size="lg" isProcessing pill>
        Click me!
      </Button>
      <Button size="xl" isProcessing outline>
        Click me!
      </Button>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="xs" isProcessing>
        Click me!
      </Button>
      <Button size="sm" isProcessing gradientDuoTone="purpleToBlue">
        Click me!
      </Button>
      <Button size="md" isProcessing color="red">
        Click me!
      </Button>
      <Button size="lg" isProcessing pill>
        Click me!
      </Button>
      <Button size="xl" isProcessing outline>
        Click me!
      </Button>
    </div>
  );
}

export const loading: CodeData = {
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
  githubSlug: 'button/button.loading.tsx',
  component: <Component />,
};
