import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useCallback, useState } from 'react';
import { describe, expect, it } from 'vitest';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import type { ModalProps } from './Modal';
import { Modal } from './Modal';

describe('Components / Modal', () => {
  it('should automatically focus the `TextInput` inside the `Modal` when its opened', async () => {
    const root = document.createElement('div');
    const user = userEvent.setup();

    render(<TestModal root={root} />);

    const openButton = screen.getByRole('button');

    await user.click(openButton);

    const modal = within(root).getByRole('dialog');
    const input = within(modal).getByTestId('text-input');

    waitFor(() => expect(input).toHaveFocus());
  });

  it('should be removed from DOM and garbage collected', async () => {
    const root = document.createElement('div');

    const { unmount } = render(<TestModal root={root} />);

    unmount();

    await waitFor(() => expect(root.childNodes.length).toBe(0));
  });

  it('should be closed by clicking outside if the "dismissible" prop is passed.', async () => {
    const root = document.createElement('div');
    const user = userEvent.setup();

    render(<TestModal root={root} dismissible />);

    const openButton = screen.getByRole('button');

    await user.click(openButton);

    const modal = within(root).getByRole('dialog');

    expect(modal).toHaveAttribute('aria-hidden', 'false');

    await user.click(modal);

    expect(modal).toHaveAttribute('aria-hidden', 'true');
  });

  it('should be closed by Esc key press.', async () => {
    const root = document.createElement('div');
    const user = userEvent.setup();

    render(<TestModal root={root} dismissible />);

    const openButton = screen.getByRole('button');

    await user.click(openButton);

    const modal = within(root).getByRole('dialog');

    expect(modal).toHaveAttribute('aria-hidden', 'false');

    await user.keyboard('[Escape]');

    expect(modal).toHaveAttribute('aria-hidden', 'true');
  });

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

const TestModal = ({ root, dismissible = false }: Pick<ModalProps, 'root' | 'dismissible'>): JSX.Element => {
  const [open, setOpen] = useState(false);

  const setInputRef = useCallback(
    (input: HTMLInputElement) => {
      if (open && input) {
        input.focus();
      }
    },
    [open],
  );

  return (
    <>
      <Button onClick={() => setOpen(true)}>Toggle modal</Button>
      <Modal dismissible={dismissible} root={root} show={open} onClose={() => setOpen(false)}>
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
          <TextInput data-testid="text-input" ref={setInputRef} autoFocus />
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
