import { type CodeData } from '~/components/code-demo';
import { Checkbox, Label } from '~/src';

const code = `
'use client';

import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Checkbox id="disabled-checkbox" disabled />
        <Label htmlFor="disabled-checkbox">Default checkbox</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked-state-checkbox" disabled checked />
        <Label htmlFor="disabled-checked-state-checkbox" disabled>Disabled</Label>
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
        <Checkbox id="disabled-checkbox" disabled />
        <Label htmlFor="disabled-checkbox">Default checkbox</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked-state-checkbox" disabled checked />
        <Label htmlFor="disabled-checked-state-checkbox" disabled>Disabled</Label>
      </div>
    </div>
  );
}
`;

function Component() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Checkbox id="disabled-checkbox" disabled />
        <Label htmlFor="disabled-checkbox" disabled>
          Default checkbox
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked-state-checkbox" disabled checked />
        <Label htmlFor="disabled-checked-state-checkbox" disabled>
          Disabled checked
        </Label>
      </div>
    </div>
  );
}

export const disabled: CodeData = {
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
  githubSlug: 'checkbox/checkbox.disabled.tsx',
  component: <Component />,
};
