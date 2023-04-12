import Image from 'next/image';
import type { FC } from 'react';
import { CodePreview } from '~/app/components/code-preview';
import { Avatar, Dropdown } from '~/src';

const AvatarPage: FC = () => {
  return (
    <>
    <CodePreview>
      <CodePreview.Title>Default avatar</CodePreview.Title>
      <CodePreview.Card>
        <div className="flex flex-wrap gap-2">
          <Avatar img="/images/people/profile-picture-5.jpg" rounded />
          <Avatar img="/images/people/profile-picture-5.jpg" />
        </div>
      </CodePreview.Card>
    </CodePreview>
<CodePreview>
      <CodePreview.Title>Bordered avatar</CodePreview.Title>
      <CodePreview.Card>
        <div className="flex flex-wrap gap-2">
          <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered />
          <Avatar img="/images/people/profile-picture-5.jpg" bordered />
        </div>
      </CodePreview.Card>
    </CodePreview>
<CodePreview>
      <CodePreview.Title>Colored avatar</CodePreview.Title>
      <CodePreview.Card>
        <div className="flex flex-wrap gap-2">
            <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="gray" />
            <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="light" />
            <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="purple" />
            <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="success" />
            <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="pink" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Avatar img="/images/people/profile-picture-5.jpg" bordered color="gray" />
            <Avatar img="/images/people/profile-picture-5.jpg" bordered color="light" />
            <Avatar img="/images/people/profile-picture-5.jpg" bordered color="purple" />
            <Avatar img="/images/people/profile-picture-5.jpg" bordered color="success" />
            <Avatar img="/images/people/profile-picture-5.jpg" bordered color="pink" />
          </div>
      </CodePreview.Card>
    </CodePreview>
<CodePreview>
      <CodePreview.Title>Override image element</CodePreview.Title>
      <CodePreview.Card>
        <div className="flex flex-wrap gap-2">
          <Avatar
            img={(props) => (
              <Image
                alt=""
                height="48"
                referrerPolicy="no-referrer"
                src="/images/people/profile-picture-5.jpg"
                width="48"
                {...props}
              />
            )}
          />
          <Avatar
            img={(props) => (
              <picture>
                <source media="(min-width: 900px)" srcSet="/images/people/profile-picture-3.jpg" />
                <source media="(min-width: 480px)" srcSet="/images/people/profile-picture-4.jpg" />
                <Image alt="" height="48" src="/images/people/profile-picture-5.jpg" width="48" {...props} />
              </picture>
            )}
          />
        </div>
      </CodePreview.Card>
    </CodePreview>
    </>
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
      title: 'Placeholder',
      code: (
        <div className="flex flex-wrap gap-2">
          <Avatar />
          <Avatar rounded />
        </div>
      ),
    },
    {
      title: 'Placeholder Initials',
      code: (
        <div className="flex flex-wrap gap-2">
          <Avatar placeholderInitials="RR" />
        </div>
      ),
    },
    {
      title: 'Dot indicator',
      code: (
        <div className="flex flex-wrap gap-2">
          <Avatar img="/images/people/profile-picture-5.jpg" status="online" />
          <Avatar img="/images/people/profile-picture-5.jpg" rounded status="busy" statusPosition="top-right" />
          <Avatar img="/images/people/profile-picture-5.jpg" status="offline" statusPosition="bottom-left" />
          <Avatar img="/images/people/profile-picture-5.jpg" rounded status="away" statusPosition="bottom-right" />
        </div>
      ),
    },
    {
      title: 'Stacked',
      code: (
        <>
          <Avatar.Group>
            <Avatar img="/images/people/profile-picture-1.jpg" rounded stacked />
            <Avatar img="/images/people/profile-picture-2.jpg" rounded stacked />
            <Avatar img="/images/people/profile-picture-3.jpg" rounded stacked />
            <Avatar img="/images/people/profile-picture-4.jpg" rounded stacked />
            <Avatar img="/images/people/profile-picture-5.jpg" rounded stacked />
          </Avatar.Group>
          <Avatar.Group>
            <Avatar img="/images/people/profile-picture-1.jpg" rounded stacked />
            <Avatar img="/images/people/profile-picture-2.jpg" rounded stacked />
            <Avatar img="/images/people/profile-picture-3.jpg" rounded stacked />
            <Avatar img="/images/people/profile-picture-4.jpg" rounded stacked />
            <Avatar.Counter total={99} href="#" />
          </Avatar.Group>
        </>
      ),
    },
    {
      title: 'Avatar text',
      code: (
        <Avatar img="/images/people/profile-picture-5.jpg" rounded>
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
          label={<Avatar alt="User settings" img="/images/people/profile-picture-5.jpg" rounded />}
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
          <Avatar img="/images/people/profile-picture-5.jpg" size="xs" />
          <Avatar img="/images/people/profile-picture-5.jpg" size="sm" />
          <Avatar img="/images/people/profile-picture-5.jpg" size="md" />
          <Avatar img="/images/people/profile-picture-5.jpg" size="lg" />
          <Avatar img="/images/people/profile-picture-5.jpg" size="xl" />
        </div>
      ),
    },
    {
      title: 'Alternative text',
      code: <Avatar alt="Default avatar with alt text" img="/images/people/profile-picture-5.jpg" rounded />,
    },
  ];

  return <DemoPage examples={examples} />;
};

export default AvatarPage;
