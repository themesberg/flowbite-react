import { render } from '@testing-library/react';
import { HiHome } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { Breadcrumb } from '.';
import { Flowbite } from '../Flowbite';

describe.concurrent('Components / Breadcrumb', () => {
  describe('Props', () => {
    it('should ignore `className` on `Breadcrumb.Item`s', () => {
      const { getByRole } = render(
        <Breadcrumb>
          <Breadcrumb.Item href="#" icon={HiHome} className="text-gray-100">
            Home
          </Breadcrumb.Item>
        </Breadcrumb>,
      );

      const itemWithClassName = getByRole('listitem');

      expect(itemWithClassName).not.toHaveClass('text-gray-100');
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

  describe('A11y', () => {
    it('should have `role="navigation"`', () => {
      const { getByRole } = render(<BreadcrumbTest />);

      const breadcrumb = getByRole('navigation');

      expect(breadcrumb).toBeInTheDocument();
    });

    it('should contain a `role="list"`', () => {
      const { getByRole } = render(<BreadcrumbTest />);

      const breadcrumb = getByRole('navigation');
      const breadcrumbsList = getByRole('list');

      expect(breadcrumb).toContainElement(breadcrumbsList);
    });

    it('should contain a `role="listitem"` for each `Breadcrumb.Item`', () => {
      const { getAllByRole } = render(<BreadcrumbTest />);

      const breadcrumbs = getAllByRole('listitem');

      expect(breadcrumbs[0]).toHaveTextContent('Home');
      expect(breadcrumbs[1]).toHaveTextContent('Projects');
      expect(breadcrumbs[2]).toHaveTextContent('Flowbite React');
    });

    it('should contain a `role="link"` for each `Breadcrumb.Item href=".."`', () => {
      const { getAllByRole } = render(<BreadcrumbTest />);

      const breadcrumbLinks = getAllByRole('link');

      expect(breadcrumbLinks[0]).toHaveTextContent('Home');
      expect(breadcrumbLinks[1]).toHaveTextContent('Projects');
    });

    it('should use `aria-label` if provided', () => {
      const { getByRole } = render(<BreadcrumbTest />);

      const breadcrumb = getByRole('navigation');

      expect(breadcrumb).toHaveAccessibleName('test label');
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
