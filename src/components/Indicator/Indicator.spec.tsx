import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Flowbite } from '../../';
import { Indicator } from './Indicator';

describe('Components / Indicator', () => {
  describe('Theme', () => {
    it('should use custom `base` classes', () => {
      const theme = {
        indicator: {
          root: {
            base: 'bg-yellow-400 dark:bg-yellow-40',
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Indicator />
        </Flowbite>,
      );
      expect(indicator()).toBeInTheDocument();
      expect(indicator()).toHaveClass('bg-yellow-400 dark:bg-yellow-40');
    });
  });

  describe('Rendering', () => {
    it('should render when `children={0}`', () => {
      render(<Indicator>0</Indicator>);
      expect(indicator()).toHaveTextContent('0');
    });
  });
});

const indicator = () => screen.getByTestId('flowbite-indicator');
