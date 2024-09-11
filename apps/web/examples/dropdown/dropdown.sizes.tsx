import { Dropdown, DropdownItem } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Dropdown } from "flowbite-react";

export function Component() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown label="Small dropdown" size="sm">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <Dropdown label="Large dropdown" size="lg">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}
`;

const codeRSC = `
import { Dropdown, DropdownItem } from "flowbite-react";

export function Component() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown label="Small dropdown" size="sm">
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
      <Dropdown label="Large dropdown" size="lg">
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown label="Small dropdown" size="sm">
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
      <Dropdown label="Large dropdown" size="lg">
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    </div>
  );
}

export const sizes: CodeData = {
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
  githubSlug: "dropdown/dropdown.sizes.tsx",
  component: <Component />,
};
