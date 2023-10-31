import { type CodeData } from '~/components/code-demo';
import { ListGroup, ListGroupItem } from '~/src';

const code = `
'use client';

import { ListGroup } from 'flowbite-react';

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroup.Item href="#" active>
          Profile
        </ListGroup.Item>
        <ListGroup.Item href="#">Settings</ListGroup.Item>
        <ListGroup.Item href="#">Messages</ListGroup.Item>
        <ListGroup.Item href="#">Download</ListGroup.Item>
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
        <ListGroupItem href="#" active>
          Profile
        </ListGroupItem>
        <ListGroupItem href="#">Settings</ListGroupItem>
        <ListGroupItem href="#">Messages</ListGroupItem>
        <ListGroupItem href="#">Download</ListGroupItem>
      </ListGroup>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroupItem href="#" active>
          Profile
        </ListGroupItem>
        <ListGroupItem href="#">Settings</ListGroupItem>
        <ListGroupItem href="#">Messages</ListGroupItem>
        <ListGroupItem href="#">Download</ListGroupItem>
      </ListGroup>
    </div>
  );
}

export const itemsAsLink: CodeData = {
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
  githubSlug: 'listGroup/listGroup.itemsAsLink.tsx',
  component: <Component />,
};
