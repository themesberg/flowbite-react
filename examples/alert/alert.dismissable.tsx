'use client';

import { type CodeData } from '~/app/components/code-demo';
import { Alert } from '~/src';

const code = `
import { Alert } from 'flowbite-react';

function Component() {
  return (
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
}
`;

function Component() {
  return (
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
}

export const dismissable: CodeData = {
  type: 'single',
  code: {
    fileName: 'DismissableAlert',
    language: 'tsx',
    code,
  },
  githubSlug: 'components/alert.md#dismissable-alert',
  component: <Component />,
};