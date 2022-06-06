import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import type { ModalProps } from '.';
import { Modal } from '.';
import { Button } from '../Button';

describe.concurrent('Components / Modal', () => {
  describe('when trigger on page is clicked', () => {
    it('should open', () => {
      const root = document.createElement('div');
      const buttonContainer = render(<TestModal root={root} />);
      const modalContainer = within(root);
      const openButton = buttonContainer.getByRole('button');

      let modal = modalContainer.queryByTestId('modal');
      expect(modal).toBeNull();

      userEvent.click(openButton);

      modal = modalContainer.getByTestId('modal');
      expect(root).toContainElement(modal);
      expect(modal).toHaveAttribute('aria-hidden', 'false');
    });
  });

  describe('when trigger inside modal is clicked', () => {
    it('should close', () => {
      const root = document.createElement('div');
      const buttonContainer = render(<TestModal root={root} />);
      const modalContainer = within(root);

      const openButton = buttonContainer.getByRole('button');
      userEvent.click(openButton);

      const closeButton = modalContainer.getAllByRole('button')[0];
      userEvent.click(closeButton);

      const modal = modalContainer.queryByTestId('modal');
      expect(modal).toBeNull();
    });
  });
});

const TestModal = ({ root }: Pick<ModalProps, 'root'>): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Toggle modal</Button>
      <Modal root={root} show={open} onClose={() => setOpen(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
