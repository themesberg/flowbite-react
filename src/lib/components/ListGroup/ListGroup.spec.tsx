import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { HiCloudDownload } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { ListGroup } from '.';
import { Flowbite } from '../Flowbite';

describe.concurrent('Components / List group', () => {
  describe('Keyboard interactions', () => {
    describe('`ListGroup.Item`', () => {
      describe('`Enter`', () => {
        it('should trigger `onClick`', () => {
          const itemWithOnClick = getListGroupItems(render(<TestListGroup />))[0];

          userEvent.tab();
          userEvent.keyboard('[Enter]');

          expect(itemWithOnClick).toHaveAccessibleName('Clicked');
        });
      });

      describe('`Space`', () => {
        it('should trigger `onClick`', () => {
          const itemWithOnClick = getListGroupItems(render(<TestListGroup />))[0];

          userEvent.tab();
          userEvent.keyboard('[Space]');

          expect(itemWithOnClick).toHaveAccessibleName('Clicked');
        });
      });
    });

    describe('`Tab`', () => {
      it('should be possible to `Tab` out', () => {
        const { getAllByRole, getByLabelText } = render(
          <>
            <TestListGroup />
            <button aria-label="Outside">Outside</button>
          </>,
        );
        const items = getListGroupItems({ getAllByRole });
        const outsideButton = getByLabelText('Outside');

        userEvent.tab();
        items.forEach(() => userEvent.tab());

        expect(outsideButton).toHaveFocus();
      });
    });
  });

  describe('Rendering', () => {
    it('should render', () => {
      const listGroup = getListGroup(render(<TestListGroup />));

      expect(listGroup).toBeInTheDocument();
    });

    describe('`ListGroup.Item`', () => {
      it('should render', () => {
        const items = getListGroupItems(render(<TestListGroup />));

        items.forEach((item) => expect(item).toBeInTheDocument());
      });

      it('should render a button', () => {
        const buttons = getListGroupButtons(render(<TestListGroup />));

        buttons.forEach((button) => expect(button).toHaveAttribute('type', 'button'));
      });

      describe('`href=".."`', () => {
        it('should render an anchor', () => {
          const links = getListGroupLinks(render(<TestListGroup />));

          links.forEach((link) => expect(link).toHaveAttribute('href', '#'));
        });
      });
    });
  });

  describe('Theme', () => {
    it('should use custom classes', () => {
      const theme = {
        listGroup: {
          base: 'text-gray-100',
        },
      };

      const listGroup = getListGroup(
        render(
          <Flowbite theme={{ theme }}>
            <TestListGroup />
          </Flowbite>,
        ),
      );

      expect(listGroup).toHaveClass('text-gray-100');
    });

    describe('`ListGroup.Item`', () => {
      it('should use custom classes', () => {
        const theme = {
          listGroup: {
            item: {
              active: {
                off: 'text-gray-400',
                on: 'text-gray-200',
              },
              base: 'text-gray-100',
              href: {
                off: 'font-bold',
                on: 'font-normal',
              },
              icon: 'text-gray-300',
            },
          },
        };

        const { getAllByRole, getAllByTestId } = render(
          <Flowbite theme={{ theme }}>
            <TestListGroup />
          </Flowbite>,
        );
        const icons = getListGroupItemIcons({ getAllByTestId });
        const items = getListGroupItems({ getAllByRole });
        const activeItem = items[0];
        const itemWithHref = items[1];

        icons.forEach((icon) => expect(icon).toHaveClass('text-gray-300'));
        items.forEach((item) => expect(item).toHaveClass('text-gray-100'));

        [...items.filter((item) => item !== activeItem)].forEach((item) => expect(item).toHaveClass('text-gray-400'));
        [...items.filter((item) => item !== itemWithHref)].forEach((item) => expect(item).toHaveClass('font-bold'));

        expect(activeItem).toHaveClass('text-gray-200');
        expect(itemWithHref).toHaveClass('font-normal');
      });
    });
  });
});

const TestListGroup = (): JSX.Element => {
  const [isClicked, setClicked] = useState(false);

  return (
    <ListGroup>
      <ListGroup.Item active onClick={() => setClicked(!isClicked)}>
        {isClicked ? 'Clicked' : 'Waiting'}
      </ListGroup.Item>
      <ListGroup.Item href="#">Settings</ListGroup.Item>
      <ListGroup.Item>Messages</ListGroup.Item>
      <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
    </ListGroup>
  );
};

const getListGroup = ({ getByRole }: Pick<RenderResult, 'getByRole'>): HTMLElement => getByRole('list');

const getListGroupItemIcons = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-list-group-item-icon');

const getListGroupItems = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] =>
  getAllByRole('listitem').map((li) => li.firstElementChild) as HTMLElement[];

const getListGroupButtons = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] =>
  getAllByRole('listitem')
    .map((li) => li.firstElementChild)
    .filter((element) => element?.tagName.toLocaleLowerCase() === 'button') as HTMLButtonElement[];

const getListGroupLinks = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] =>
  getAllByRole('listitem')
    .map((li) => li.firstElementChild)
    .filter((element) => element?.tagName.toLocaleLowerCase() === 'a') as HTMLAnchorElement[];
