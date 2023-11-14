import { type CodeData } from '~/components/code-demo';
import { Checkbox, Label } from '~/src';

const code = `
'use client';

import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Checkbox id="default-checkbox" />
        <Label htmlFor="default-checkbox">Default checkbox</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checked-state-checkbox" checked />
        <Label htmlFor="checked-state-checkbox">Checked state</Label>
      </div>
    </div>
  );
}
`;

const codeRSC = `
import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Checkbox id="default-checkbox" />
        <Label htmlFor="default-checkbox">Default checkbox</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checked-state-checkbox" checked />
        <Label htmlFor="checked-state-checkbox">Checked state</Label>
      </div>
    </div>
  );
}
`;

function Component() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Checkbox id="default-checkbox" />
        <Label htmlFor="default-checkbox">Default checkbox</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checked-state-checkbox" checked />
        <Label htmlFor="checked-state-checkbox">Checked state</Label>
      </div>
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
  githubSlug: 'checkbox/checkbox.root.tsx',
  component: <Component />,
};
