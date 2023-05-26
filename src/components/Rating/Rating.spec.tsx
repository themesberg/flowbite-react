import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Rating } from './Rating';

describe.concurrent('Components / Rating', () => {
  describe.concurrent('Rendering', () => {
    it('should fill each bar by the specified percentaged when using `Rating.Advanced`', () => {
      render(<AdvancedRating />);

      expect(bars()[0]).toHaveStyle('width: 70%');
      expect(bars()[1]).toHaveStyle('width: 17%');
      expect(bars()[2]).toHaveStyle('width: 8%');
      expect(bars()[3]).toHaveStyle('width: 4%');
      expect(bars()[4]).toHaveStyle('width: 1%');
    });

    it('should visually distinguish unfilled stars in gray', () => {
      render(<AdvancedRating />);

      expect(stars()[4]).toHaveClass('text-gray-300');
    });
  });
});

const AdvancedRating = (): JSX.Element => (
  <div className="flex flex-col gap-4">
    <Rating className="pt-3">
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
    </Rating>
    <p className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
    <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
    <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
    <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
    <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
    <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
  </div>
);

const bars = () => screen.getAllByTestId('flowbite-rating-fill');

const stars = () => screen.getAllByTestId('flowbite-rating-star');
