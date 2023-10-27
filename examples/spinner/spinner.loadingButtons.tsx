import { type CodeData } from '~/app/components/code-demo';
import { Button, Spinner } from '~/src';

const code = `
'use client';

import { Button, Spinner } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-row gap-3">
      <Button>
        <Spinner aria-label="Spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  );
}
`;

const codeRSC = `
import { Button, Spinner } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-row gap-3">
      <Button>
        <Spinner aria-label="Spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-row gap-3">
      <Button>
        <Spinner aria-label="Spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  );
}

export const loadingButtons: CodeData = {
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
  githubSlug: 'components/spinner.md#loading-buttons',
  component: <Component />,
};
