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
  type: 'single',
  code: {
    fileName: 'Alert',
    language: 'tsx',
    code,
  },
  githubSlug: 'alert/alert.root.tsx',
  component: <Component />,
};
