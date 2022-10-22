import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Progress } from './Progress';

describe.concurrent('Components / Progress', () => {
  describe.concurrent('A11y', () => {
    it('should have `role="progressbar"`', () => {
      render(<Progress label="Accessible name" progress={45} />);

      expect(progressBar()).toBeInTheDocument();
    });

    it('should use `label` as accessible name', () => {
      render(<Progress label="Accessible name" labelPosition="outside" labelProgress progress={45} />);

      expect(progressBar()).toHaveAccessibleName('Accessible name');
    });

    it('should report current progress to screen readers', () => {
      render(<Progress progress={45} />);

      expect(progressBar()).toHaveAttribute('aria-valuenow', '45');
    });
  });
});

const progressBar = () => screen.getByRole('progressbar');
