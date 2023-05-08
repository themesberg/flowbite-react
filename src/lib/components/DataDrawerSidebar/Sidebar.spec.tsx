import { render, screen } from '@testing-library/react';
import type { FC } from 'react';
import { HiChartPie, HiInbox, HiShoppingBag } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import type { DeepPartial } from '..';
import type { FlowbiteTheme } from '../Flowbite';
import { Flowbite } from '../Flowbite';
import type { SidebarProps } from './Sidebar';
import { Sidebar } from './Sidebar';

describe('Components / Sidebar', () => {
  describe('A11y', () => {
    it('should use `aria-label` if provided', () => {
      render(<TestSidebar aria-label="My differently labelled sidebar" />);

      const sidebar = screen.getByLabelText('My differently labelled sidebar');

      expect(sidebar).toHaveAccessibleName('My differently labelled sidebar');
    });

    it('should use text content as accessible name in `Sidebar.Logo`', () => {
      render(<TestSidebar />);

      expect(logo()).toHaveAccessibleName('Flowbite');
    });

    it('should use `imgAlt` as alternative text for image in `Sidebar.Logo` given `img=".." and imgAlt=".."`', () => {
      render(<TestSidebar />);

      const logoImg = screen.getByAltText('Flowbite logo');

      expect(logoImg).toHaveAccessibleName('Flowbite logo');
    });
  });
});

describe('Props', () => {
  it('shouldn\'t display anything when `collapseBehavior="hide"`', () => {
    render(<TestSidebar collapseBehavior="hide" collapsed />);

    const sidebar = screen.queryByLabelText('Sidebar');

    expect(sidebar).not.toBeVisible();
  });

  it("shouldn't display `Sidebar.CTA` when `collapsed={true}`", () => {
    render(<TestSidebar collapsed />);

    expect(cta()).not.toBeVisible();
  });

  it("shouldn't display text content in `Sidebar.Logo` when `collapsed={true}`", () => {
    render(<TestSidebar collapsed />);

    expect(logo().lastElementChild).toHaveClass('hidden');
  });

  it('should use the HTML element provided in `Sidebar.Item as=".."`', () => {
    render(<TestSidebar />);

    const asItem = screen.getByLabelText('My heading');

    expect(asItem.tagName.toLocaleLowerCase()).toEqual('h3');
  });
});

