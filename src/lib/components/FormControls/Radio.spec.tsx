import { render } from '@testing-library/react';
import { Radio } from './Radio';

describe('Components / Form controls / Radio', () => {
  it('should render', () => {
    render(<Radio />);
  });

  describe('A11y', () => {
    it('should have role="radio" by default', () => {
      const radio = render(<Radio />).getByRole('radio');

      expect(radio).toBeInTheDocument();
    });
  });
});
