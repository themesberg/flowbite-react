import { type CodeData } from '~/app/components/code-demo';
import { Avatar } from '~/src';

const code = `
'use client';

import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="gray" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="light" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="purple" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="success" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="pink" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="gray" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="light" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="purple" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="success" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="pink" />
      </div>
    </div>
  );
}
`;

const codeRSC = `
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="gray" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="light" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="purple" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="success" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="pink" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="gray" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="light" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="purple" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="success" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="pink" />
      </div>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="gray" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="light" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="purple" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="success" />
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="pink" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="gray" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="light" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="purple" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="success" />
        <Avatar img="/images/people/profile-picture-5.jpg" bordered color="pink" />
      </div>
    </div>
  );
}

export const colors: CodeData = {
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
  githubSlug: 'avatar/avatar.colors.tsx',
  component: <Component />,
};
