import { cleanup, render } from '@testing-library/react';

import { Accordion } from '.';
import userEvent from '@testing-library/user-event';

describe('Accordion Component', () => {
  afterEach(cleanup);

  it('should be able to render an accordion', () => {
    const { getByTestId } = render(
      <Accordion>
        <Accordion.Panel open>
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
              buttons, dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{' '}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                get started
              </a>{' '}
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>,
    );
    expect(getByTestId('accordion-element')).toBeTruthy();
  });

  it('should be able to render a closed accordion', () => {
    const { getByTestId } = render(
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
              buttons, dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{' '}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                get started
              </a>{' '}
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>,
    );
    expect(getByTestId('accordion-element').children.length).toEqual(1);
  });

  it("should be able to open and close an accordion panel when clicking on it's title", () => {
    const { getByTestId } = render(
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
              buttons, dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{' '}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                get started
              </a>{' '}
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>,
    );

    expect(getByTestId('accordion-element').children.length).toEqual(1);

    // Open first panel
    userEvent.click(getByTestId('accordion-title-element'));
    expect(getByTestId('accordion-element').children.length).toEqual(2);

    // Close it again
    userEvent.click(getByTestId('accordion-title-element'));
    expect(getByTestId('accordion-element').children.length).toEqual(1);
  });
});
