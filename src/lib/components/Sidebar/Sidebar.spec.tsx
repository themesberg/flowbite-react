import { render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { HiChartPie, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi';
import { Sidebar, SidebarProps } from '.';
import { Badge } from '../Badge';
import { Button } from '../Button';

describe('Sidebar', () => {
  describe('when collapsed', () => {
    describe('logo', () => {
      it('should not display its text label', () => {
        const { getByTestId } = render(<SidebarTestComponent collapsed />);
        expect(getByTestId('sidebar-logo')).toHaveClass('sr-only');
      });
    });

    describe('items', () => {
      it('should not display their text content', () => {
        const { queryAllByTestId } = render(<SidebarTestComponent collapsed />);
        expect(queryAllByTestId('sidebar-item-content')).toHaveLength(0);
      });
      it('should not display their label', () => {
        const { queryAllByTestId } = render(<SidebarTestComponent collapsed />);
        expect(queryAllByTestId('sidebar-item-label')).toHaveLength(0);
      });
      it('should display a tooltip', async () => {
        const { queryAllByTestId } = render(<SidebarTestComponent collapsed />);
        expect(queryAllByTestId('sidebar-item-tooltip')).not.toHaveLength(0);
      });
    });

    describe('CTA', () => {
      it('should not be displayed', () => {
        const { queryByTestId } = render(<SidebarTestComponent collapsed />);
        expect(queryByTestId('sidebar-cta')).toBeNull();
      });
    });
  });

  describe('with a collapsable item', () => {
    describe('that is closed', () => {
      it('should expand when clicked', async () => {
        const { getByTestId } = render(<SidebarTestComponent />);
        act(() => {
          getByTestId('sidebar-collapse-button').click();
        });
        await waitFor(() => expect(getByTestId('sidebar-collapse')).not.toHaveClass('hidden'));
      });
    });

    describe('that is open', () => {
      it('should collapse when clicked', async () => {
        const { getByTestId } = render(<SidebarTestComponent />);
        act(() => {
          getByTestId('sidebar-collapse-button').click();
        });
        act(() => {
          getByTestId('sidebar-collapse-button').click();
        });
        await waitFor(() => expect(getByTestId('sidebar-collapse')).toHaveClass('hidden'));
      });
    });
  });
});

const SidebarTestComponent = ({ collapsed }: SidebarProps): JSX.Element => (
  <Sidebar collapsed={collapsed}>
    <Sidebar.Logo href="#" img="favicon.png" imgAlt="Flowbite logo">
      Flowbite
    </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
          <Sidebar.Item href="#">Products</Sidebar.Item>
        </Sidebar.Collapse>
        <Sidebar.Item href="#" icon={HiInbox}>
          Inbox
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiUser}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiShoppingBag}>
          Something else
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiArrowSmRight}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiTable}>
          Sign Up
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
    <Sidebar.CTA>
      <div className="mb-3 flex items-center">
        <Badge color="yellow">Beta</Badge>
        <Button
          aria-label="Close"
          className="-mx-1.5 -my-1.5 ml-auto !h-6 !w-6 bg-transparent !p-1 text-blue-900 hover:bg-blue-200 dark:!bg-blue-900 dark:text-blue-200 dark:hover:!bg-blue-800"
          data-collapse-toggle="dropdown-cta"
        >
          <span className="sr-only">Close</span>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
      <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
        Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your
        profile.
      </p>
      <a
        className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        href="#"
      >
        Turn new navigation off
      </a>
    </Sidebar.CTA>
  </Sidebar>
);
