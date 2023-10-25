import { type CodeData } from '~/app/components/code-demo';
import { Avatar } from '~/src';

const code = `
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" status="online" />
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="busy" statusPosition="top-right" />
      <Avatar img="/images/people/profile-picture-5.jpg" status="offline" statusPosition="bottom-left" />
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="away" statusPosition="bottom-right" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" status="online" />
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="busy" statusPosition="top-right" />
      <Avatar img="/images/people/profile-picture-5.jpg" status="offline" statusPosition="bottom-left" />
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="away" statusPosition="bottom-right" />
    </div>
  );
}

export const dotIndicator: CodeData = {
  type: 'single',
  code: {
    fileName: 'AvatarDotIndicator',
    language: 'tsx',
    code,
  },
  githubSlug: 'components/avatar.md#dot-indicator',
  component: <Component />,
};
