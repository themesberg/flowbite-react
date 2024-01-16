import { Badge } from 'flowbite-react';
import { type CodeData } from '~/components/code-demo';

const code = `
'use client';

import { Badge } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge href="#">Default</Badge>
      <Badge size="sm" href="#">
        Default
      </Badge>
    </div>
  );
}
`;

const codeRSC = `
import { Badge } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge href="#">Default</Badge>
      <Badge size="sm" href="#">
        Default
      </Badge>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge href="#">Default</Badge>
      <Badge size="sm" href="#">
        Default
      </Badge>
    </div>
  );
}

export const asLink: CodeData = {
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
  githubSlug: 'badge/badge.asLink.tsx',
  component: <Component />,
};
