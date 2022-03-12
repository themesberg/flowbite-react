import { FC } from 'react';
import { HiEye, HiInformationCircle } from 'react-icons/hi';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';

SyntaxHighlighter.registerLanguage('tsx', tsx);

import { Alert, Card } from '../components';

const AlertsPage: FC = () => {
  const alertText = (
    <>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </>
  );

  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-4 dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Default alert</span>
        <Card>
          <Alert color="blue">{alertText}</Alert>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Alert color="blue">
  <span className="font-medium">Info alert!</span> Change a few things...
</Alert>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Alerts with icon</span>
        <Card>
          <Alert color="red" Icon={HiInformationCircle}>
            {alertText}
          </Alert>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Alert color="red" Icon={HiInformationCircle}>
  <span className="font-medium">Info alert!</span> Change a few things...
</Alert>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Dismissible alerts</span>
        <Card>
          <Alert color="green" onDismiss={() => alert('Alert dismissed!')}>
            {alertText}
          </Alert>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Alert color="green" onDismiss={() => alert('Alert dismissed!')}>
  <span className="font-medium">Info alert!</span> Change a few things...
</Alert>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Rounded</span>
        <Card>
          <Alert color="yellow" rounded={false}>
            {alertText}
          </Alert>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Alert color="yellow" rounded={false}>
  <span className="font-medium">Info alert!</span> Change a few things...
</Alert>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Border accent</span>
        <Card>
          <Alert color="gray" withBorderAccent>
            {alertText}
          </Alert>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Alert color="gray" withBorderAccent>
  <span className="font-medium">Info alert!</span> Change a few things...
</Alert>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Additional content</span>
        <Card>
          <Alert
            color="blue"
            additionalContent={
              <>
                <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
                  More info about this info alert goes here. This example text is going to run a bit longer so that you
                  can see how spacing within an alert works with this kind of content.
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900"
                  >
                    <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
                    View more
                  </button>
                  <button
                    type="button"
                    className="text-blue-700 bg-transparent border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
                  >
                    Dismiss
                  </button>
                </div>
              </>
            }
            Icon={HiInformationCircle}
          >
            <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</h3>
          </Alert>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Alert
  color="blue"
  additionalContent={
    <>
      <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
        More info about this info alert goes here. This example text
        is going to run a bit longer so that you can see how spacing
        within an alert works with this kind of content.
      </div>
      <div className="flex">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900"
        >
          <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </button>
        <button
          type="button"
          className="text-blue-700 bg-transparent border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
        >
          Dismiss
        </button>
      </div>
    </>
  }
  Icon={HiInformationCircle}
>
  <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">
    This is a info alert
  </h3>
</Alert>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">All options</span>
        <Card>
          <Alert
            color="green"
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
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900"
                  >
                    <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
                    View more
                  </button>
                  <button
                    type="button"
                    className="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white"
                  >
                    Dismiss
                  </button>
                </div>
              </>
            }
            Icon={HiInformationCircle}
          >
            <h3 className="text-lg font-medium text-green-700 dark:text-green-800">This is a info alert</h3>
          </Alert>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Alert
  color="green"
  rounded={false}
  withBorderAccent
  onDismiss={() => alert('Alert dismissed!')}
  additionalContent={
    <>
      <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
        More info about this info alert goes here. This example text
        is going to run a bit longer so that you can see how spacing
        within an alert works with this kind of content.
      </div>
      <div className="flex">
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900"
        >
          <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </button>
        <button
          type="button"
          className="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white"
        >
          Dismiss
        </button>
      </div>
    </>
  }
  Icon={HiInformationCircle}
>
  <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
    This is a info alert
  </h3>
</Alert>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
    </div>
  );
};

export default AlertsPage;
