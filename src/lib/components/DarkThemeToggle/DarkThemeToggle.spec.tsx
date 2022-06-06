import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { DarkThemeToggle } from '.';
import { Flowbite } from '../Flowbite';

describe.concurrent('Dark theme toggle', () => {
  describe('when clicked', () => {
    it('should toggle dark mode on page', () => {
      const { getByTestId, queryByTestId } = render(
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>,
      );

      const toggle = getByTestId('dark-theme-toggle');
      userEvent.click(toggle);
      expect(queryByTestId('dark-theme-toggle-enabled')).not.toBeInTheDocument();
      expect(getByTestId('dark-theme-toggle-disabled')).toBeInTheDocument();
    });
  });
});
