import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Toast } from './Toast';

describe.concurrent('Components / Toast', () => {
  describe.concurrent('Keyboard interactions', () => {
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

      expect(toast().className).toContain('opacity-0');

      expect(handleClick).toHaveBeenCalled();
    });
  });
});

const toast = () => screen.getByTestId('flowbite-toast');
