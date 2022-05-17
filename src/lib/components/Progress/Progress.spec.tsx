import { render } from '@testing-library/react';
import { Progress } from '.';

describe('Components / Progress', () => {
  it('should render', () => {
    render(<Progress progress={45} />);
  });

  describe('Props', () => {
    describe('`label`', () => {
      it('should be the accessible name', () => {
        expect(
          render(<Progress label="Accessible name" labelPosition="outside" labelProgress progress={45} />).getByRole(
            'progressbar',
          ),
        ).toHaveAccessibleName('Accessible name');
      });
    });
  });

  describe('A11y', () => {
    it('should have role="progressbar"', () => {
      expect(render(<Progress label="Accessible name" progress={45} />).getByRole('progressbar')).toBeInTheDocument();
    });

    it('should report current progress value to screen readers', () => {
      expect(render(<Progress progress={45} />).getByRole('progressbar')).toHaveAttribute('aria-valuenow', '45');
    });
  });
});
