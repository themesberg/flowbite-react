import { FC } from 'react';

import { Avatar, Dropdown } from '../components';
import { AvatarGroup } from '../components/AvatarGroup';
import { CodeExample, DemoPage } from './DemoPage';

const AvatarPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Avatar',
      code: (
        <div className="flex flex-wrap gap-2">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
        </div>
      ),
    },
    {
      title: 'Bordered Avatar',
      code: (
        <div className="flex flex-wrap gap-2">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded bordered />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" bordered />
        </div>
      ),
    },
    {
      title: 'Placeholder',
      code: (
        <div className="flex flex-wrap gap-2">
          <Avatar />
          <Avatar rounded />
        </div>
      ),
    },
    {
      title: 'Dot indicator',
      code: (
        <div className="flex flex-wrap gap-2">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" status="online" />
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded
            status="busy"
            statusPosition="top-left"
          />
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            status="offline"
            statusPosition="bottom-right"
          />
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded
            status="away"
            statusPosition="bottom-left"
          />
        </div>
      ),
    },
    {
      title: 'Stacked',
      code: (
        <>
          <AvatarGroup>
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded stacked />
          </AvatarGroup>
          <AvatarGroup>
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded stacked />
            <AvatarGroup.Counter total={99} href="#" />
          </AvatarGroup>
        </>
      ),
    },
    {
      title: 'Avatar text',
      code: (
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded>
          <div className="space-y-1 font-medium dark:text-white">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
          </div>
        </Avatar>
      ),
    },
    {
      title: 'User dropdown',
      code: (
        <Dropdown
          label={<Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
          arrowIcon={false}
          inline
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Sizing',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="xs" />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="sm" />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="md" />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="lg" />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="xl" />
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default AvatarPage;
