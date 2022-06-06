import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Radio } from './Radio';

describe.concurrent('Components / Form controls / Radio', () => {
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
