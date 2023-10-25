import { type CodeData } from '~/app/components/code-demo';
import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from '~/src';

const code = `
'use client';

import { Avatar, Dropdown } from 'flowbite-react';

function Component() {
  return (
    <Dropdown
      label={<Avatar alt="User settings" img="/images/people/profile-picture-5.jpg" rounded />}
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
`;

const codeRSC = `
import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react';

function Component() {
  return (
    <Dropdown
      label={<Avatar alt="User settings" img="/images/people/profile-picture-5.jpg" rounded />}
      arrowIcon={false}
      inline
    >
      <DropdownHeader>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
}
`;

function Component() {
  return (
    <Dropdown
      label={<Avatar alt="User settings" img="/images/people/profile-picture-5.jpg" rounded />}
      arrowIcon={false}
      inline
    >
      <DropdownHeader>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
}

export const dropdown: CodeData = {
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
  githubSlug: 'components/avatar.md#avatar-dropdown',
  component: <Component />,
};
