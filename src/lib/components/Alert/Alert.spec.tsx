import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC, useState } from 'react';
import { HiEye, HiInformationCircle } from 'react-icons/hi';
import { describe, expect, it, vi } from 'vitest';
import { Alert } from './Alert';

describe.concurrent('Components / Alert', () => {
  describe.concurrent('A11y', () => {
    it('should have `role="alert"`', () => {
      render(<TestAlert />);

      expect(alert()).toBeInTheDocument();
    });
  });

  describe.concurrent('Keyboard interactions', () => {
    it('should dismiss when `Tab` is pressed to navigate to Dismiss button and `Space` is pressed', async () => {
      const onDismiss = vi.fn();
      const user = userEvent.setup();
      render(<Alert onDismiss={onDismiss} />);

      await waitFor(async () => {
        await user.tab();

        expect(dismiss()).toHaveFocus();
      });

      await user.keyboard('[Space]');

      expect(onDismiss).toHaveBeenCalled();
    });
  });

  describe.concurrent('Props', () => {
    it('should call `onDismiss` when clicked', async () => {
      const onDismiss = vi.fn();
      const user = userEvent.setup();
      render(<Alert onDismiss={onDismiss} />);

      await user.click(dismiss());

      expect(onDismiss).toHaveBeenCalled();
    });
  });
});

const TestAlert: FC = () => {
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
      rounded
      withBorderAccent
    >
      {isDismissed ? 'dismissed' : 'waiting'}
    </Alert>
  );
};

const alert = () => screen.getByRole('alert');

const dismiss = () => screen.getByLabelText('Dismiss');
