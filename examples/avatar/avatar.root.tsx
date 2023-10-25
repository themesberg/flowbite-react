import { type CodeData } from '~/app/components/code-demo';
import { Avatar } from '~/src';

const code = `
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
      <Avatar img="/images/people/profile-picture-5.jpg" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
      <Avatar img="/images/people/profile-picture-5.jpg" />
    </div>
  );
}

export const root: CodeData = {
  type: 'single',
  code: {
    fileName: 'Avatar',
    language: 'tsx',
    code,
  },
  githubSlug: 'components/avatar.md#default-avatar',
  component: <Component />,
};
