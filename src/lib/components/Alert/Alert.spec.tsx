import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { HiEye, HiInformationCircle } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { Alert } from '.';

describe.concurrent('Alert', () => {
  describe('that is dismissable', () => {
    describe('and user clicks X to dismiss', () => {
      it('should run its dismiss callback', () => {
        const { getByRole, getByTestId } = render(<TestAlert />);
        const alert = getByRole('alert');
        const dismissButton = getByTestId('alert-dismiss');

        userEvent.click(dismissButton);
        expect(alert).toHaveTextContent('dismissed');
      });
    });
  });
});

const TestAlert = (): JSX.Element => {
  const [isDismissed, setDismissed] = useState(false);

  return (
    <Alert
      additionalContent={
        <>
          <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
            More info about this info alert goes here. This example text is going to run a bit longer so that you can
            see how spacing within an alert works with this kind of content.
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
      color="info"
      icon={HiInformationCircle}
      onDismiss={() => setDismissed(!isDismissed)}
    >
      {isDismissed ? 'dismissed' : 'waiting'}
    </Alert>
  );
};
