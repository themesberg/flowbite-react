import { cleanup, render } from '@testing-library/react';
import { Card } from '.';

describe('Card Component should be able to render a', () => {
  afterEach(cleanup);

  it('card', () => {
    const { getByTestId } = render(<Card />);
    expect(getByTestId('card-element')).toBeTruthy();
  });

  it('horizontal card', () => {
    const { getByTestId } = render(<Card horizontal={true} />);
    expect(getByTestId('card-element').className).toContain('flex-col md:max-w-xl md:flex-row');
  });

  describe('card with', () => {
    afterEach(cleanup);

    it('decorative image', () => {
      const { getByTestId } = render(<Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg" />);
      expect((getByTestId('card-element').children[0] as HTMLImageElement).src).toEqual(
        'https://flowbite.com/docs/images/blog/image-1.jpg',
      );
    });

    it('alt text', () => {
      const { getByTestId } = render(
        <Card
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        />,
      );
      expect((getByTestId('card-element').children[0] as HTMLImageElement).alt).toEqual(
        'Meaningful alt text for an image that is not purely decorative',
      );
    });
  });
});
