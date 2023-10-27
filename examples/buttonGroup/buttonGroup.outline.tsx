import { type CodeData } from '~/app/components/code-demo';
import { Button, ButtonGroup } from '~/src';

const code = `
'use client';

import { Button } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button.Group outline>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </Button.Group>
      <Button.Group outline>
        <Button gradientMonochrome="info">Profile</Button>
        <Button gradientMonochrome="info">Settings</Button>
        <Button gradientMonochrome="info">Messages</Button>
      </Button.Group>
      <Button.Group outline>
        <Button gradientDuoTone="cyanToBlue">Profile</Button>
        <Button gradientDuoTone="cyanToBlue">Settings</Button>
        <Button gradientDuoTone="cyanToBlue">Messages</Button>
      </Button.Group>
    </div>
  );
}
`;

const codeRSC = `
import { Button, ButtonGroup } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup outline>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientMonochrome="info">Profile</Button>
        <Button gradientMonochrome="info">Settings</Button>
        <Button gradientMonochrome="info">Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientDuoTone="cyanToBlue">Profile</Button>
        <Button gradientDuoTone="cyanToBlue">Settings</Button>
        <Button gradientDuoTone="cyanToBlue">Messages</Button>
      </ButtonGroup>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup outline>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientMonochrome="info">Profile</Button>
        <Button gradientMonochrome="info">Settings</Button>
        <Button gradientMonochrome="info">Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button gradientDuoTone="cyanToBlue">Profile</Button>
        <Button gradientDuoTone="cyanToBlue">Settings</Button>
        <Button gradientDuoTone="cyanToBlue">Messages</Button>
      </ButtonGroup>
    </div>
  );
}

export const outline: CodeData = {
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
  githubSlug: 'components/button-group.md#outline-button-group',
  component: <Component />,
};
