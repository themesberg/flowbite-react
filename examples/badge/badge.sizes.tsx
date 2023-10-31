import { type CodeData } from '~/components/code-demo';
import { Badge } from '~/src';

const code = `
'use client';

import { Badge } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="info" size="sm">
        Default
      </Badge>
      <Badge color="gray" size="sm">
        Dark
      </Badge>
      <Badge color="failure" size="sm">
        Failure
      </Badge>
      <Badge color="success" size="sm">
        Success
      </Badge>
      <Badge color="warning" size="sm">
        Warning
      </Badge>
      <Badge color="indigo" size="sm">
        Indigo
      </Badge>
      <Badge color="purple" size="sm">
        Purple
      </Badge>
      <Badge color="pink" size="sm">
        Pink
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
      <Badge color="info" size="sm">
        Default
      </Badge>
      <Badge color="gray" size="sm">
        Dark
      </Badge>
      <Badge color="failure" size="sm">
        Failure
      </Badge>
      <Badge color="success" size="sm">
        Success
      </Badge>
      <Badge color="warning" size="sm">
        Warning
      </Badge>
      <Badge color="indigo" size="sm">
        Indigo
      </Badge>
      <Badge color="purple" size="sm">
        Purple
      </Badge>
      <Badge color="pink" size="sm">
        Pink
      </Badge>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="info" size="sm">
        Default
      </Badge>
      <Badge color="gray" size="sm">
        Dark
      </Badge>
      <Badge color="failure" size="sm">
        Failure
      </Badge>
      <Badge color="success" size="sm">
        Success
      </Badge>
      <Badge color="warning" size="sm">
        Warning
      </Badge>
      <Badge color="indigo" size="sm">
        Indigo
      </Badge>
      <Badge color="purple" size="sm">
        Purple
      </Badge>
      <Badge color="pink" size="sm">
        Pink
      </Badge>
    </div>
  );
}

export const sizes: CodeData = {
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
  githubSlug: 'badge/badge.sizes.tsx',
  component: <Component />,
};
