import { render, RenderResult } from '@testing-library/react';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';

import { Accordion, AccordionProps } from '.';
import { Flowbite } from '../Flowbite';

describe('Components / Accordion', () => {
  describe('Props', () => {
    it('should ignore `className`', () => {
      const dom = render(<TestAccordion className="no-classname" />);
      const accordion = getAccordion(dom);
      const content = getAccordionContent(dom)[0];
      const title = getAccordionTitles(dom)[0];

      expect(accordion).not.toHaveClass('no-classname');
      expect(content).not.toHaveClass('no-classname');
      expect(title).not.toHaveClass('no-classname');
    });

    describe('`Accordion.Title`', () => {
      it('should allow any heading level with `as=""`', () => {
        const headings = getAccordionHeadings(render(<TestAccordion />));
        const h3Heading = headings[0];
        const defaultHeading = headings[1];

        expect(h3Heading.tagName.toLocaleLowerCase()).toEqual('h3');
        expect(defaultHeading.tagName.toLocaleLowerCase()).toEqual('h2');
      });
    });
  });

  describe('Rendering', () => {
    it('should render without crashing', () => {
      const accordion = getAccordion(render(<TestAccordion />));

      expect(accordion).toBeInTheDocument();
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
                open: 'text-purple-600',
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
              <TestAccordion />
              <TestAccordion flush />
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

  describe('A11y', () => {
    it('should allow `aria-label`', () => {
      const accordion = getAccordion(render(<TestAccordion aria-label="My accordion" />));

      expect(accordion).toHaveAccessibleName('My accordion');
    });

    describe('`Accordion.Content`', () => {
      it('should allow `aria-labelledby=""`', () => {
        const dom = render(<TestAccordion />);
        const title = getAccordionTitles(dom)[0];
        const content = getAccordionContent(dom)[0];

        expect(title).toHaveAttribute('id', 'accordion-title');
        expect(content).toHaveAttribute('aria-labelledby', 'accordion-title');
        expect(content).toHaveAccessibleName('Title');
      });
    });

    describe('`Accordion.Title`', () => {
      it('should contain `role="button"`', () => {
        const titles = getAccordionTitles(render(<TestAccordion />));

        titles.forEach((title) => expect(title).toHaveAccessibleName('Title'));
      });

      it('should allow `id=""`', () => {
        const accordion = getAccordion(render(<TestAccordion aria-label="My accordion" />));

        expect(accordion).toHaveAccessibleName('My accordion');
      });
    });
  });
});

const TestAccordion = ({ ...props }: AccordionProps): JSX.Element => (
  <Accordion {...props}>
    <Accordion.Panel open>
      <Accordion.Title arrowIcon={HiOutlineArrowCircleDown} as="h3" className="no-classname" id="accordion-title">
        Title
      </Accordion.Title>
      <Accordion.Content className="no-classname" aria-labelledby="accordion-title">
        <p>Content</p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title arrowIcon={HiOutlineArrowCircleDown}>Title</Accordion.Title>
      <Accordion.Content>
        <p>Content</p>
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
);

const getAccordion = ({ getByTestId }: RenderResult): HTMLElement => getByTestId('flowbite-accordion');

const getAccordions = ({ getAllByTestId }: RenderResult): HTMLElement[] => getAllByTestId('flowbite-accordion');

const getAccordionContent = ({ getAllByTestId }: RenderResult): HTMLElement[] =>
  getAllByTestId('flowbite-accordion-content');

const getAccordionHeadings = ({ getAllByTestId }: RenderResult): HTMLElement[] =>
  getAllByTestId('flowbite-accordion-heading');

const getAccordionTitles = ({ getAllByRole }: RenderResult): HTMLElement[] => getAllByRole('button');
