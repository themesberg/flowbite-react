import type { RenderResult } from '@testing-library/react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import type { AccordionProps } from '.';
import { Accordion } from '.';
import { Flowbite } from '../Flowbite';

describe.concurrent('Components / Accordion', () => {
  describe('A11y', () => {
    it('should use `aria-label` if provided', () => {
      const accordion = getAccordion(render(<TestAccordion aria-label="My accordion" />));

      expect(accordion).toHaveAccessibleName('My accordion');
    });

    describe('`Accordion.Content`', () => {
      it('should use `aria-labelledby=""` if provided', () => {
        const { getAllByRole, getAllByTestId } = render(<TestAccordion />);
        const title = getAccordionTitles({ getAllByRole })[0];
        const content = getAccordionContent({ getAllByTestId })[0];

        expect(title).toHaveAttribute('id', 'accordion-title');
        expect(content).toHaveAttribute('aria-labelledby', 'accordion-title');
        expect(content).toHaveAccessibleName('Title');
      });
    });

    describe('`Accordion.Title`', () => {
      it('should contain `role="button"`', () => {
        const titles = getAccordionTitles(render(<TestAccordion />));

        titles.forEach((title) => expect(title).toBeInTheDocument());
      });

      it('should use `id=""` if provided', () => {
        const accordion = getAccordion(render(<TestAccordion aria-label="My accordion" />));

        expect(accordion).toHaveAccessibleName('My accordion');
      });

      it("shouldn't include `arrowIcon` in label", () => {
        const titles = getAccordionTitles(render(<TestAccordion />));

        titles.forEach((title) => expect(title).toHaveAccessibleName('Title'));
      });
    });
  });

  describe('Keyboard interactions', () => {
    describe('`Space`', () => {
      describe('`Accordion.Panel`', () => {
        it('should open focused panel, and close others', () => {
          const { getAllByRole, getAllByTestId } = render(<TestAccordion />);
          const panels = getAccordionContent({ getAllByTestId });
          const titles = getAccordionTitles({ getAllByRole });

          titles.forEach(() => userEvent.tab());
          userEvent.keyboard('[Space]');

          expect(panels[0]).not.toBeVisible();
          expect(panels[1]).toBeVisible();
        });

        describe('`alwaysOpen={true}`', () => {
          it('should open focused panel', () => {
            const titles = getAccordionTitles(render(<TestAccordion alwaysOpen />));

            titles.forEach(() => userEvent.tab());
            userEvent.keyboard('[Space]');

            expect(titles[0]).toBeVisible();
            expect(titles[1]).toBeVisible();
          });
        });
      });
    });

    describe('`Tab`', () => {
      it('should be possible to `Tab` out', async () => {
        const { getByText } = render(
          <>
            <TestAccordion />
            <button role="checkbox">Outside button</button>
          </>,
        );
        const outsideButton = getByText('Outside button');

        await waitFor(() => {
          userEvent.tab();
          expect(outsideButton).toHaveFocus();
        });
      });

      describe('`Accordion.Title`', () => {
        it('should each receive focus in order', () => {
          const titles = getAccordionTitles(render(<TestAccordion />));

          titles.forEach((title) => {
            userEvent.tab();
            expect(title).toHaveFocus();
          });
        });
      });
    });
  });

  describe('Props', () => {
    it('should ignore `className`', () => {
      const { getAllByTestId, getAllByRole, getByTestId } = render(<TestAccordion className="text-blue-300" />);
      const accordion = getAccordion({ getByTestId });
      const content = getAccordionContent({ getAllByTestId })[0];
      const title = getAccordionTitles({ getAllByRole })[0];

      expect(accordion).not.toHaveClass('text-blue-300');
      expect(content).not.toHaveClass('text-blue-300');
      expect(title).not.toHaveClass('text-blue-300');
    });

    describe('`Accordion.Title`', () => {
      describe('`as=""`', () => {
        it('should use any HTML heading element', () => {
          const headings = getAccordionHeadings(render(<TestAccordion />));
          const h3Heading = headings[0];
          const defaultHeading = headings[1];

          expect(h3Heading.tagName.toLocaleLowerCase()).toEqual('h3');
          expect(defaultHeading.tagName.toLocaleLowerCase()).toEqual('h2');
        });
      });

      it('should use `arrowIcon` if provided to `Accordion`', () => {
        const { getAllByTestId } = render(<TestAccordion />);
        const arrows = getAllByTestId('flowbite-accordion-arrow');

        arrows.forEach((arrow) => expect(arrow).toBeInTheDocument());
      });
    });
  });

  describe('Rendering', () => {
    it('should render', () => {
      const accordion = getAccordion(render(<TestAccordion />));

      expect(accordion).toBeInTheDocument();
    });

    describe('`alwaysOpen={true}`', () => {
      it('should render', () => {
        const accordion = getAccordion(render(<TestAccordion alwaysOpen />));

        expect(accordion).toBeInTheDocument();
      });
    });

    describe('`arrowIcon={..}`', () => {
      it('should render', () => {
        const accordion = getAccordion(render(<TestAccordion arrowIcon={HiOutlineArrowCircleDown} />));

        expect(accordion).toBeInTheDocument();
      });
    });

    describe('`flush={true}`', () => {
      it('should render', () => {
        const accordion = getAccordion(render(<TestAccordion flush />));

        expect(accordion).toBeInTheDocument();
      });
    });
  });

  describe('Theme', () => {
    describe('`Accordion`', () => {
      it('should use custom `base` classes', () => {
        const theme = {
          accordion: {
            base: 'text-4xl',
          },
        };

        const accordion = getAccordion(
          render(
            <Flowbite theme={{ theme }}>
              <TestAccordion />
            </Flowbite>,
          ),
        );

        expect(accordion).toHaveClass('text-4xl');
      });

      it('should use custom `flush` classes', () => {
        const theme = {
          accordion: {
            flush: {
              off: 'text-4xl',
              on: 'text-3xl',
            },
          },
        };

        const accordions = getAccordions(
          render(
            <Flowbite theme={{ theme }}>
              <TestAccordion />
              <TestAccordion flush />
            </Flowbite>,
          ),
        );
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

        const accordionContent = getAccordionContent(
          render(
            <Flowbite theme={{ theme }}>
              <TestAccordion />
            </Flowbite>,
          ),
        );

        accordionContent.forEach((item) => expect(item).toHaveClass('text-4xl'));
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

        const titles = getAccordionTitles(
          render(
            <Flowbite theme={{ theme }}>
              <TestAccordion alwaysOpen />
              <TestAccordion alwaysOpen flush />
            </Flowbite>,
          ),
        );
        const normalTitles = [titles[0], titles[1]];
        const flushTitles = [titles[2], titles[3]];
        const openTitles = [titles[0], titles[2]];
        const closedTitles = [titles[1], titles[3]];

        titles.forEach((title) => expect(title).toHaveClass('p-3'));
        normalTitles.forEach((title) => expect(title).toHaveClass('text-4xl'));
        flushTitles.forEach((title) => expect(title).toHaveClass('text-3xl'));
        openTitles.forEach((title) => expect(title).toHaveClass('text-gray-600'));
        closedTitles.forEach((title) => expect(title).toHaveClass('text-gray-400'));
      });
    });
  });
});

const TestAccordion = (props: Omit<AccordionProps, 'children'>): JSX.Element => (
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

const getAccordion = ({ getByTestId }: Pick<RenderResult, 'getByTestId'>): HTMLElement =>
  getByTestId('flowbite-accordion');

const getAccordions = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-accordion');

const getAccordionContent = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-accordion-content');

const getAccordionHeadings = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-accordion-heading');

const getAccordionTitles = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] =>
  getAllByRole('button');
