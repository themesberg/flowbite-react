import { render } from '@testing-library/react';
import { Spinner } from '.';

describe('Spinner', () => {
  describe('with light mode only specified', () => {
    it("shouldn't change styles in dark mode", () => {
      const { getByRole } = render(<Spinner light />);

      const spinner = getByRole('status').firstElementChild;
      expect(spinner?.getAttribute('class')).not.toContain('dark:');
    });
  });
});
