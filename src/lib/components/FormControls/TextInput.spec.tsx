import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TextInput } from './TextInput';

describe.concurrent('Components / Form controls / Text input', () => {
  it('should render', () => {
    render(<TextInput />);
  });

  describe('A11y', () => {
    it('should have role="textbox" by default', () => {
      const textInput = render(<TextInput />).getByRole('textbox');

      expect(textInput).toBeInTheDocument();
    });
  });
});
