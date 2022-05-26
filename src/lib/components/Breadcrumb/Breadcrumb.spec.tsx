import { render } from '@testing-library/react';
import { HiHome } from 'react-icons/hi';
import { Breadcrumb } from '.';
import { Flowbite } from '../Flowbite';

describe('Breadcrumb', () => {
  describe('A11y', () => {
    it('should respect aria-label', () => {
      const { getByRole } = render(<BreadcrumbTest />);

      const breadcrumb = getByRole('navigation');

      expect(breadcrumb).toHaveAccessibleName('test label');
    });

    it("shouldn't include icon in accessible name", () => {
      const { getAllByRole } = render(<BreadcrumbTest />);

      const items = getAllByRole('link');

      expect(items[0]).toHaveAccessibleName('Home');
    });
  });

  describe('Theme', () => {
    it('should use custom list classes', () => {
      const theme = {
        breadcrumb: {
          list: 'gap-6',
        },
      };

      const { getByRole } = render(
        <Flowbite theme={{ theme }}>
          <BreadcrumbTest />
        </Flowbite>,
      );

      expect(getByRole('list')).toHaveClass('gap-6');
    });

    it('should use custom item classes', () => {
      const theme = {
        breadcrumb: {
          item: {
            base: 'justify-center',
            chevron: 'h-9 w-9',
            href: {
              off: 'text-md',
              on: 'text-lg',
            },
            icon: 'h-6 w-6',
          },
        },
      };

      const { getAllByRole, getAllByTestId } = render(
        <Flowbite theme={{ theme }}>
          <BreadcrumbTest />
        </Flowbite>,
      );

      const wrappers = getAllByRole('listitem');
      const items = getAllByTestId('flowbite-breadcrumb-item');

      const linkWrapper = wrappers[0];
      const linkItem = items[0];

      expect(linkWrapper).toHaveClass('justify-center');
      expect(linkItem).toHaveAttribute('href');
      expect(linkItem).toHaveClass('text-lg');

      const noLinkWrapper = wrappers[2];
      const noLinkItem = items[2];

      expect(noLinkItem).not.toHaveAttribute('href');
      expect(noLinkWrapper).toHaveClass('justify-center');
      expect(noLinkItem).toHaveClass('text-md');
    });
  });
});

const BreadcrumbTest = (): JSX.Element => (
  <Breadcrumb aria-label="test label">
    <Breadcrumb.Item href="#" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item icon={HiHome}>Flowbite React</Breadcrumb.Item>
  </Breadcrumb>
);
