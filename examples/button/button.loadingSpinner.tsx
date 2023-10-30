import { AiOutlineLoading } from 'react-icons/ai';
import { type CodeData } from '~/app/components/code-demo';
import { Button } from '~/src';

const code = `
'use client';

import { Button } from 'flowbite-react';
import { AiOutlineLoading } from 'react-icons/ai';

function Component() {
  return (
    <Button size="md" isProcessing processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />}>
      Click me!
    </Button>
  );
}
`;

const codeRSC = `
import { Button } from 'flowbite-react';
import { AiOutlineLoading } from 'react-icons/ai';

function Component() {
  return (
    <Button size="md" isProcessing processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />}>
      Click me!
    </Button>
  );
}
`;

function Component() {
  return (
    <Button size="md" isProcessing processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />}>
      Click me!
    </Button>
  );
}

export const loadingSpinner: CodeData = {
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
  githubSlug: 'button/button.loadingSpinner.tsx',
  component: <Component />,
};
