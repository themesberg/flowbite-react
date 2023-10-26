import { type CodeData } from '~/app/components/code-demo';
import { Badge } from '~/src';

const code = `
import { Badge } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="info">Default</Badge>
      <Badge color="gray">Dark</Badge>
      <Badge color="failure">Failure</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="info">Default</Badge>
      <Badge color="gray">Dark</Badge>
      <Badge color="failure">Failure</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
    </div>
  );
}

export const root: CodeData = {
  type: 'single',
  code: {
    fileName: 'Badge',
    language: 'tsx',
    code,
  },
  githubSlug: 'components/badge.md#default-badges',
  component: <Component />,
};
