import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner } from '.';
import { Flowbite } from '../Flowbite';

describe.concurrent('Components / Spinner', () => {
  describe('A11y', () => {
    it('should have `role="status"` by default', () => {
      const spinner = getSpinner(render(<Spinner aria-label="My spinner" />));

      expect(spinner).toHaveAccessibleName('My spinner');
    });

    it('should be able to set no `role`', () => {
      const { getByLabelText } = render(<Spinner aria-label="My spinner" role={undefined} />);

      const spinner = getByLabelText('My spinner');

      expect(spinner).not.toHaveAttribute('role');
    });
  });

  describe('Rendering', () => {
    it('should render', () => {
      const spinner = getSpinner(render(<Spinner color="success" />));

      expect(spinner).toBeInTheDocument();
    });

    it('should render when `light={true}`', () => {
      const spinner = getSpinner(render(<Spinner color="failure" light />));

      expect(spinner).toBeInTheDocument();
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        spinner: {
          base: 'text-gray-100',
        },
      };

      const spinner = getSpinner(
        render(
          <Flowbite theme={{ theme }}>
            <Spinner />
          </Flowbite>,
        ),
      );

      expect(spinner.firstElementChild).toHaveClass('text-gray-100');
    });

    it('should use `color` classes', () => {
      const theme = {
        spinner: {
          color: {
            primary: 'text-gray-200',
          },
        },
      };

      const spinner = getSpinner(
        render(
          <Flowbite theme={{ theme }}>
            <Spinner color="primary" />
          </Flowbite>,
        ),
      );

      expect(spinner.firstElementChild).toHaveClass('text-gray-200');
    });

    it('should use `light` classes', () => {
      const theme = {
        spinner: {
          light: {
            on: {
              color: {
                success: 'text-gray-300',
              },
            },
          },
        },
      };

      const spinner = getSpinner(
        render(
          <Flowbite theme={{ theme }}>
            <Spinner color="success" light />
          </Flowbite>,
        ),
      );

      expect(spinner.firstElementChild).toHaveClass('text-gray-300');
    });
  });
});

const getSpinner = ({ getByRole }: Pick<RenderResult, 'getByRole'>): HTMLElement => getByRole('status');
