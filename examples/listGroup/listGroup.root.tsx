import { type CodeData } from '~/app/components/code-demo';
import { ListGroup, ListGroupItem } from '~/src';

const code = `
'use client';

import { ListGroup } from 'flowbite-react';

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroup.Item>Profile</ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
        <ListGroup.Item>Messages</ListGroup.Item>
        <ListGroup.Item>Download</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
`;

const codeRSC = `
import { ListGroup, ListGroupItem } from 'flowbite-react';

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroupItem>Profile</ListGroupItem>
        <ListGroupItem>Settings</ListGroupItem>
        <ListGroupItem>Messages</ListGroupItem>
        <ListGroupItem>Download</ListGroupItem>
      </ListGroup>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroupItem>Profile</ListGroupItem>
        <ListGroupItem>Settings</ListGroupItem>
        <ListGroupItem>Messages</ListGroupItem>
        <ListGroupItem>Download</ListGroupItem>
      </ListGroup>
    </div>
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
  githubSlug: 'components/list-group.md#default-list-group',
  component: <Component />,
};
