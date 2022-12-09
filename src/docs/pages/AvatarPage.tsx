import type { FC } from 'react';
import { Avatar, Dropdown } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

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
      title: 'Colored Avatar',
      code: (
        <>
          <div className="flex flex-wrap gap-2">
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded bordered color="gray" />
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
              bordered
              color="light"
            />
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
              bordered
              color="purple"
            />
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
              bordered
              color="success"
            />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded bordered color="pink" />
          </div>

          <div className="flex flex-wrap gap-2">
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" bordered color="gray" />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" bordered color="light" />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" bordered color="purple" />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" bordered color="success" />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" bordered color="pink" />
          </div>
        </>
      ),
    },
    {
      title: 'Override Image Element',
      code: (
        <div className="flex flex-wrap gap-2">
          <Avatar
            img={(props) => (
              <img
                referrerPolicy="no-referrer"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                {...props}
              />
            )}
          />
          <Avatar
            img={(props) => (
              <picture>
                <source
                  media="(min-width: 900px)"
                  srcSet="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                />
                <source
                  media="(min-width: 480px)"
                  srcSet="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                />
                <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" {...props} />
              </picture>
            )}
          />
        </div>
      ),
      rawCode: `<div className="flex flex-wrap gap-2">
  <Avatar
    img={(props) => (
      <img
        referrerPolicy="no-referrer"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        {...props}
      />
    )}
  />
  <Avatar
    img={(props) => (
      <picture>
        <source
          media="(min-width: 900px)"
          srcSet="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        />
        <source
          media="(min-width: 480px)"
          srcSet="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
        />
        <img 
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
          {...props} 
        />
      </picture>
    )}
  />
</div>`,
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
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" status="online" />
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded
            status="busy"
            statusPosition="top-right"
          />
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            status="offline"
            statusPosition="bottom-left"
          />
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded
            status="away"
            statusPosition="bottom-right"
          />
        </div>
      ),
    },
    {
      title: 'Stacked',
      code: (
        <>
          <Avatar.Group>
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded stacked />
          </Avatar.Group>
          <Avatar.Group>
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded stacked />
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded stacked />
            <Avatar.Counter total={99} href="#" />
          </Avatar.Group>
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
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
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
    {
      title: 'Alternative text',
      code: (
        <Avatar
          alt="Default avatar with alt text"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
        />
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default AvatarPage;
