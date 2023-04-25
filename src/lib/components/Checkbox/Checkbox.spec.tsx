import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Flowbite } from '../Flowbite';
import { Checkbox } from './Checkbox';

describe.concurrent('Components / Checkbox', () => {
  describe.concurrent('A11y', () => {
    it('should have role="checkbox" by default', () => {
      const checkbox = render(<Checkbox />).getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('Theme', () => {
    it('should use custom `base` classes', () => {
      const theme = {
        checkbox: {
          root: {
            base: 'bg-yellow-400 dark:bg-yellow-40',
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Checkbox />
        </Flowbite>,
      );

      expect(checkbox()).toHaveClass('bg-yellow-400 dark:bg-yellow-40');
    });
  });
});

const checkbox = () => screen.getByRole('checkbox');
