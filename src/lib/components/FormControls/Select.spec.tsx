import { render } from '@testing-library/react';
import { Select } from './Select';

describe('Components / Form controls / Select', () => {
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
