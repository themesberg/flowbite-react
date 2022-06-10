import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Select } from './Select';
import { Textarea } from './Textarea';

describe.concurrent('Components / Form controls / Select', () => {
  it('should render', () => {
    render(<Textarea rows={3} />);
  });

  describe('A11y', () => {
    it('should have role="combobox" by default', () => {
      const select = render(<Select />).getByRole('combobox');

      expect(select).toBeInTheDocument();
    });
  });
});
