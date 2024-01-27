import { type CodeData } from '~/components/code-demo';
import { FloatingLabel } from '~/src';

const code = `
'use client';

import { FloatingLabel } from 'flowbite-react';

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
import { FloatingLabel } from 'flowbite-react';

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
  githubSlug: 'floatingLabel/floatingLabel.helperText.tsx',
  component: <Component />,
};
