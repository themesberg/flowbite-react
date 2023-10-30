'use client';

import { type CodeData } from '~/app/components/code-demo';
import { Dropdown } from '~/src';

const code = `
'use client';

import { Dropdown } from 'flowbite-react';

function Component() {
  return (
    <Dropdown label="Dropdown">
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Dashboard</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Settings</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Earnings</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
`;

function Component() {
  return (
    <Dropdown label="Dropdown">
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Dashboard</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Settings</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Earnings</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export const events: CodeData = {
  type: 'single',
  code: {
    fileName: 'client',
    language: 'tsx',
    code,
  },
  githubSlug: 'dropdown/dropdown.events.tsx',
  component: <Component />,
};
