import { render, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HiChartPie, HiInbox, HiShoppingBag } from 'react-icons/hi';
import { Sidebar, SidebarProps } from '.';

describe('Components / Sidebar', () => {
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
});

const TestSidebar = ({ ...props }: SidebarProps): JSX.Element => (
  <Sidebar {...props}>
    <Sidebar.Logo href="#" img="favicon.png" imgAlt="Flowbite logo">
      Flowbite
    </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie} label="3" labelColor="success">
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
    <Sidebar.CTA>Some content</Sidebar.CTA>
  </Sidebar>
);

const getSidebar = ({ getByLabelText }: Pick<RenderResult, 'getByLabelText'>): HTMLElement => getByLabelText('Sidebar');

const getSidebarCollapseButtons = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] =>
  getAllByRole('button');

const getSidebarCollapses = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] =>
  getAllByRole('list').slice(1);

const getSidebarCTA = ({ getByText }: Pick<RenderResult, 'getByText'>): HTMLElement => getByText('Some content');

const getSidebarItemContents = ({ getAllByTestId }: Pick<RenderResult, 'getAllByTestId'>): HTMLElement[] =>
  getAllByTestId('flowbite-sidebar-item-content');

const getSidebarItems = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] =>
  getAllByRole('listitem');

const getSidebarLabels = ({ queryAllByTestId }: Pick<RenderResult, 'queryAllByTestId'>): HTMLElement[] =>
  queryAllByTestId('flowbite-sidebar-label');

const getSidebarLogo = ({ getByLabelText }: Pick<RenderResult, 'getByLabelText'>): HTMLElement =>
  getByLabelText('Flowbite');
