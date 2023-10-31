import { type CodeData } from '~/components/code-demo';
import { Avatar } from '~/src';

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
