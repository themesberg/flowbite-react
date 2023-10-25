import { type CodeData } from '~/app/components/code-demo';
import { Avatar } from '~/src';

const code = `
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar placeholderInitials="RR" />
      <Avatar placeholderInitials="RR" rounded />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar placeholderInitials="RR" />
      <Avatar placeholderInitials="RR" rounded />
    </div>
  );
}

export const placeholderInitials: CodeData = {
  type: 'single',
  code: {
    fileName: 'AvatarPlaceholderInitials',
    language: 'tsx',
    code,
  },
  githubSlug: 'components/avatar.md#placeholder-initials',
  component: <Component />,
};
