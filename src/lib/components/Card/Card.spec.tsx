import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from '.';
import { Flowbite } from '../Flowbite';

describe.concurrent('Components / Card', () => {
  describe('A11y', () => {
    it('should allow `aria-label`', () => {
      const card = getCard(render(<Card aria-label="My card" />));

      expect(card).toHaveAccessibleName('My card');
    });

    describe('`imgSrc="..."` and `imgAlt="..."`', () => {
      it('should provide `<img />` with alternative text', () => {
        const { getByAltText } = render(
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          />,
        );
        const img = getByAltText('Meaningful alt text for an image that is not purely decorative');

        expect(img).toBeInTheDocument();
      });
    });
  });

  describe('Rendering', () => {
    it('should render', () => {
      const card = getCard(render(<Card />));

      expect(card).toBeInTheDocument();
    });

    describe('`href=".."`', () => {
      it('should render an `<a>`', () => {
        const card = getCard(render(<Card href="#" />));

        expect(card).toBeInTheDocument();
        expect(card.tagName.toLocaleLowerCase()).toEqual('a');
      });
    });

    describe('`horizontal={true}`', () => {
      it('should render', () => {
        const card = getCard(render(<Card horizontal />));

        expect(card).toBeInTheDocument();
      });
    });

    describe('`imgSrc="..."`', () => {
      it('should render', () => {
        const card = getCard(render(<Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg" />));

        expect(card).toBeInTheDocument();
      });
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        card: {
          base: 'text-blue-100',
        },
      };

      const card = getCard(
        render(
          <Flowbite theme={{ theme }}>
            <Card />
          </Flowbite>,
        ),
      );

      expect(card).toHaveClass('text-blue-100');
    });

    it('should use `children` classes', () => {
      const theme = {
        card: {
          children: 'text-blue-900',
        },
      };

      const { getByLabelText } = render(
        <Flowbite theme={{ theme }}>
          <Card>
            <span aria-label="The content">Some content</span>
          </Card>
        </Flowbite>,
      );

      const children = getByLabelText('The content');

      expect(children.parentElement).toHaveClass('text-blue-900');
    });

    it('should use `horizontal` classes', () => {
      const theme = {
        card: {
          horizontal: {
            off: 'text-blue-200',
            on: 'text-blue-300',
          },
        },
      };

      const cards = getCards(
        render(
          <Flowbite theme={{ theme }}>
            <Card />
            <Card horizontal />
          </Flowbite>,
        ),
      );

      const normalCard = cards[0];
      const horizontalCard = cards[1];

      expect(normalCard).toHaveClass('text-blue-200');
      expect(horizontalCard).toHaveClass('text-blue-300');
    });

    it('should use `href` classes', () => {
      const theme = {
        card: {
          href: 'text-blue-700',
        },
      };

      const card = getCard(
        render(
          <Flowbite theme={{ theme }}>
            <Card href="#">My card</Card>
          </Flowbite>,
        ),
      );

      expect(card).toHaveClass('text-blue-700');
    });

    it('should use `img` classes', () => {
      const theme = {
        card: {
          img: {
            base: 'text-blue-400',
            horizontal: {
              off: 'bg-blue-500',
              on: 'bg-blue-600',
            },
          },
        },
      };

      const { getByAltText } = render(
        <Flowbite theme={{ theme }}>
          <Card imgAlt="Card with image" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg" />
          <Card
            horizontal
            imgAlt="Horizontal card with image"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          />
        </Flowbite>,
      );

      const cardWithImage = getByAltText('Card with image');
      const horizontalCardWithImage = getByAltText('Horizontal card with image');

      expect(cardWithImage).toHaveClass('text-blue-400 bg-blue-500');
      expect(horizontalCardWithImage).toHaveClass('bg-blue-600');
    });
  });
});

const getCard = ({ getByTestId }: Pick<RenderResult, 'getByTestId'>): HTMLElement => getByTestId('flowbite-card');

const getCards = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-card');
