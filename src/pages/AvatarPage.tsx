import { FC } from 'react';
import { HiEye, HiInformationCircle } from 'react-icons/hi';

import { Avatar } from '../components';
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
      code: <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" bordered />,
    },
    {
      title: 'Placeholder',
      code: <Avatar />,
    },
    {
      title: 'Dot indicator',
      code: <Avatar />,
    },
    {
      title: 'Stacked',
      code: <Avatar />,
    },
    {
      title: 'Avatar text',
      code: <Avatar />,
    },
    {
      title: 'User dropdown',
      code: <Avatar />,
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
