import { type CodeData } from '~/components/code-demo';
import { FloatingLabel } from '~/src';

const code = `
'use client';

import { FloatingLabel } from 'flowbite-react';

function Component() {
  return (
    <>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Small Filled" sizing="sm" />
        <FloatingLabel variant="outlined" label="Small Outlined" sizing="sm" />
        <FloatingLabel variant="standard" label="Small Standard" sizing="sm" />
      </div>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Default Filled" />
        <FloatingLabel variant="outlined" label="Default Outlined" />
        <FloatingLabel variant="standard" label="Default Standard" />
      </div>
    </>
  );
}
`;

const codeRSC = `
import { FloatingLabel } from 'flowbite-react';

function Component() {
  return (
    <>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Small Filled" sizing="sm" />
        <FloatingLabel variant="outlined" label="Small Outlined" sizing="sm" />
        <FloatingLabel variant="standard" label="Small Standard" sizing="sm" />
      </div>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Default Filled" />
        <FloatingLabel variant="outlined" label="Default Outlined" />
        <FloatingLabel variant="standard" label="Default Standard" />
      </div>
    </>
  );
}
`;

function Component() {
  return (
    <>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Small Filled" sizing="sm" />
        <FloatingLabel variant="outlined" label="Small Outlined" sizing="sm" />
        <FloatingLabel variant="standard" label="Small Standard" sizing="sm" />
      </div>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Default Filled" />
        <FloatingLabel variant="outlined" label="Default Outlined" />
        <FloatingLabel variant="standard" label="Default Standard" />
      </div>
    </>
  );
}

export const sizes: CodeData = {
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
  githubSlug: 'floatingLabel/floatingLabel.sizes.tsx',
  component: <Component />,
};
