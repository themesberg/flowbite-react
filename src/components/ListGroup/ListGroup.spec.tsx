import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { HiCloudDownload } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import type { DeepPartial } from '..';
import type { FlowbiteTheme } from '../Flowbite';
import { Flowbite } from '../Flowbite';
import { ListGroup } from './ListGroup';

describe('Components / List group', () => {
  describe('Keyboard interactions', () => {
    it('should trigger `onClick` when `Enter` is pressed on a `ListGroup.Item`', async () => {
      const user = userEvent.setup();
      render(<TestListGroup />);

      await user.tab();
      await user.keyboard('[Enter]');

      const firstItem = items()[0];

      expect(firstItem).toHaveAccessibleName('Clicked');
    });

    it('should trigger `onClick` when `Space` is pressed on a `ListGroup.Item`', async () => {
      const user = userEvent.setup();
      render(<TestListGroup />);

      await user.tab();
      await user.keyboard('[Space]');

      const firstItem = items()[0];

      expect(firstItem).toHaveAccessibleName('Clicked');
    });
  });

  it('should be possible to `Tab` out', async () => {
    const user = userEvent.setup();
    render(
      <>
        <TestListGroup />
        <button aria-label="Outside">Outside</button>
      </>,
    );
    const outsideButton = screen.getByLabelText('Outside');

    await user.tab();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of items()) {
      await user.tab();
    }

    expect(outsideButton).toHaveFocus();
  });

  describe('Theme', () => {
    it('should use custom classes', () => {
      const theme = {
        listGroup: {
          root: {
            base: 'text-gray-100',
          },
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <TestListGroup />
        </Flowbite>,
      ),
        expect(listGroup()).toHaveClass('text-gray-100');
    });

    it('should use custom classes on `ListGroup.Item`', () => {
      const theme: DeepPartial<FlowbiteTheme> = {
        listGroup: {
          item: {
            base: 'text-gray-100',
            link: {
              active: {
                off: 'text-gray-400',
                on: 'text-gray-200',
              },
              href: {
                off: 'font-bold',
                on: 'font-normal',
              },
              icon: 'text-gray-300',
            },
          },
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <TestListGroup />
        </Flowbite>,
      );

      icons().forEach((icon) => expect(icon).toHaveClass('text-gray-300'));
      items().forEach((item) => expect(item.parentNode).toHaveClass('text-gray-100'));

      const activeItem = items()[0];
      const itemWithHref = items()[1];

      [...items().filter((item) => item !== activeItem)].forEach((item) => expect(item).toHaveClass('text-gray-400'));
      [...items().filter((item) => item !== itemWithHref)].forEach((item) => expect(item).toHaveClass('font-bold'));

      expect(activeItem).toHaveClass('text-gray-200');
      expect(itemWithHref).toHaveClass('font-normal');
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

const listGroup = () => screen.getByRole('list');

const icons = () => screen.getAllByTestId('flowbite-list-group-item-icon');

const items = () => screen.getAllByRole('listitem').map((li) => li.firstElementChild) as HTMLElement[];
