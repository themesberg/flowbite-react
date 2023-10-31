import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';
import { type CodeData } from '~/components/code-demo';
import { ListGroup, ListGroupItem } from '~/src';

const code = `
'use client';

import { ListGroup } from 'flowbite-react';
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroup.Item icon={HiUserCircle} active>
          Profile
        </ListGroup.Item>
        <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
        <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
        <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
`;

const codeRSC = `
import { ListGroup, ListGroupItem } from 'flowbite-react';
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroupItem icon={HiUserCircle} active>
          Profile
        </ListGroupItem>
        <ListGroupItem icon={HiOutlineAdjustments}>Settings</ListGroupItem>
        <ListGroupItem icon={HiInbox}>Messages</ListGroupItem>
        <ListGroupItem icon={HiCloudDownload}>Download</ListGroupItem>
      </ListGroup>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroupItem icon={HiUserCircle} active>
          Profile
        </ListGroupItem>
        <ListGroupItem icon={HiOutlineAdjustments}>Settings</ListGroupItem>
        <ListGroupItem icon={HiInbox}>Messages</ListGroupItem>
        <ListGroupItem icon={HiCloudDownload}>Download</ListGroupItem>
      </ListGroup>
    </div>
  );
}

export const withIcons: CodeData = {
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
  githubSlug: 'listGroup/listGroup.withIcons.tsx',
  component: <Component />,
};
