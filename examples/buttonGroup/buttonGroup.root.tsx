import { type CodeData } from '~/app/components/code-demo';
import { Button, ButtonGroup } from '~/src';

const code = `
'use client';

import { Button } from 'flowbite-react';

function Component() {
  return (
    <Button.Group>
      <Button color="gray">Profile</Button>
      <Button color="gray">Settings</Button>
      <Button color="gray">Messages</Button>
    </Button.Group>
  );
}
`;

const codeRSC = `
import { Button, ButtonGroup } from 'flowbite-react';

function Component() {
  return (
    <ButtonGroup>
      <Button color="gray">Profile</Button>
      <Button color="gray">Settings</Button>
      <Button color="gray">Messages</Button>
    </ButtonGroup>
  );
}
`;

function Component() {
  return (
    <ButtonGroup>
      <Button color="gray">Profile</Button>
      <Button color="gray">Settings</Button>
      <Button color="gray">Messages</Button>
    </ButtonGroup>
  );
}

export const root: CodeData = {
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
  githubSlug: 'components/button-group.md#default-button-group',
  component: <Component />,
};
