import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Toast } from '.';

describe.concurrent('Components / Toast', () => {
  describe.concurrent('Keyboard interactions', () => {
    it('should close `Toast` when `Space` is pressed on `Toast.Toggle`', async () => {
      const user = userEvent.setup();
      render(
        <Toast>
          <Toast.Toggle />
        </Toast>,
      );

      await user.tab();
      await user.keyboard('[Space]');

      expect(toast().className).toContain('opacity-0');
    });
  });
});

const toast = () => screen.getByTestId('flowbite-toast');
