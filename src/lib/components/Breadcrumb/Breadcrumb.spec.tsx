import { render } from '@testing-library/react';
import { HiHome } from 'react-icons/hi';
import Breadcrumb from '.';

describe('Breadcrumb', () => {
  describe('its first item', () => {
    it("shouldn't have a chevron", () => {
      const { getAllByTestId } = render(<BreadcrumbTest />);

      const firstSeparator = getAllByTestId('breadcrumb-separator')[0];
      expect(firstSeparator.nextElementSibling).not.toHaveTextContent('Home');
      expect(firstSeparator.nextElementSibling).toHaveTextContent('Projects');
    });
  });

  describe('its last item', () => {
    it("shouldn't be an anchor", () => {
      const { getAllByTestId } = render(<BreadcrumbTest />);

      const items = getAllByTestId('breadcrumb-item');
      const lastItem = items[items.length - 1];
      expect(lastItem).not.toBeInstanceOf(HTMLAnchorElement);
    });
  });
});

const BreadcrumbTest = (): JSX.Element => (
  <Breadcrumb>
    <Breadcrumb.Item href="#" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item icon={HiHome}>Flowbite React</Breadcrumb.Item>
  </Breadcrumb>
);
