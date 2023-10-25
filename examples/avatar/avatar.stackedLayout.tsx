import { type CodeData } from '~/app/components/code-demo';
import { Avatar } from '~/src';

const code = `
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
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
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
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
    </div>
  );
}

export const stackedLayout: CodeData = {
  type: 'single',
  code: {
    fileName: 'AvatarStackedLayout',
    language: 'tsx',
    code,
  },
  githubSlug: 'components/avatar.md#stacked-layout',
  component: <Component />,
};
