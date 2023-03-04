import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Flowbite } from '../Flowbite';
import { Card } from './Card';

describe('Components / Card', () => {
  describe('A11y', () => {
    it('should allow `aria-label`', () => {
      render(<Card aria-label="My card" />);

      expect(card()).toHaveAccessibleName('My card');
    });

    it('should provide `<img />` with alternative text given `imgSrc="..."` and `imgAlt="..."`', () => {
      render(
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
        />,
      );
      const img = screen.getByAltText('Meaningful alt text for an image that is not purely decorative');

      expect(img).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('should render an `<a>` given `href=".."`', () => {
      render(<Card href="#" />);

      expect(screen.getByRole('link')).toEqual(card());
    });

    it('should render an `<img>` given `imgSrc=".."`', () => {
      render(<Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg" />);
      const img = screen.getByRole('img');

      expect(card()).toContainElement(img);
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        card: {
          root: {
            base: 'text-blue-100',
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Card />
        </Flowbite>,
      );

      expect(card()).toHaveClass('text-blue-100');
    });

    it('should use `children` classes', () => {
      const theme = {
        card: {
          root: {
            children: 'text-blue-900',
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Card>
            <span aria-label="The content">Some content</span>
          </Card>
        </Flowbite>,
      );
      const children = screen.getByLabelText('The content');

      expect(children.parentElement).toHaveClass('text-blue-900');
    });

    it('should use `horizontal` classes', () => {
      const theme = {
        card: {
          root: {
            horizontal: {
              off: 'text-blue-200',
              on: 'text-blue-300',
            },
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Card />
          <Card horizontal />
        </Flowbite>,
      );
      const normalCard = cards()[0];
      const horizontalCard = cards()[1];

      expect(normalCard).toHaveClass('text-blue-200');
      expect(horizontalCard).toHaveClass('text-blue-300');
    });

    it('should use `href` classes', () => {
      const theme = {
        card: {
          root: {
            href: 'text-blue-700',
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Card href="#">My card</Card>
        </Flowbite>,
      );

      expect(card()).toHaveClass('text-blue-700');
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
      render(
        <Flowbite theme={{ theme }}>
          <Card imgAlt="Card with image" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg" />
          <Card
            horizontal
            imgAlt="Horizontal card with image"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          />
        </Flowbite>,
      );
      const cardWithImage = screen.getByAltText('Card with image');
      const horizontalCardWithImage = screen.getByAltText('Horizontal card with image');

      expect(cardWithImage).toHaveClass('text-blue-400 bg-blue-500');
      expect(horizontalCardWithImage).toHaveClass('bg-blue-600');
    });
  });
});

const card = () => screen.getByTestId('flowbite-card');

const cards = () => screen.getAllByTestId('flowbite-card');
