import { type CodeData } from '~/app/components/code-demo';
import { FloatingLabel } from '~/src';

const code = `
'use client';

import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <FloatingLabel
      variant="filled"
      label="Floating Helper"
      helperText="Remember, contributions to this topic should follow our Community Guidelines."
    />
  );
}
`;

const codeRSC = `
import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <FloatingLabel
      variant="filled"
      label="Floating Helper"
      helperText="Remember, contributions to this topic should follow our Community Guidelines."
    />
  );
}
`;

function Component() {
  return (
    <FloatingLabel
      variant="filled"
      label="Floating Helper"
      helperText="Remember, contributions to this topic should follow our Community Guidelines."
    />
  );
}

export const helperText: CodeData = {
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
  githubSlug: 'forms/floating-label.md#helper-text',
  component: <Component />,
};
