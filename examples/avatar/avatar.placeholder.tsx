import { type CodeData } from '~/app/components/code-demo';
import { Avatar } from '~/src';

const code = `
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar />
      <Avatar rounded />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar />
      <Avatar rounded />
    </div>
  );
}

export const placeholder: CodeData = {
  fileName: 'AvatarPlaceholder',
  code,
  language: 'tsx',
  githubSlug: 'components/avatar.md#avatar-placeholder',
  component: <Component />,
};
