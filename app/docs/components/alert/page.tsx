'use client';

import type { FC } from 'react';
import { HiEye, HiInformationCircle } from 'react-icons/hi';
import { CodePreview } from '~/app/components/code-preview';
import { Alert } from '~/src';

const AlertPage: FC = () => (
  <>
    <CodePreview title="Default alert">
      <Alert color="info">
        <span>
          <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </span>
      </Alert>
    </CodePreview>
    <CodePreview title="Alert with icon">
      <Alert color="failure" icon={HiInformationCircle}>
        <span>
          <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </span>
      </Alert>
    </CodePreview>
    <CodePreview title="Dismissable alert">
      <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
        <span>
          <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </span>
      </Alert>
    </CodePreview>
    <CodePreview title="Rounded">
      <Alert color="warning" rounded>
        <span>
          <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </span>
      </Alert>
    </CodePreview>
    <CodePreview title="Border accent">
      <Alert color="warning" withBorderAccent>
        <span>
          <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </span>
      </Alert>
    </CodePreview>
    <CodePreview title="Additional content">
      <Alert additionalContent={<ExampleAdditionalContent />} color="warning" icon={HiInformationCircle}>
        <span>
          <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </span>
      </Alert>
    </CodePreview>
    <CodePreview title="All options">
      <Alert
        additionalContent={<ExampleAdditionalContent />}
        color="success"
        icon={HiInformationCircle}
        onDismiss={() => alert('Alert dismissed!')}
        rounded
      >
        <span>
          <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </span>
      </Alert>
    </CodePreview>
  </>
);

const ExampleAdditionalContent: FC = () => (
  <>
    <div className="mb-4 mt-2 text-sm text-primary-700 dark:text-primary-800">
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </div>
    <div className="flex">
      <button
        type="button"
        className="mr-2 inline-flex items-center rounded-lg bg-primary-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-800 dark:hover:bg-primary-900"
      >
        <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
        View more
      </button>
      <button
        type="button"
        className="rounded-lg border border-primary-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-primary-700 hover:bg-primary-800 hover:text-white focus:ring-4 focus:ring-primary-300 dark:border-primary-800 dark:text-primary-800 dark:hover:text-white"
      >
        Dismiss
      </button>
    </div>
  </>
);

export default AlertPage;
