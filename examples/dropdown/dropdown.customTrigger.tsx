'use client';

import { type CodeData } from '~/app/components/code-demo';
import { Dropdown } from '~/src';

const code = `
'use client';

import { Dropdown } from 'flowbite-react';

function Component() {
  return (
    <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span>My custom trigger</span>}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
`;

function Component() {
  return (
    <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span>My custom trigger</span>}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export const customTrigger: CodeData = {
  type: 'single',
  code: {
    fileName: 'client',
    language: 'tsx',
    code,
  },
  githubSlug: 'dropdown/dropdown.customTrigger.tsx',
  component: <Component />,
};
