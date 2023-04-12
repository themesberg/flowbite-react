'use client';

import type { FC } from 'react';
import { HiEye, HiInformationCircle } from 'react-icons/hi';
import { CodePreview } from '~/app/components/code-preview';
import type { AlertProps } from '~/src';
import { Alert } from '~/src';

const AlertPage: FC = () => {
  return (
    <>
      <CodePreview>
        <CodePreview.Title>Default alert</CodePreview.Title>
        <CodePreview.Card>
          <ExampleAlert color="info" />
        </CodePreview.Card>
      </CodePreview>
      <CodePreview>
        <CodePreview.Title>Alert with icon</CodePreview.Title>
        <CodePreview.Card>
          <ExampleAlert color="failure" icon={HiInformationCircle} />
        </CodePreview.Card>
      </CodePreview>
      <CodePreview>
        <CodePreview.Title>Dismissable alert</CodePreview.Title>
        <CodePreview.Card>
          <ExampleAlert color="success" onDismiss={() => alert('Alert dismissed!')} />
        </CodePreview.Card>
      </CodePreview>
      <CodePreview>
        <CodePreview.Title>Rounded</CodePreview.Title>
        <CodePreview.Card>
          <ExampleAlert color="warning" rounded />
        </CodePreview.Card>
      </CodePreview>
      <CodePreview>
        <CodePreview.Title>Border accent</CodePreview.Title>
        <CodePreview.Card>
          <ExampleAlert color="warning" withBorderAccent />
        </CodePreview.Card>
      </CodePreview>
      <CodePreview>
        <CodePreview.Title>Additional content</CodePreview.Title>
        <CodePreview.Card>
          <ExampleAlert additionalContent={<ExampleAdditionalContent />} color="warning" icon={HiInformationCircle} />
        </CodePreview.Card>
      </CodePreview>
      <CodePreview>
        <CodePreview.Title>All options</CodePreview.Title>
        <CodePreview.Card>
          <ExampleAlert
            additionalContent={<ExampleAdditionalContent />}
            color="success"
            icon={HiInformationCircle}
            onDismiss={() => alert('Alert dismissed!')}
            rounded
          />
        </CodePreview.Card>
      </CodePreview>
    </>
  );
};

const ExampleAlert: FC<AlertProps> = (props) => {
  return (
    <Alert {...props}>
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
};

const ExampleAdditionalContent: FC = () => {
  return (
    <>
      <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div className="flex">
        <button
          type="button"
          className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900"
        >
          <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </button>
        <button
          type="button"
          className="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
        >
          Dismiss
        </button>
      </div>
    </>
  );
};

export default AlertPage;
