import type { FC } from 'react';
import { HiEye, HiInformationCircle } from 'react-icons/hi';
import { Alert } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const AlertsPage: FC = () => {
  const alertText = (
    <span>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </span>
  );

  const examples: CodeExample[] = [
    {
      title: 'Default alert',
      code: <Alert color="info">{alertText}</Alert>,
    },
    {
      title: 'Alerts with icon',
      code: (
        <Alert color="failure" icon={HiInformationCircle}>
          {alertText}
        </Alert>
      ),
    },
    {
      title: 'Dismissible alerts',
      code: (
        <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
          {alertText}
        </Alert>
      ),
      codeStringifierOptions: { functionValue: (fn) => fn },
    },
    {
      title: 'Rounded',
      code: (
        <Alert color="warning" rounded={false}>
          {alertText}
        </Alert>
      ),
    },
    {
      title: 'Border accent',
      code: (
        <Alert color="warning" withBorderAccent>
          {alertText}
        </Alert>
      ),
    },
    {
      title: 'Additional content',
      code: (
        <Alert
          color="info"
          additionalContent={
            <>
              <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
                More info about this info alert goes here. This example text is going to run a bit longer so that you
                can see how spacing within an alert works with this kind of content.
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
          }
          icon={HiInformationCircle}
        >
          <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</h3>
        </Alert>
      ),
    },
    {
      title: 'All options',
      code: (
        <Alert
          color="success"
          rounded={false}
          withBorderAccent
          onDismiss={() => alert('Alert dismissed!')}
          additionalContent={
            <>
              <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
                More info about this info alert goes here. This example text is going to run a bit longer so that you
                can see how spacing within an alert works with this kind of content.
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
                >
                  <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
                  View more
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
                >
                  Dismiss
                </button>
              </div>
            </>
          }
          icon={HiInformationCircle}
        >
          <h3 className="text-lg font-medium text-green-700 dark:text-green-800">This is a info alert</h3>
        </Alert>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default AlertsPage;
