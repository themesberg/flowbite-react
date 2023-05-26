'use client';

import type { FC } from 'react';
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';
import { CodePreview } from '~/app/components/code-preview';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import { ListGroup } from '~/src';

const ListGroupPage: FC = () => (
  <DocsContentLayout
    title="React List Group - Flowbite"
    description="Use the list group component to display a series of items, buttons or links inside a single element"
  >
    <CodePreview title="Default list group" className="w-48">
      <ListGroup>
        <ListGroup.Item>Profile</ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
        <ListGroup.Item>Messages</ListGroup.Item>
        <ListGroup.Item>Download</ListGroup.Item>
      </ListGroup>
    </CodePreview>
    <CodePreview title="List group with links" className="w-48">
      <ListGroup>
        <ListGroup.Item active href="/list-group">
          Profile
        </ListGroup.Item>
        <ListGroup.Item href="/list-group">Settings</ListGroup.Item>
        <ListGroup.Item href="/list-group">Messages</ListGroup.Item>
        <ListGroup.Item href="/list-group">Download</ListGroup.Item>
      </ListGroup>
    </CodePreview>
    <CodePreview title="List group with buttons" className="w-48">
      <ListGroup>
        <ListGroup.Item active onClick={() => alert('Profile clicked!')}>
          Profile
        </ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
        <ListGroup.Item>Messages</ListGroup.Item>
        <ListGroup.Item>Download</ListGroup.Item>
      </ListGroup>
    </CodePreview>
    <CodePreview title="List group with icons" className="w-48">
      <ListGroup>
        <ListGroup.Item active icon={HiUserCircle}>
          Profile
        </ListGroup.Item>
        <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
        <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
        <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
      </ListGroup>
    </CodePreview>
  </DocsContentLayout>
);

export default ListGroupPage;
