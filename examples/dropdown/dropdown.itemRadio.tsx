import { type CodeData } from '~/components/code-demo';
import { Dropdown } from '~/src';

const code = `
'use client';

import { Dropdown } from 'flowbite-react';

function Component() {
  return (
    <Dropdown dismissOnClick={false} label="Dropdown radios">
      <Dropdown.Header>
        <span className="block text-sm">Select City</span>
      </Dropdown.Header>
      <Dropdown.ItemRadio label="berlin" name="city">
        Berlin
      </Dropdown.ItemRadio>
      <Dropdown.ItemRadio label="chicago" name="city">
        Chicago
      </Dropdown.ItemRadio>
      <Dropdown.ItemRadio label="lagos" name="city">
        Lagos
      </Dropdown.ItemRadio>
      <Dropdown.ItemRadio label="tokyo" name="city">
        Tokyo
      </Dropdown.ItemRadio>
    </Dropdown>
  );
}
`;

function Component() {
  return (
    <Dropdown dismissOnClick={false} label="Dropdown radios">
      <Dropdown.Header>
        <span className="block text-sm">Select City</span>
      </Dropdown.Header>
      <Dropdown.ItemRadio label="berlin" name="city">
        Berlin
      </Dropdown.ItemRadio>
      <Dropdown.ItemRadio label="chicago" name="city">
        Chicago
      </Dropdown.ItemRadio>
      <Dropdown.ItemRadio label="lagos" name="city">
        Lagos
      </Dropdown.ItemRadio>
      <Dropdown.ItemRadio label="tokyo" name="city">
        Tokyo
      </Dropdown.ItemRadio>
    </Dropdown>
  );
}

export const checkboxItem: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
  ],
  githubSlug: 'dropdown/dropdown.itemRadio.tsx',
  component: <Component />,
};
