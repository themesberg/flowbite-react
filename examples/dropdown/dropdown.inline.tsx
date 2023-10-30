import { type CodeData } from '~/app/components/code-demo';
import { Dropdown, DropdownItem } from '~/src';

const code = `
'use client';

import { Dropdown } from 'flowbite-react';

function Component() {
  return (
    <Dropdown label="Dropdown" inline>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
`;

const codeRSC = `
import { Dropdown, DropdownItem } from 'flowbite-react';

function Component() {
  return (
    <Dropdown label="Dropdown" inline>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
}
`;

function Component() {
  return (
    <Dropdown label="Dropdown" inline>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
}

export const inline: CodeData = {
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
  githubSlug: 'dropdown/dropdown.inline.tsx',
  component: <Component />,
};
