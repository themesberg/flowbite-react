import type { RenderResult } from '@testing-library/react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HiChartPie, HiInbox, HiShoppingBag } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import type { SidebarProps } from '.';
import { Sidebar } from '.';
import { Flowbite } from '../Flowbite';

describe.concurrent('Components / Sidebar', () => {
  describe('A11y', () => {
    it('should use `aria-label` if provided', () => {
      const { getByLabelText } = render(<TestSidebar aria-label="My differently labelled sidebar" />);
      const sidebar = getByLabelText('My differently labelled sidebar');

      expect(sidebar).toHaveAccessibleName('My differently labelled sidebar');
    });

    describe('`Sidebar.Collapse` and `Sidebar.Item`', () => {
      it('should use text content as accessible name', () => {
        const itemLabels = ['Dashboard', 'E-commerce', 'Products', 'Services', 'Inbox', 'My heading'];

        const { getAllByRole } = render(<TestSidebar />);
        const collapseButtons = getSidebarCollapseButtons({ getAllByRole });

        collapseButtons.forEach((button) => userEvent.click(button));

        const items = getSidebarItems({ getAllByRole });

        items.forEach((item, i) => {
          expect(item.firstElementChild).toHaveAccessibleName(itemLabels[i]);
        });
      });
    });

    describe('`Sidebar.Logo`', () => {
      it('should use text content as accessible name', () => {
        const logo = getSidebarLogo(render(<TestSidebar />));

        expect(logo).toHaveAccessibleName('Flowbite');
      });

      describe('`img=".."` and `imgAlt=".."`', () => {
        it('should use `imgAlt` as alternative text for image', () => {
          const { getByAltText } = render(<TestSidebar />);
          const logoImg = getByAltText('Flowbite logo');

          expect(logoImg).toHaveAccessibleName('Flowbite logo');
        });
      });
    });
  });

  describe('Keyboard interactions', () => {
    describe('`Space`', () => {
      describe('`Sidebar.Collapse`', () => {
        it('should expand/collapse', () => {
          const { getAllByRole } = render(<TestSidebar />);
          const collapseButton = getSidebarCollapseButtons({ getAllByRole })[0];

          userEvent.click(collapseButton);

          const collapse = getSidebarCollapses({ getAllByRole })[0];

          expect(collapse).toBeVisible();
        });
      });

      describe('`Sidebar.Item`', () => {
        describe('`href=".."`', () => {
          it('should follow link', () => {
            const { getAllByRole } = render(<TestSidebar />);
            const link = getAllByRole('link')[1];

            expect(link).toHaveAccessibleName('Dashboard');
            expect(link).toHaveAttribute('href', '#');
          });
        });
      });
    });

    describe('`Tab`', () => {
      it('should be possible to `Tab` out', async () => {
        const { getByText } = render(
          <>
            <TestSidebar />
            <button role="checkbox">Outside</button>
          </>,
        );
        const outside = getByText('Outside');

        await waitFor(() => {
          userEvent.tab();

          expect(outside).toHaveFocus();
        });
      });
    });
  });

  describe('Props', () => {
    describe('`collapseBehavior="hide"`', () => {
      it("shouldn't display anything", () => {
        const { queryByLabelText } = render(<TestSidebar collapseBehavior="hide" collapsed />);
        const sidebar = queryByLabelText('Sidebar');

        expect(sidebar).not.toBeVisible();
      });
    });

    describe('`collapsed={true}`', () => {
      describe('`Sidebar.CTA`', () => {
        it("shouldn't be visible", () => {
          const cta = getSidebarCTA(render(<TestSidebar collapsed />));

          expect(cta).not.toBeVisible();
        });
      });

      describe('`Sidebar.Collapse` and `Sidebar.Item`', () => {
        it('should display tooltip', () => {
          const items = getSidebarItems(render(<TestSidebar collapsed />));

          items.forEach((item) => {
            expect(item.firstElementChild).toHaveAttribute('data-testid', 'tooltip-target');
          });
        });

        it("shouldn't display text content", () => {
          const items = getSidebarItemContents(render(<TestSidebar collapsed />));

          items.forEach((item) => expect(item).toHaveClass('hidden'));
        });
      });

      describe('`Sidebar.Item`', () => {
        it("shouldn't display `label`", () => {
          const labels = getSidebarLabels(render(<TestSidebar collapsed />));

          labels.forEach((label) => expect(label).not.toBeVisible());
        });
      });

      describe('`Sidebar.Logo`', () => {
        it("shouldn't display text content", () => {
          const logo = getSidebarLogo(render(<TestSidebar collapsed />));

          expect(logo.lastElementChild).toHaveClass('hidden');
        });
      });
    });

    describe('`Sidebar.Item`', () => {
      describe('`as=""`', () => {
        it('should use that HTML element', () => {
          const { getByLabelText } = render(<TestSidebar />);
          const asItem = getByLabelText('My heading');

          expect(asItem.tagName.toLocaleLowerCase()).toEqual('h3');
        });
      });
    });
  });

  describe('Rendering', () => {
    it('should render', () => {
      const sidebar = getSidebar(render(<TestSidebar />));

      expect(sidebar).toBeInTheDocument();
    });

    describe('`collapseBehavior="hide"`', () => {
      it('should render', () => {
        const sidebar = getSidebar(render(<TestSidebar collapseBehavior="hide" collapsed />));

        expect(sidebar).toBeInTheDocument();
      });
    });

    describe('`collapsed={true}`', () => {
      it('should render', () => {
        const sidebar = getSidebar(render(<TestSidebar collapsed />));

        expect(sidebar).toBeInTheDocument();
      });
    });
  });

  describe('Theme', () => {
    it('should use custom classes', () => {
      const theme = {
        sidebar: {
          base: 'bg-gray-100',
          collapsed: {
            off: 'text-gray-200',
            on: 'text-gray-300',
          },
          inner: 'bg-gray-200',
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

    describe('`Sidebar.Collapse`', () => {
      it('should use custom classes', () => {
        const theme = {
          sidebar: {
            collapse: {
              button: 'text-gray-100',
              icon: {
                base: 'text-gray-200',
                open: {
                  off: 'bg-gray-100',
                  on: 'bg-gray-200',
                },
              },
              label: {
                base: 'text-gray-300',
                icon: 'text-gray-400',
              },
              list: 'bg-gray-300',
            },
          },
        };

        const { getAllByRole, getAllByTestId } = render(
          <Flowbite theme={{ theme }}>
            <TestSidebar />
          </Flowbite>,
        );
        const buttons = getSidebarCollapseButtons({ getAllByRole });
        let icons = getSidebarCollapseIcons({ getAllByTestId });
        const labels = getSidebarCollapseLabels({ getAllByTestId });
        const labelIcons = labels.map((label) => label.nextElementSibling);
        const list = getSidebarCollapses({ getAllByRole });

        buttons.forEach((button) => expect(button).toHaveClass('text-gray-100'));
        icons.forEach((icon) => expect(icon).toHaveClass('text-gray-200 bg-gray-100'));
        labels.forEach((label) => expect(label).toHaveClass('text-gray-300'));
        labelIcons.forEach((labelicon) => expect(labelicon).toHaveClass('text-gray-400'));
        list.forEach((list) => expect(list).toHaveClass('bg-gray-300'));

        buttons.forEach((button) => userEvent.click(button));

        icons = getSidebarCollapseIcons({ getAllByTestId });

        icons.forEach((icon) => expect(icon).toHaveClass('bg-gray-200'));
      });
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

        const cta = getSidebarCTA(
          render(
            <Flowbite theme={{ theme }}>
              <TestSidebar />
            </Flowbite>,
          ),
        );

        expect(cta).toHaveClass('bg-gray-100 text-gray-100');
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

        const { getAllByRole, getAllByTestId } = render(
          <Flowbite theme={{ theme }}>
            <TestSidebar collapsed />
          </Flowbite>,
        );
        const contents = getSidebarItemContents({ getAllByTestId });
        const icons = getSidebarItemIcons({ getAllByTestId });
        const items = getSidebarItems({ getAllByRole })
          .map((item) => item.firstElementChild)
          .map((item) => item?.firstElementChild)
          .filter((item) => item?.tagName.toLocaleLowerCase() !== 'button') as HTMLElement[];
        const activeItems = getAllByTestId('active-item');
        const activeIcons = activeItems.map((item) => item.firstElementChild);
        const inactiveIcons = [...icons.filter((icon) => !activeIcons.includes(icon))];
        const inactiveItems = [...items.filter((item) => item !== null && !activeItems.includes(item))];

        activeIcons.forEach((icon) => expect(icon).toHaveClass('bg-gray-300'));
        activeItems.forEach((item) => expect(item).toHaveClass('text-gray-100'));
        contents.forEach((content) => expect(content).toHaveClass('bg-gray-200'));
        inactiveIcons.forEach((icon) => expect(icon).not.toHaveClass('bg-gray-300'));
        inactiveItems.forEach((item) => expect(item).not.toHaveClass('text-gray-100'));
        icons.forEach((icon) => expect(icon).toHaveClass('text-gray-400'));
        items.forEach((item) => expect(item).toHaveClass('bg-gray-100'));
      });
    });

    describe('`Sidebar.Items`', () => {
      it('should use custom classes', () => {
        const theme = {
          sidebar: {
            items: 'text-gray-100',
          },
        };

        const itemsContainers = getSidebarItemsContainer(
          render(
            <Flowbite theme={{ theme }}>
              <TestSidebar />
            </Flowbite>,
          ),
        );

        itemsContainers.forEach((container) => expect(container).toHaveClass('text-gray-100'));
      });
    });

    describe('`Sidebar.ItemGroup`', () => {
      it('should use custom classes', () => {
        const theme = {
          sidebar: {
            itemGroup: 'text-gray-100',
          },
        };

        const itemGroups = getSidebarItemGroups(
          render(
            <Flowbite theme={{ theme }}>
              <TestSidebar />
            </Flowbite>,
          ),
        );

        itemGroups.forEach((group) => expect(group).toHaveClass('text-gray-100'));
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

        const logo = getSidebarLogo(
          render(
            <Flowbite theme={{ theme }}>
              <TestSidebar />
            </Flowbite>,
          ),
        );

        expect(logo).toHaveClass('text-gray-100');
      });
    });
  });
});

const TestSidebar = ({ ...props }: SidebarProps): JSX.Element => (
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

const getSidebar = ({ getByLabelText }: Pick<RenderResult, 'getByLabelText'>): HTMLElement => getByLabelText('Sidebar');

const getSidebarCollapseButtons = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] =>
  getAllByRole('button');

const getSidebarCollapses = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] =>
  getAllByRole('list').slice(1);

const getSidebarCollapseIcons = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-sidebar-collapse-icon');

const getSidebarCollapseLabels = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-sidebar-collapse-label');

const getSidebarCTA = ({ getByText }: Pick<RenderResult, 'getByText'>): HTMLElement => getByText('Some content');

const getSidebarItemContents = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-sidebar-item-content');

const getSidebarItemGroups = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-sidebar-item-group');

const getSidebarItemIcons = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-sidebar-item-icon');

const getSidebarItems = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] =>
  getAllByRole('listitem');

const getSidebarItemsContainer = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-sidebar-items');

const getSidebarLabels = ({ queryAllByTestId }: Pick<RenderResult, 'queryAllByTestId'>): HTMLElement[] =>
  queryAllByTestId('flowbite-sidebar-label');

const getSidebarLogo = ({ getByLabelText }: Pick<RenderResult, 'getByLabelText'>): HTMLElement =>
  getByLabelText('Flowbite');
