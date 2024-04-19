import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Dropdown } from "flowbite-react";

export function Component() {
  return (
    <Dropdown label="Dropdown button">
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
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
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";

export function Component() {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
}
`;

export function Component() {
  return (
    <Dropdown label="Dropdown button">
      <DropdownHeader>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
}

export const header: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "dropdown/dropdown.header.tsx",
  component: <Component />,
};
