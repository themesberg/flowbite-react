import { HiInformationCircle } from 'react-icons/hi';
import { CodeData } from '~/app/components/code-demo';
import { Alert } from '~/src';

const code = `
import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';

function Component() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
}
`;

function Component() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
}

export const withIcon: CodeData = {
  fileName: 'AlertWithIcon',
  code,
  language: 'tsx',
  githubSlug: '',
  component: <Component />,
};
