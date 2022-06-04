import type { FC } from 'react';
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';

import { ListGroup } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const ListGroupPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default list',
      code: (
        <ListGroup className="w-48">
          <ListGroup.Item>Profile</ListGroup.Item>
          <ListGroup.Item>Settings</ListGroup.Item>
          <ListGroup.Item>Messages</ListGroup.Item>
          <ListGroup.Item>Download</ListGroup.Item>
        </ListGroup>
      ),
    },
    {
      title: 'List group with links',
      code: (
        <ListGroup className="w-48">
          <ListGroup.Item active href="/list-group">
            Profile
          </ListGroup.Item>
          <ListGroup.Item href="/list-group">Settings</ListGroup.Item>
          <ListGroup.Item href="/list-group">Messages</ListGroup.Item>
          <ListGroup.Item href="/list-group">Download</ListGroup.Item>
        </ListGroup>
      ),
    },
    {
      title: 'List group with buttons',
      code: (
        <ListGroup className="w-48">
          <ListGroup.Item active onClick={() => alert('Profile clicked!')}>
            Profile
          </ListGroup.Item>
          <ListGroup.Item>Settings</ListGroup.Item>
          <ListGroup.Item>Messages</ListGroup.Item>
          <ListGroup.Item>Download</ListGroup.Item>
        </ListGroup>
      ),
      codeStringifierOptions: {
        functionValue: (fn) => (fn.name === 'onClick' ? fn : fn.name),
      },
    },
    {
      title: 'List group with icons',
      code: (
        <ListGroup className="w-48">
          <ListGroup.Item active icon={HiUserCircle}>
            Profile
          </ListGroup.Item>
          <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
          <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
          <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
        </ListGroup>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ListGroupPage;
