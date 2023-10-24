import { type CodeData } from '~/app/components/code-demo';
import { Alert } from '~/src';

const code = `
import { Alert } from 'flowbite-react';

function Component() {
  return (
    <Alert color="info">
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
}
`;

function Component() {
  return (
    <Alert color="info">
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
}

export const root: CodeData = {
  fileName: 'Alert',
  code,
  language: 'tsx',
  githubSlug: 'components/alert.md#default-alert',
  component: <Component />,
};
