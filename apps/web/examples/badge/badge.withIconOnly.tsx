import { Badge } from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';
import { type CodeData } from '~/components/code-demo';

const code = `
'use client';

import { Badge } from 'flowbite-react';
import { HiCheck, HiClock } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck} />
      <Badge color="gray" icon={HiCheck} />
      <Badge size="sm" icon={HiCheck} />
      <Badge color="gray" size="sm" icon={HiCheck} />
    </div>
  );
}
`;

const codeRSC = `
import { Badge } from 'flowbite-react';
import { HiCheck, HiClock } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck} />
      <Badge color="gray" icon={HiCheck} />
      <Badge size="sm" icon={HiCheck} />
      <Badge color="gray" size="sm" icon={HiCheck} />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck} />
      <Badge color="gray" icon={HiCheck} />
      <Badge size="sm" icon={HiCheck} />
      <Badge color="gray" size="sm" icon={HiCheck} />
    </div>
  );
}

export const withIconOnly: CodeData = {
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
  githubSlug: 'badge/badge.withIconOnly.tsx',
  component: <Component />,
};
