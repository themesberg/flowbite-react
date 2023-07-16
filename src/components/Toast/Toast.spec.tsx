import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Toast } from './Toast';

describe('Components / Toast', () => {
  beforeAll(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  beforeEach(() => {
    vi.clearAllTimers();
  });

  it('should remove `Toast` from DOM after give `duration` when `Toast.Toggle` is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Toast duration={200}>
        <Toast.Toggle onClick={handleClick} />
      </Toast>,
    );

    await user.click(toggle());
    expect(toast()?.className).toContain('opacity-0');

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(toast()).not.toBeInTheDocument();
  });

  it('should convert `Toast` to stateless when `onDismiss` is given to `Toast.Toggle`', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const handleDismiss = vi.fn();

    render(
      <Toast>
        <Toast.Toggle onDismiss={handleDismiss} onClick={handleClick} />
      </Toast>,
    );

    await user.click(toggle());
    expect(toast()?.className).not.toContain('opacity-0');

    expect(handleClick).toHaveBeenCalled();
    expect(handleDismiss).toHaveBeenCalled();

    act(() => {
      vi.runAllTimers();
    });

    expect(toast()).toBeInTheDocument();
  });

  describe('A11y', () => {
    it('should have `role=alert`', async () => {
      render(
        <Toast>
          <Toast.Toggle />
        </Toast>,
      );
      expect(toast()).toBeInTheDocument();
    });
  });

  describe('Keyboard interactions', () => {
    it('should close `Toast` when `Space` is pressed on `Toast.Toggle`', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Toast>
          <Toast.Toggle onClick={handleClick} />
        </Toast>,
      );

      await user.tab();
      await user.keyboard('[Space]');

      expect(toast()?.className).toContain('opacity-0');
      expect(handleClick).toHaveBeenCalled();
    });
  });
});

const toast = () => screen.queryByRole('alert');
const toggle = () => screen.getByRole('button');
