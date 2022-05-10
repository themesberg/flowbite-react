import { render } from '@testing-library/react';
import { HiCheck } from 'react-icons/hi';
import { Badge } from '.';

describe('Badge', () => {
  describe('with link', () => {
    it('should wrap Badge in anchor', () => {
      const { getByTestId } = render(
        <Badge href="/" icon={HiCheck}>
          A badge with a link
        </Badge>,
      );

      const badgeLink = getByTestId('badge-link');
      expect(badgeLink).toBeInTheDocument();
      expect(badgeLink).toHaveAttribute('href', '/');
    });
  });
});
