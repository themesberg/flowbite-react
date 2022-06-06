import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { HiCloudDownload } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';

import { ListGroup } from '.';

describe.concurrent('Components / List group', () => {
  describe('items', () => {
    describe('with a callback action (onClick)', () => {
      describe('and user clicks the item', () => {
        it('should run its callback', () => {
          const { getAllByTestId } = render(<ListGroupTest />);

          let item = getAllByTestId('list-group-item')[0];
          userEvent.click(item);

          item = getAllByTestId('list-group-item')[0];
          expect(item).toHaveTextContent('Clicked');
        });
      });
    });

    describe('without a link', () => {
      it('should render a button', () => {
        const { getAllByTestId } = render(<ListGroupTest />);

        const item = getAllByTestId('list-group-item')[0];
        expect(item).toBeInstanceOf(HTMLButtonElement);
      });
    });

    describe('with a link', () => {
      it('should render an anchor', () => {
        const { getAllByTestId } = render(<ListGroupTest />);

        const item = getAllByTestId('list-group-item')[1];
        expect(item).toBeInstanceOf(HTMLAnchorElement);
        expect(item).toHaveAttribute('href', '#');
      });
    });
  });
});

const ListGroupTest = (): JSX.Element => {
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
