import type { FC } from 'react';
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';
import { Dropdown } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const DropdownPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Dropdown example',
      code: (
        <Dropdown label="Dropdown button">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown divider',
      code: (
        <Dropdown label="Dropdown button">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown header',
      code: (
        <Dropdown label="Dropdown button">
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block text-sm font-medium truncate">bonnie@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Inline dropdown',
      code: (
        <Dropdown label="Dropdown" inline>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown items with icon',
      code: (
        <Dropdown label="Dropdown">
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block text-sm font-medium truncate">bonnie@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
          <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
          <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown item on click handler',
      code: (
        <Dropdown label="Dropdown">
          <Dropdown.Item onClick={() => alert('Dashboard!')}>Dashboard</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Settings!')}>Settings</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Earnings!')}>Earnings</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Sign out!')}>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Sizing',
      code: (
        <div className="flex gap-4 items-center">
          <Dropdown label="Small dropdown" size="sm">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Large dropdown" size="lg">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      ),
    },
    {
      title: 'Placement',
      code: (
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <Dropdown label="Dropdown top" placement="top">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Dropdown right" placement="right">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Dropdown bottom" placement="bottom">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Dropdown left" placement="left">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex gap-4 items-center">
            <Dropdown label="Dropdown left start" placement="left-start">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Dropdown right start" placement="right-start">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default DropdownPage;
