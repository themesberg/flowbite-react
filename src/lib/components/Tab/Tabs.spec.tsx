import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC } from 'react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { describe, expect, it } from 'vitest';
import { Tabs } from '.';

describe('Components / Tabs', () => {
  it('should open tab when clicked', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);

    expect(firstTab()).toHaveFocus();

    const nextTab = tabs()[1];

    await user.click(nextTab);

    expect(firstTab()).toHaveAttribute('aria-selected', 'false');
    expect(nextTab).toHaveFocus();
    expect(nextTab).toHaveAttribute('aria-selected', 'true');
  });

  it('should open focused tab when `Enter` is pressed', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);

    expect(firstTab()).toHaveFocus();

    await user.keyboard('[ArrowRight]');

    const nextTab = tabs()[1];

    expect(nextTab).toHaveFocus();

    await user.keyboard('[Enter]');

    expect(nextTab).toHaveAttribute('aria-selected', 'true');
  });

  it('should do nothing when Left Arrow is pressed and first tab is already focused', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);

    expect(firstTab()).toHaveFocus();

    await user.keyboard('[ArrowLeft]');

    expect(firstTab()).toHaveFocus();
  });

  it('should focus previous tab when Left Arrow is pressed', async () => {
    const user = userEvent.setup();
    render(<TestTabsDifferentActiveItem />);

    expect(activeTab()).toHaveFocus();

    await user.keyboard('[ArrowLeft]');

    expect(firstTab()).toHaveFocus();
  });

  it('should do nothing when Right Arrow is pressed and last tab is already focused', async () => {
    const user = userEvent.setup();
    render(<TestTabsLastActiveItem />);

    expect(lastTab()).toHaveAttribute('aria-selected', 'true');
    expect(lastTab()).toHaveFocus();

    await user.keyboard('[ArrowRight]');

    expect(lastTab()).toHaveFocus();
  });

  it('should focus next tab when Right Arrow is pressed', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);

    await user.keyboard('[ArrowRight]');

    const nextTab = tabs()[1];

    expect(nextTab).toHaveFocus();
  });
});

const TestTabs: FC = () => (
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

const TestTabsDifferentActiveItem: FC = () => (
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

const TestTabsLastActiveItem: FC = () => (
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

const tabs = () => screen.getAllByRole('tab');

const activeTab = () => tabs().find((tab) => tab.getAttribute('aria-selected') === 'true');

const firstTab = () => tabs()[0];

const lastTab = () => tabs()[tabs().length - 1];
