import { HiCheck, HiClock } from 'react-icons/hi';
import { type CodeData } from '~/app/components/code-demo';
import { Badge } from '~/src';

const code = `
import { Badge } from 'flowbite-react';
import { HiCheck, HiClock } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck}>2 minutes ago</Badge>
      <Badge color="gray" icon={HiClock}>
        3 days ago
      </Badge>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck}>2 minutes ago</Badge>
      <Badge color="gray" icon={HiClock}>
        3 days ago
      </Badge>
    </div>
  );
}

export const withIcon: CodeData = {
  type: 'single',
  code: {
    fileName: 'BadgeWithIcon',
    language: 'tsx',
    code,
  },
  githubSlug: 'badge/badge.withIcon.tsx',
  component: <Component />,
};
