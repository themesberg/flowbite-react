import { render, screen } from '@testing-library/react';
import { HiCheck } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { Flowbite } from '../Flowbite';
import { Badge } from './Badge';

describe('Components / Badge', () => {
  describe('Rendering', () => {
    it('should render an `<a>` given `href=".."`', () => {
      render(
        <Badge href="/" icon={HiCheck}>
          A badge with a link
        </Badge>,
      );

      expect(link()).toBeInTheDocument();
      expect(link()).toHaveAttribute('href', '/');
    });
  });

  describe('Theme', () => {
    it('should use custom colors', () => {
      const theme = {
        badge: {
          root: {
            color: {
              primary:
                'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
            },
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Badge color="primary" href="/" icon={HiCheck}>
            A badge
          </Badge>
        </Flowbite>,
      );

      expect(badge()).toHaveClass(
        'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
      );
    });

    it('should use custom sizes', () => {
      const theme = {
        badge: {
          root: {
            size: {
              xxl: 'text-2xl',
            },
          },
          icon: {
            off: 'rounded-lg p-1',
            on: 'rounded-full p-5',
            size: {
              xxl: 'w-6 h-6',
            },
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Badge size="xxl">A badge</Badge>
          <Badge icon={HiCheck} size="xxl" />
        </Flowbite>,
      );

      const badges = screen.getAllByTestId('flowbite-badge');
      const regularBadge = badges[0];
      const emptyBadge = badges[1];

      expect(regularBadge).toHaveClass('text-2xl');
      expect(regularBadge).toHaveClass('rounded-lg p-1');
      expect(emptyBadge).toHaveClass('rounded-full p-5');
      expect(icon()).toHaveClass('w-6 h-6');
    });
  });
});

const badge = () => screen.getByTestId('flowbite-badge');

const icon = () => screen.getByTestId('flowbite-badge-icon');

const link = () => screen.getByRole('link');
