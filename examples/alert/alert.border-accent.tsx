import { type CodeData } from '~/app/components/code-demo';
import { Alert } from '~/src';

const code = `
import { Alert } from 'flowbite-react';

function Component() {
  return (
    <Alert color="warning" withBorderAccent>
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
}
`;

function Component() {
  return (
    <Alert color="warning" withBorderAccent>
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
}

export const borderAccent: CodeData = {
  code: {
    fileName: 'BorderAccent',
    language: 'tsx',
    code,
  },
  githubSlug: 'components/alert.md#border-accent',
  component: <Component />,
};
