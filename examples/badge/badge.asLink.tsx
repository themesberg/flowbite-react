import { type CodeData } from '~/app/components/code-demo';
import { Badge } from '~/src';

const code = `
import { Badge } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge href="/badges">Default</Badge>
      <Badge size="sm" href="/badges">
        Default
      </Badge>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge href="/badges">Default</Badge>
      <Badge size="sm" href="/badges">
        Default
      </Badge>
    </div>
  );
}

export const asLink: CodeData = {
  type: 'single',
  code: {
    fileName: 'BadgeAsLink',
    language: 'tsx',
    code,
  },
  githubSlug: 'components/badge.md#badge-as-link',
  component: <Component />,
};
