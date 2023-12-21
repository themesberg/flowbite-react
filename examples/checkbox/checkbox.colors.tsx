import { type CodeData } from '~/components/code-demo';
import { Checkbox, Label } from '~/src';

const code = `
'use client';

import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <Checkbox id="red-checkbox" color="red" defaultChecked />
        <Label htmlFor="red-checkbox">Red</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="green-checkbox" color="green" defaultChecked />
        <Label htmlFor="green-checkbo">Green</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="purple-checkbox" color="purple" defaultChecked />
        <Label htmlFor="purple-checkbo">Purple</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="teal-checkbox" color="teal" defaultChecked />
        <Label htmlFor="teal-checkbo">Teal</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="yellow-checkbox" color="yellow" defaultChecked />
        <Label htmlFor="yellow-checkbo">Yellow</Label>
      </div>
    </div>
  );
}
`;

const codeRSC = `
import { Checkbox, Label } from 'flowbite-react';

function Component() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <Checkbox id="red-checkbox" color="red" defaultChecked />
        <Label htmlFor="red-checkbox">Red</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="green-checkbox" color="green" defaultChecked />
        <Label htmlFor="green-checkbo">Green</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="purple-checkbox" color="purple" defaultChecked />
        <Label htmlFor="purple-checkbo">Purple</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="teal-checkbox" color="teal" defaultChecked />
        <Label htmlFor="teal-checkbo">Teal</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="yellow-checkbox" color="yellow" defaultChecked />
        <Label htmlFor="yellow-checkbo">Yellow</Label>
      </div>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <Checkbox id="red-checkbox" color="red" defaultChecked />
        <Label htmlFor="red-checkbox">Red</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="green-checkbox" color="green" defaultChecked />
        <Label htmlFor="green-checkbo">Green</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="purple-checkbox" color="purple" defaultChecked />
        <Label htmlFor="purple-checkbo">Purple</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="teal-checkbox" color="teal" defaultChecked />
        <Label htmlFor="teal-checkbo">Teal</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="yellow-checkbox" color="yellow" defaultChecked />
        <Label htmlFor="yellow-checkbo">Yellow</Label>
      </div>
    </div>
  );
}

export const colors: CodeData = {
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
  githubSlug: 'checkbox/checkbox.colors.tsx',
  component: <Component />,
};
