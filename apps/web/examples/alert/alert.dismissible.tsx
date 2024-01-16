'use client';

import { Alert } from 'flowbite-react';
import { type CodeData } from '~/components/code-demo';

const code = `
'use client';

import { Alert } from 'flowbite-react';

function Component() {
  return (
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}
`;

function Component() {
  return (
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}

export const dismissible: CodeData = {
  type: 'single',
  code: {
    fileName: 'client',
    language: 'tsx',
    code,
  },
  githubSlug: 'alert/alert.dismissible.tsx',
  component: <Component />,
};
