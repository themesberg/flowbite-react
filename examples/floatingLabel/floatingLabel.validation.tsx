import { type CodeData } from '~/app/components/code-demo';
import { FloatingLabel } from '~/src';

const code = `
'use client';

import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Filled Success" color="error" />
        <FloatingLabel variant="outlined" label="Outlined Success" color="error" />
        <FloatingLabel variant="standard" label="Standard Success" color="error" />
      </div>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Filled Error" color="success" />
        <FloatingLabel variant="outlined" label="Outlined Error" color="success" />
        <FloatingLabel variant="standard" label="Standard Error" color="success" />
      </div>
    </>
  );
}
`;

const codeRSC = `
import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Filled Success" color="error" />
        <FloatingLabel variant="outlined" label="Outlined Success" color="error" />
        <FloatingLabel variant="standard" label="Standard Success" color="error" />
      </div>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Filled Error" color="success" />
        <FloatingLabel variant="outlined" label="Outlined Error" color="success" />
        <FloatingLabel variant="standard" label="Standard Error" color="success" />
      </div>
    </>
  );
}
`;

function Component() {
  return (
    <>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Filled Success" color="error" />
        <FloatingLabel variant="outlined" label="Outlined Success" color="error" />
        <FloatingLabel variant="standard" label="Standard Success" color="error" />
      </div>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel variant="filled" label="Filled Error" color="success" />
        <FloatingLabel variant="outlined" label="Outlined Error" color="success" />
        <FloatingLabel variant="standard" label="Standard Error" color="success" />
      </div>
    </>
  );
}

export const validation: CodeData = {
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
  githubSlug: 'floatingLabel/floatingLabel.validation.tsx',
  component: <Component />,
};
