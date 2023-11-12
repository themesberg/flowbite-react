import { type CodeData } from '~/components/code-demo';
import { List, ListItem } from '~/src';

const code = `
'use client';

import { List } from 'flowbite-react';

function Component() {
  return (
    <List>
      <List.Item>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item>At least one lowercase character</List.Item>
      <List.Item>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </List>
  );
}
`;

const codeRSC = `
import { List, ListItem } from 'flowbite-react';

function Component() {
  return (
    <List>
      <ListItem>At least 10 characters (and up to 100 characters)</ListItem>
      <ListItem>At least one lowercase character</ListItem>
      <ListItem>Inclusion of at least one special character, e.g., ! @ # ?</ListItem>
    </List>
  );
}
`;

function Component() {
  return (
    <List>
      <ListItem>
        List item one
        <List ordered nested>
          <ListItem>You might feel like you are being really "organized" o</ListItem>
          <ListItem>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</ListItem>
          <ListItem>Nesting tons of folders in your source code is also not helpful.</ListItem>
        </List>
      </ListItem>
      <ListItem>
        List item two
        <List ordered nested>
          <ListItem>I'm not sure if we'll bother styling more than two levels deep.</ListItem>
          <ListItem>Two is already too much, three is guaranteed to be a bad idea.</ListItem>
          <ListItem>If you nest four levels deep you belong in prison.</ListItem>
        </List>
      </ListItem>
      <ListItem>
        List item three
        <List ordered nested>
          <ListItem>Again please don't nest lists if you want</ListItem>
          <ListItem>Nobody wants to look at this.</ListItem>
          <ListItem>I'm upset that we even have to bother styling this.</ListItem>
        </List>
      </ListItem>
    </List>
  );
}

export const nested: CodeData = {
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
  githubSlug: 'list/list.nested.tsx',
  component: <Component />,
};