describe('Theme', () => {
  it('should use custom classes', () => {
    const theme: DeepPartial<FlowbiteTheme> = {
      sidebar: {
        root: {
          base: 'bg-gray-100',
          collapsed: {
            off: 'text-gray-200',
            on: 'text-gray-300',
          },
          inner: 'bg-gray-200',
        },
      },
    };

    const { getByLabelText } = render(
      <Flowbite theme={{ theme }}>
        <TestSidebar aria-label="not-collapsed" />
        <TestSidebar aria-label="collapsed" collapsed />
      </Flowbite>,
    );
    const sidebar = getByLabelText('not-collapsed');
    const inner = sidebar.firstElementChild;
    const collapsedSidebar = getByLabelText('collapsed');

    expect(sidebar).toHaveClass('bg-gray-100');
    expect(sidebar).toHaveClass('text-gray-200');
    expect(inner).toHaveClass('bg-gray-200');
    expect(collapsedSidebar).toHaveClass('text-gray-300');
  });

  describe('`Sidebar.CTA`', () => {
    it('should use custom classes', () => {
      const theme = {
        sidebar: {
          cta: {
            base: 'bg-gray-100',
            color: {
              primary: 'text-gray-100',
            },
          },
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <TestSidebar />
        </Flowbite>,
      );

      expect(cta()).toHaveClass('bg-gray-100 text-gray-100');
    });
  });

  describe('`Sidebar.Item`', () => {
    it('should use custom classes', () => {
      const theme = {
        sidebar: {
          item: {
            active: 'text-gray-100',
            base: 'bg-gray-100',
            collapsed: {
              insideCollapse: 'text-gray-300',
            },
            content: {
              base: 'bg-gray-200',
              collapsed: 'text-gray-600',
            },
            icon: {
              base: 'text-gray-400',
              active: 'bg-gray-300',
            },
          },
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <TestSidebar collapsed />
        </Flowbite>,
      );
      const theItems = items()
        .map((item) => item.firstElementChild)
        .map((item) => item?.firstElementChild)
        .filter((item) => item?.tagName.toLocaleLowerCase() !== 'button') as HTMLElement[];
      const activeItems = screen.getAllByTestId('active-item');
      const activeIcons = activeItems.map((item) => item.firstElementChild);
      const inactiveIcons = [...collapseIcons().filter((icon) => !activeIcons.includes(icon))];
      const inactiveItems = [...theItems.filter((item) => item !== null && !activeItems.includes(item))];

      activeIcons.forEach((icon) => expect(icon).toHaveClass('bg-gray-300'));
      activeItems.forEach((item) => expect(item).toHaveClass('text-gray-100'));
      itemContents().forEach((content) => expect(content).toHaveClass('bg-gray-200'));
      inactiveIcons.forEach((icon) => expect(icon).not.toHaveClass('bg-gray-300'));
      inactiveItems.forEach((item) => expect(item).not.toHaveClass('text-gray-100'));
      icons().forEach((icon) => expect(icon).toHaveClass('text-gray-400'));
      theItems.forEach((item) => expect(item).toHaveClass('bg-gray-100'));
    });
  });

  describe('`Sidebar.Items`', () => {
    it('should use custom classes', () => {
      const theme = {
        sidebar: {
          items: 'text-gray-100',
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <TestSidebar />
        </Flowbite>,
      );

      itemsContainers().forEach((container) => expect(container).toHaveClass('text-gray-100'));
    });
  });

  describe('`Sidebar.ItemGroup`', () => {
    it('should use custom classes', () => {
      const theme = {
        sidebar: {
          itemGroup: 'text-gray-100',
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <TestSidebar />
        </Flowbite>,
      ),
        itemGroups().forEach((group) => expect(group).toHaveClass('text-gray-100'));
    });
  });

  describe('`Sidebar.Logo`', () => {
    it('should use custom classes', () => {
      const theme = {
        sidebar: {
          logo: {
            base: 'text-gray-100',
            collapsed: {
              off: 'text-gray-300',
              on: 'text-gray-400',
            },
            img: 'text-gray-200',
          },
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <TestSidebar />
        </Flowbite>,
      ),
        expect(logo()).toHaveClass('text-gray-100');
    });
  });
});

const TestSidebar: FC<SidebarProps> = ({ ...props }) => (
  <Sidebar {...props}>
    <Sidebar.Logo href="#" img="favicon.png" imgAlt="Flowbite logo">
      Flowbite
    </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item active data-testid="active-item" href="#" icon={HiChartPie} label="3" labelColor="success">
          Dashboard
        </Sidebar.Item>
        <Sidebar.Collapse aria-label="E-commerce" icon={HiShoppingBag}>
          <Sidebar.Item href="#">Products</Sidebar.Item>
          <Sidebar.Item href="#">Services</Sidebar.Item>
        </Sidebar.Collapse>
        <Sidebar.Item href="#" icon={HiInbox}>
          Inbox
        </Sidebar.Item>
        <Sidebar.Item as="h3">My heading</Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
    <Sidebar.CTA color="primary">Some content</Sidebar.CTA>
  </Sidebar>
);

const collapseIcons = () => screen.getAllByTestId('flowbite-sidebar-collapse-icon');

const cta = () => screen.getByText('Some content');

const itemContents = () => screen.getAllByTestId('flowbite-sidebar-item-content');

const itemGroups = () => screen.getAllByTestId('flowbite-sidebar-item-group');

const icons = () => screen.getAllByTestId('flowbite-sidebar-item-icon');

const items = () => screen.getAllByRole('listitem');

const itemsContainers = () => screen.getAllByTestId('flowbite-sidebar-items');

const logo = () => screen.getByLabelText('Flowbite');
