import { Avatar, AvatarGroup } from 'flowbite-react';
import { type CodeData } from '~/components/code-demo';

const code = `
'use client';

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

const codeRSC = `
import { Avatar, AvatarGroup } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <AvatarGroup>
        <Avatar img="/images/people/profile-picture-1.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-2.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-3.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-4.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded stacked />
      </AvatarGroup>
      <AvatarGroup>
        <Avatar img="/images/people/profile-picture-1.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-2.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-3.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-4.jpg" rounded stacked />
        <Avatar.Counter total={99} href="#" />
      </AvatarGroup>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <AvatarGroup>
        <Avatar img="/images/people/profile-picture-1.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-2.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-3.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-4.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded stacked />
      </AvatarGroup>
      <AvatarGroup>
        <Avatar img="/images/people/profile-picture-1.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-2.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-3.jpg" rounded stacked />
        <Avatar img="/images/people/profile-picture-4.jpg" rounded stacked />
        <Avatar.Counter total={99} href="#" />
      </AvatarGroup>
    </div>
  );
}

export const stackedLayout: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'avatar/avatar.stackedLayout.tsx',
  component: <Component />,
};
