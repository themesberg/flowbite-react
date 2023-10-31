'use client';

import { type CodeData } from '~/components/code-demo';
import { ListGroup } from '~/src';

const code = `
'use client';

import { ListGroup } from 'flowbite-react';

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroup.Item onClick={() => alert('Profile clicked!')} active>
          Profile
        </ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
        <ListGroup.Item>Messages</ListGroup.Item>
        <ListGroup.Item>Download</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroup.Item onClick={() => alert('Profile clicked!')} active>
          Profile
        </ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
        <ListGroup.Item>Messages</ListGroup.Item>
        <ListGroup.Item>Download</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export const withButtons: CodeData = {
  type: 'single',
  code: {
    fileName: 'client',
    language: 'tsx',
    code,
  },
  githubSlug: 'listGroup/listGroup.withButtons.tsx',
  component: <Component />,
};
