import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { describe, expect, it } from 'vitest';
import { Tabs } from '.';

describe.concurrent('Components / Tabs', () => {
  describe('when clicked', () => {
    it('should open clicked tab', () => {
      const { getAllByRole } = render(<TestTabs />);

      const tabs = getAllByRole('tab');
      const firstTab = tabs[0];
      const nextTab = tabs[1];

      expect(firstTab).toHaveFocus();

      userEvent.click(nextTab);

      expect(firstTab).toHaveAttribute('aria-selected', 'false');
      expect(nextTab).toHaveFocus();
      expect(nextTab).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('when focused', () => {
    describe('when Enter is pressed', () => {
      it('should open focused tab', () => {
        const { getAllByRole } = render(<TestTabs />);

        const tabs = getAllByRole('tab');
        const firstTab = tabs[0];
        const nextTab = tabs[1];

        expect(firstTab).toHaveFocus();

        userEvent.keyboard('[ArrowRight]');

        expect(nextTab).toHaveFocus();

        userEvent.keyboard('[Enter]');

        expect(nextTab).toHaveAttribute('aria-selected', 'true');
      });
    });

    describe('when Left arrow is pressed', () => {
      describe('when first tab is already focused', () => {
        it('should do nothing', () => {
          const { getAllByRole } = render(<TestTabs />);

          const tabs = getAllByRole('tab');
          const firstTab = tabs[0];

          expect(firstTab).toHaveFocus();

          userEvent.keyboard('[ArrowLeft]');

          expect(firstTab).toHaveFocus();
        });
      });

      it('should focus previous tab', () => {
        const { getAllByRole } = render(<TestTabsDifferentActiveItem />);

        const tabs = getAllByRole('tab');
        const firstTab = tabs[0];
        const activeTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true');

        expect(activeTab).toHaveFocus();

        userEvent.keyboard('[ArrowLeft]');

        expect(firstTab).toHaveFocus();
      });
    });

    describe('when Right arrow is pressed', () => {
      describe('when last tab is already focused', () => {
        it('should do nothing', () => {
          const { getAllByRole } = render(<TestTabsLastActiveItem />);

          const tabs = getAllByRole('tab');
          const lastTab = tabs[tabs.length - 1];

          expect(lastTab).toHaveAttribute('aria-selected', 'true');
          expect(lastTab).toHaveFocus();

          userEvent.keyboard('[ArrowRight]');

          expect(lastTab).toHaveFocus();
        });
      });

      it('should focus next tab', () => {
        const { getAllByRole } = render(<TestTabs />);

        const tabs = getAllByRole('tab');
        const nextTab = tabs[1];

        userEvent.keyboard('[ArrowRight]');

        expect(nextTab).toHaveFocus();
      });
    });
  });
});

const TestTabs = (): JSX.Element => (
  <Tabs.Group aria-label="Test tabs">
    <Tabs.Item title="Profile" icon={HiUserCircle}>
      Profile content
    </Tabs.Item>
    <Tabs.Item title="Dashboard" icon={MdDashboard}>
      Dashboard content
    </Tabs.Item>
    <Tabs.Item title="Settings" icon={HiAdjustments}>
      Settings content
    </Tabs.Item>
    <Tabs.Item title="Contacts" icon={HiClipboardList}>
      Contacts content
    </Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs.Group>
);

const TestTabsDifferentActiveItem = (): JSX.Element => (
  <Tabs.Group aria-label="Test tabs">
    <Tabs.Item title="Profile" icon={HiUserCircle}>
      Profile content
    </Tabs.Item>
    <Tabs.Item active title="Dashboard" icon={MdDashboard}>
      Dashboard content
    </Tabs.Item>
    <Tabs.Item title="Settings" icon={HiAdjustments}>
      Settings content
    </Tabs.Item>
    <Tabs.Item title="Contacts" icon={HiClipboardList}>
      Contacts content
    </Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs.Group>
);

const TestTabsLastActiveItem = (): JSX.Element => (
  <Tabs.Group aria-label="Test tabs">
    <Tabs.Item title="Profile" icon={HiUserCircle}>
      Profile content
    </Tabs.Item>
    <Tabs.Item title="Dashboard" icon={MdDashboard}>
      Dashboard content
    </Tabs.Item>
    <Tabs.Item title="Settings" icon={HiAdjustments}>
      Settings content
    </Tabs.Item>
    <Tabs.Item title="Contacts" icon={HiClipboardList}>
      Contacts content
    </Tabs.Item>
    <Tabs.Item active title="Still working">
      Completely functional content
    </Tabs.Item>
  </Tabs.Group>
);
