import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Select } from './Select';

describe.concurrent('Components / Form controls / Select', () => {
  it('should render', () => {
    render(<Select />);
  });

  describe('A11y', () => {
    it('should have role="combobox" by default', () => {
      const select = render(<Select />).getByRole('combobox');

      expect(select).toBeInTheDocument();
    });
  });
});
