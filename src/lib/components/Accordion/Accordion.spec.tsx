import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { FC } from 'react';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { Flowbite } from '../Flowbite';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';

describe('Components / Accordion', () => {
  describe('A11y', () => {
    it('should use `aria-label` if provided', () => {
      render(<TestAccordion aria-label="My accordion" />);

      expect(accordion()).toHaveAccessibleName('My accordion');
    });

    it('should use `aria-labelledby=""` in `Accordion.Content` if provided', () => {
      render(<TestAccordion />);

      expect(content()[0]).toHaveAccessibleName('Title');
      expect(content()[0]).toHaveAttribute('aria-labelledby', 'accordion-title');
    });

    it('should use `role="button"` in `Accordion.Title`', () => {
      render(<TestAccordion />);

      titles().forEach((title) => {
        expect(title).toBeInTheDocument();
      });
    });

    it('should use `id=""` if provided in `Accordion.Title`', () => {
      render(<TestAccordion aria-label="My accordion" />);

      expect(accordion()).toHaveAccessibleName('My accordion');
    });

    it("shouldn't include `arrowIcon` in `Accordion.Title` label", () => {
      render(<TestAccordion />);

      titles().forEach((title) => expect(title).toHaveAccessibleName('Title'));
    });
  });

  describe('Keyboard interactions', () => {
    it('should open focused panel, and close others when `Space` is pressed on an `Accordion.Panel`', async () => {
      const user = userEvent.setup();
      render(<TestAccordion />);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const _ of titles()) {
        await user.tab();
      }
      await user.keyboard('[Space]');

      expect(content()[0]).not.toBeVisible();
      expect(content()[1]).toBeVisible();
    });

    it('should open focused panel without closing others on an `Accordion.Panel` with `alwaysOpen={true}`', async () => {
      const user = userEvent.setup();
      render(<TestAccordion alwaysOpen />);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const _ of titles()) {
        await user.tab();
      }

      await user.keyboard('[Space]');

      expect(titles()[0]).toBeVisible();
      expect(titles()[1]).toBeVisible();
    });

    it('should be possible to `Tab` out', async () => {
      const user = userEvent.setup();
      render(
        <>
          <TestAccordion />
          <button role="checkbox">Outside button</button>
        </>,
      );

      const outsideButton = screen.getByText('Outside button');

      await waitFor(async () => {
        await user.tab();

        expect(outsideButton).toHaveFocus();
      });
    });

    it('should give each `Accordion.Title` focus in order while pressing `Tab`', async () => {
      const user = userEvent.setup();
      render(<TestAccordion />);

      for (const title of titles()) {
        await user.tab();

        expect(title).toHaveFocus();
      }
    });
  });

  describe('Props', () => {
    it('should use any HTML heading element in `Accordion.Title as=".."`', () => {
      render(<TestAccordion />);

      expect(headings()[0].tagName.toLocaleLowerCase()).toEqual('h3');
      expect(headings()[1].tagName.toLocaleLowerCase()).toEqual('h2');
    });
  });

  describe('Theme', () => {
    describe('`Accordion`', () => {
      it('should use custom `base` classes', () => {
        const theme = {
          accordion: {
            root: {
              base: 'text-4xl',
            },
          },
        };

        render(
          <Flowbite theme={{ theme }}>
            <TestAccordion />
          </Flowbite>,
        );

        expect(accordion()).toHaveClass('text-4xl');
      });

      it('should use custom `flush` classes', () => {
        const theme = {
          accordion: {
            root: {
              flush: {
                off: 'text-4xl',
                on: 'text-3xl',
              },
            },
          },
        };

        render(
          <Flowbite theme={{ theme }}>
            <TestAccordion />
            <TestAccordion flush />
          </Flowbite>,
        );

        const accordions = screen.getAllByTestId('flowbite-accordion');
        const normal = accordions[0];
        const flush = accordions[1];

        expect(normal).toHaveClass('text-4xl');
        expect(flush).toHaveClass('text-3xl');
      });
    });

    describe('`Accordion.Content`', () => {
      it('should use custom `content` classes', () => {
        const theme = {
          accordion: {
            content: {
              base: 'text-4xl',
            },
          },
        };

        render(
          <Flowbite theme={{ theme }}>
            <TestAccordion />
          </Flowbite>,
        );

        content().forEach((content) => {
          expect(content).toHaveClass('text-4xl');
        });
      });
    });

    describe('`Accordion.Title`', () => {
      it('should use custom `title` classes', () => {
        const theme = {
          accordion: {
            title: {
              arrow: {
                base: 'w-8 h-8',
                open: {
                  off: '',
                  on: 'text-purple-600',
                },
              },
              base: 'p-3',
              flush: {
                off: 'text-4xl',
                on: 'text-3xl',
              },
              open: {
                off: 'text-gray-400',
                on: 'text-gray-600',
              },
            },
          },
        };

        render(
          <Flowbite theme={{ theme }}>
            <TestAccordion alwaysOpen />
            <TestAccordion alwaysOpen flush />
          </Flowbite>,
        );

        const normalTitles = [titles()[0], titles()[1]];
        const flushTitles = [titles()[2], titles()[3]];
        const openTitles = [titles()[0], titles()[2]];
        const closedTitles = [titles()[1], titles()[3]];

        titles().forEach((title) => {
          expect(title).toHaveClass('p-3');
        });
        normalTitles.forEach((title) => {
          expect(title).toHaveClass('text-4xl');
        });
        flushTitles.forEach((title) => {
          expect(title).toHaveClass('text-3xl');
        });
        openTitles.forEach((title) => {
          expect(title).toHaveClass('text-gray-600');
        });
        closedTitles.forEach((title) => {
          expect(title).toHaveClass('text-gray-400');
        });
      });
    });
  });
});

const TestAccordion: FC<Omit<AccordionProps, 'children'>> = (props) => (
  <Accordion arrowIcon={HiOutlineArrowCircleDown} {...props}>
    <Accordion.Panel>
      <Accordion.Title as="h3" className="text-blue-300" id="accordion-title">
        Title
      </Accordion.Title>
      <Accordion.Content aria-labelledby="accordion-title" className="text-blue-300">
        <p>Content</p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Title</Accordion.Title>
      <Accordion.Content>
        <p>Content</p>
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
);

const accordion = () => screen.getByTestId('flowbite-accordion');

const content = () => screen.getAllByTestId('flowbite-accordion-content');

const headings = () => screen.getAllByTestId('flowbite-accordion-heading');

const titles = () => screen.getAllByRole('button');
