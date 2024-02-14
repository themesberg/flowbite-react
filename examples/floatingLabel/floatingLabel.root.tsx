import { type CodeData } from '~/components/code-demo';
import { FloatingLabel } from '~/src';

const code = `
'use client';

import { FloatingLabel } from 'flowbite-react';

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" />
      <FloatingLabel variant="outlined" label="Label" />
      <FloatingLabel variant="standard" label="Label" />
    </div>
  );
}
`;

const codeRSC = `
import { FloatingLabel } from 'flowbite-react';

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" />
      <FloatingLabel variant="outlined" label="Label" />
      <FloatingLabel variant="standard" label="Label" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" />
      <FloatingLabel variant="outlined" label="Label" />
      <FloatingLabel variant="standard" label="Label" />
    </div>
  );
}

export const root: CodeData = {
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
  githubSlug: 'floatingLabel/floatingLabel.root.tsx',
  component: <Component />,
};
