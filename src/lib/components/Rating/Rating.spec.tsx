import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Rating } from '.';

describe.concurrent('Rating', () => {
  describe('with a star that is not filled', () => {
    it('should visually distinguish the star in gray', () => {
      const { getAllByTestId } = render(<AdvancedRating />);

      const stars = getAllByTestId('rating-star');
      expect(stars[4].getAttribute('class')).toContain('text-gray');
    });
  });

  describe('that is advanced', () => {
    it('should fill a bar by the specified percentaged', () => {
      const { getAllByTestId } = render(<AdvancedRating />);

      const filledBars = getAllByTestId('rating-fill');
      expect(filledBars[0]).toHaveStyle('width: 70%');
      expect(filledBars[1]).toHaveStyle('width: 17%');
      expect(filledBars[2]).toHaveStyle('width: 8%');
      expect(filledBars[3]).toHaveStyle('width: 4%');
      expect(filledBars[4]).toHaveStyle('width: 1%');
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
