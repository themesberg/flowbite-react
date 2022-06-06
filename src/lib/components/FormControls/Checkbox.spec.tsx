import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Checkbox } from './Checkbox';

describe.concurrent('Components / Form controls / Checkbox', () => {
  it('should render', () => {
    render(<Checkbox />);
  });

  describe('A11y', () => {
    it('should have role="checkbox" by default', () => {
      const checkbox = render(<Checkbox />).getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });
  });
});
