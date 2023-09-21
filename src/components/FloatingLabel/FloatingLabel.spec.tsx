import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FloatingLabel } from '~/src/components/FloatingLabel/FloatingLabel';

describe('Components / Floating Label', () => {
  describe('Floating Label properties', () => {
    it('should have `role="textbox"` by default', () => {
      const textInput = render(<FloatingLabel variant={'filled'} label={'Label'} />).getByRole('textbox');
      expect(textInput).toBeInTheDocument();
    });

    it('should have a label', () => {
      const input = render(<FloatingLabel variant={'filled'} label={'Label'} />).getByLabelText('Label');
      expect(input).toBeInTheDocument();
    });
  });
});
