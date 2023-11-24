import { type CodeData } from '~/components/code-demo';
import { List, ListItem } from '~/src';
import { HiCheckCircle } from 'react-icons/hi';

const code = `
'use client';

import { List } from 'flowbite-react';

function Component() {
  return (
    <List>
      <List.Item icon={HiCheckCircle}>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item icon={HiCheckCircle}>At least one lowercase character</List.Item>
      <List.Item icon={HiCheckCircle}>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </List>
  );
}
`;

const codeRSC = `
import { List, ListItem } from 'flowbite-react';

function Component() {
  return (
    <List>
      <ListItem icon={HiCheckCircle}>At least 10 characters (and up to 100 characters)</ListItem>
      <ListItem icon={HiCheckCircle}>At least one lowercase character</ListItem>
      <ListItem icon={HiCheckCircle}>Inclusion of at least one special character, e.g., ! @ # ?</ListItem>
    </List>
  );
}
`;

function Component() {
  return (
    <List>
      <ListItem icon={HiCheckCircle}>At least 10 characters (and up to 100 characters)</ListItem>
      <ListItem icon={HiCheckCircle}>At least one lowercase character</ListItem>
      <ListItem icon={HiCheckCircle}>Inclusion of at least one special character, e.g., ! @ # ?</ListItem>
    </List>
  );
}

export const icon: CodeData = {
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
  githubSlug: 'list/list.icon.tsx',
  component: <Component />,
};
