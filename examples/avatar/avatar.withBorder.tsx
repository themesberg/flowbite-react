import { type CodeData } from '~/app/components/code-demo';
import { Avatar } from '~/src';

const code = `
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered />
      <Avatar img="/images/people/profile-picture-5.jpg" bordered />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered />
      <Avatar img="/images/people/profile-picture-5.jpg" bordered />
    </div>
  );
}

export const withBorder: CodeData = {
  type: 'single',
  code: {
    fileName: 'AvatarWithBorder',
    language: 'tsx',
    code,
  },
  githubSlug: 'avatar/avatar.withBorder.tsx',
  component: <Component />,
};
