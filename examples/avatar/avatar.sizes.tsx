import { type CodeData } from '~/app/components/code-demo';
import { Avatar } from '~/src';

const code = `
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" size="xs" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="sm" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="md" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="lg" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="xl" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" size="xs" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="sm" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="md" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="lg" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="xl" />
    </div>
  );
}

export const sizes: CodeData = {
  type: 'single',
  code: {
    fileName: 'AvatarSizes',
    language: 'tsx',
    code,
  },
  githubSlug: 'components/avatar.md#sizes',
  component: <Component />,
};
