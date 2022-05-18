import { render } from '@testing-library/react';
import { Select } from './Select';
import { Textarea } from './Textarea';

describe('Components / Form controls / Select', () => {
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
