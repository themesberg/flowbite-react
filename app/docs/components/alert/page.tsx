'use client';

import type { FC } from 'react';
import { HiEye, HiInformationCircle } from 'react-icons/hi';
import { CodePreview } from '~/app/components/code-preview';
import { Alert } from '~/src';

const AlertPage: FC = () => (
  <div className="divide-y divide-gray-200 dark:divide-gray-800">
    <div className="pb-8">
      <h1 className="mb-2 inline-block w-full text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        React Alert - Flowbite
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Learn more about the free and open-source Flowbite React UI components and start building modern web
        applications using native React components based on Tailwind CSS
      </p>
    </div>
    <div id="mainContent" className="py-8">
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
    </div>
  </div>
);

const ExampleAdditionalContent: FC = () => (
  <>
    <div className="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </div>
    <div className="flex">
      <button
        type="button"
        className="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
      >
        <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
        View more
      </button>
      <button
        type="button"
        className="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
      >
        Dismiss
      </button>
    </div>
  </>
);

export default AlertPage;
