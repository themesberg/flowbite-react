import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Progress } from './Progress';

describe.concurrent('Components / Progress', () => {
  describe.concurrent('A11y', () => {
    it('should have `role="progressbar"`', () => {
      render(<Progress textLabel="Accessible name" progress={45} />);

      expect(progressBar()).toBeInTheDocument();
    });

    it('should use `textLabel` as accessible name', () => {
      render(<Progress textLabel="Accessible name" textLabelPosition="outside" labelProgress progress={45} />);

      expect(progressBar()).toHaveAccessibleName('Accessible name');
    });

    it('should report current progress to screen readers', () => {
      render(<Progress progress={45} />);

      expect(progressBar()).toHaveAttribute('aria-valuenow', '45');
    });

    it('should only display labels if specified', () => {
      render(<Progress progress={45} labelProgress={false} textLabel="Flowbite" labelText={true} />);

      expect(progressBar()).not.toHaveTextContent('45');
      expect(progressBar()).toHaveTextContent('Flowbite');
    });
  });
});

const progressBar = () => screen.getByRole('progressbar');
