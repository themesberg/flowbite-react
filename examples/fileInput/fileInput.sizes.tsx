import { type CodeData } from '~/components/code-demo';
import { FileInput, Label } from '~/src';

const code = `
'use client';

import { FileInput, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <div className="mb-2">
        <div>
          <Label htmlFor="small-file-upload" value="Small file input" />
        </div>
        <FileInput id="small-file-upload" sizing="sm" />
      </div>
      <div className="mb-2">
        <div>
          <Label htmlFor="default-file-upload" value="Default size file input" />
        </div>
        <FileInput id="default-file-upload" />
      </div>
      <div>
        <div>
          <Label htmlFor="large-file-upload" value="Large file input" />
        </div>
        <FileInput id="large-file-upload" sizing="lg" />
      </div>
    </div>
  );
}
`;

const codeRSC = `

import { FileInput, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <div className="mb-2">
        <div>
          <Label htmlFor="small-file-upload" value="Small file input" />
        </div>
        <FileInput id="small-file-upload" sizing="sm" />
      </div>
      <div className="mb-2">
        <div>
          <Label htmlFor="default-file-upload" value="Default size file input" />
        </div>
        <FileInput id="default-file-upload" />
      </div>
      <div>
        <div>
          <Label htmlFor="large-file-upload" value="Large file input" />
        </div>
        <FileInput id="large-file-upload" sizing="lg" />
      </div>
    </div>
  );
}
`;

function Component() {
  return (
    <div>
      <div className="mb-2">
        <div>
          <Label htmlFor="small-file-upload" value="Small file input" />
        </div>
        <FileInput id="small-file-upload" sizing="sm" />
      </div>
      <div className="mb-2">
        <div>
          <Label htmlFor="default-file-upload" value="Default size file input" />
        </div>
        <FileInput id="default-file-upload" />
      </div>
      <div>
        <div>
          <Label htmlFor="large-file-upload" value="Large file input" />
        </div>
        <FileInput id="large-file-upload" sizing="lg" />
      </div>
    </div>
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
  githubSlug: 'fileInput/fileInput.sizes.tsx',
  component: <Component />,
};
