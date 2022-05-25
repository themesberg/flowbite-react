import { render } from '@testing-library/react';
import { HiCheck } from 'react-icons/hi';
import { Badge } from '.';
import { Flowbite } from '../Flowbite';

describe('Components / Badge', () => {
  describe('Rendering', () => {
    describe('"href" provided', () => {
      it('should wrap itself in anchor', () => {
        const { getByRole } = render(
          <Badge href="/" icon={HiCheck}>
            A badge with a link
          </Badge>,
        );
        const badgeLink = getByRole('link');

        expect(badgeLink).toBeInTheDocument();
        expect(badgeLink).toHaveAttribute('href', '/');
      });
    });
  });

  describe('Theme', () => {
    it('should use custom colors', () => {
      const theme = {
        badge: {
          color: {
            primary:
              'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
          },
        },
      };
      const { getByTestId } = render(
        <Flowbite theme={{ theme }}>
          <Badge color="primary" href="/" icon={HiCheck}>
            A badge
          </Badge>
        </Flowbite>,
      );
      const badge = getByTestId('flowbite-badge');

      expect(badge).toHaveClass(
        'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
      );
    });

    it('should use custom sizes', () => {
      const theme = {
        badge: {
          icon: {
            disabled: 'rounded-lg p-1',
            enabled: 'rounded-full p-5',
            size: {
              xxl: 'w-6 h-6',
            },
          },
          size: {
            xxl: 'text-2xl',
          },
        },
      };
      const { getAllByTestId, getByTestId } = render(
        <Flowbite theme={{ theme }}>
          <Badge size="xxl">A badge</Badge>
          <Badge icon={HiCheck} size="xxl" />
        </Flowbite>,
      );
      const badges = getAllByTestId('flowbite-badge');
      const icon = getByTestId('flowbite-badge-icon');
      const regularBadge = badges[0];
      const emptyBadge = badges[1];

      expect(regularBadge).toHaveClass('text-2xl');
      expect(regularBadge).toHaveClass('rounded-lg p-1');
      expect(emptyBadge).toHaveClass('rounded-full p-5');
      expect(icon).toHaveClass('w-6 h-6');
    });
  });
});
