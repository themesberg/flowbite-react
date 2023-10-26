import { HiCheck } from 'react-icons/hi';
import { type CodeData } from '~/app/components/code-demo';
import { Badge } from '~/src';

const code = `
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
  code: {
    fileName: 'BadgeWithIconOnly',
    language: 'tsx',
    code,
  },
  githubSlug: 'components/badge.md#badge-with-icon-only',
  component: <Component />,
};
