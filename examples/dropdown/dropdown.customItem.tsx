import Link from 'next/link';
import { type CodeData } from '~/components/code-demo';
import { Dropdown, DropdownItem } from '~/src';

const code = `
'use client';

import { Dropdown } from 'flowbite-react';

function Component() {
  return (
    <Dropdown dismissOnClick={false} label="My custom item">
      <Dropdown.Item as={Link} href="#">
        Home
      </Dropdown.Item>
      <Dropdown.Item as="a" href="https://flowbite.com/" target="_blank">
        External link
      </Dropdown.Item>
    </Dropdown>
  );
}
`;

const codeRSC = `
import { Dropdown, DropdownItem } from 'flowbite-react';

function Component() {
  return (
    <Dropdown dismissOnClick={false} label="My custom item">
      <DropdownItem as={Link} href="#">
        Home
      </DropdownItem>
      <DropdownItem as="a" href="https://flowbite.com/" target="_blank">
        External link
      </DropdownItem>
    </Dropdown>
  );
}
`;

function Component() {
  return (
    <Dropdown dismissOnClick={false} label="My custom item">
      <DropdownItem as={Link} href="#">
        Home
      </DropdownItem>
      <DropdownItem as="a" href="https://flowbite.com/" target="_blank">
        External link
      </DropdownItem>
    </Dropdown>
  );
}

export const customItem: CodeData = {
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
  githubSlug: 'dropdown/dropdown.customItem.tsx',
  component: <Component />,
};
