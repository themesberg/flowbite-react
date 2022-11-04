import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { Button } from '../Button';
import type { ModalProps } from './Modal';
import { Modal } from './Modal';

describe('Components / Modal', () => {
  describe('A11y', () => {
    it('should have `role="dialog"`', async () => {
      const user = userEvent.setup();
      const root = document.createElement('div');

      render(<TestModal root={root} />);

      const openButton = screen.getByRole('button');

      await user.click(openButton);

      const modal = within(root).getByRole('dialog');

      expect(modal).toBeDefined();
    });
  });

  describe('Keyboard interactions', () => {
    it('should open `Modal` when `Space` is pressed on its toggle button', async () => {
      const root = document.createElement('div');
      const user = userEvent.setup();

      render(<TestModal root={root} />);

      const openButton = screen.getByRole('button');

      await user.click(openButton);

      const modal = within(root).getByRole('dialog');

      expect(root).toContainElement(modal);
      expect(modal).toHaveAttribute('aria-hidden', 'false');
    });

    it('should close `Modal` when `Space` is pressed on any of its buttons', async () => {
      const root = document.createElement('div');
      const user = userEvent.setup();

      render(<TestModal root={root} />);

      const openButton = screen.getByRole('button');

      await user.click(openButton);

      const modal = within(root).getByRole('dialog');
      const closeButton = within(modal).getAllByRole('button')[0];

      expect(modal).toHaveAttribute('aria-hidden', 'false');

      await user.click(closeButton);

      expect(modal).toHaveAttribute('aria-hidden', 'true');
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
