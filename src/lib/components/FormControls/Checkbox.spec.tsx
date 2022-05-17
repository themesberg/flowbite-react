import { render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Components / Form controls / Checkbox', () => {
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
