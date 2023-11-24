import { type CodeData } from '~/components/code-demo';
import { Checkbox, Label } from '~/src';

const code = `
'use client';

import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Checkbox id="inline-1-checkbox" />
        <Label htmlFor="inline-1-checkbox">Inline 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-2-checkbox" />
        <Label htmlFor="inline-2-checkbox">Inline 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-checked-checkbox" defaultChecked />
        <Label htmlFor="inline-checked-checkbox">Inline defaultChecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-disabled-checkbox" disabled />
        <Label htmlFor="inline-disabled-checkbox">Inline disabled</Label>
      </div>
    </div>
  );
}
`;

const codeRSC = `
import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Checkbox id="inline-1-checkbox" />
        <Label htmlFor="inline-1-checkbox">Inline 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-2-checkbox" />
        <Label htmlFor="inline-2-checkbox">Inline 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-checked-checkbox" defaultChecked />
        <Label htmlFor="inline-checked-checkbox">Inline defaultChecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-disabled-checkbox" disabled />
        <Label htmlFor="inline-disabled-checkbox">Inline disabled</Label>
      </div>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Checkbox id="inline-1-checkbox" />
        <Label htmlFor="inline-1-checkbox">Inline 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-2-checkbox" />
        <Label htmlFor="inline-2-checkbox">Inline 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-checked-checkbox" defaultChecked />
        <Label htmlFor="inline-checked-checkbox">Inline checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-disabled-checkbox" disabled />
        <Label htmlFor="inline-disabled-checkbox">Inline disabled</Label>
      </div>
    </div>
  );
}

export const inlineLayout: CodeData = {
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
  githubSlug: 'checkbox/checkbox.inlineLayout.tsx',
  component: <Component />,
};
