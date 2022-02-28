import { FC, useState } from 'react';
import { DarkThemeToggle, Navbar, Sidebar, SidebarItem } from './components';
import { ChartPieIcon, MenuAlt1Icon } from '@heroicons/react/solid';

export const Dashboard: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const itemsGroups: SidebarItem[][] = [
    [
      {
        dropdown: false,
        icon: (
          <ChartPieIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        ),
        title: 'Dashboard',
        href: '#',
        label: '1',
      },
      {
        dropdown: true,
        icon: (
          <ChartPieIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        ),
        title: 'Dropdown',
        items: [
          {
            href: '#',
            title: 'First item',
          },
          {
            href: '#',
            title: 'Second item',
            label: '2',
          },
        ],
      },
    ],
  ];

  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar>
        <div className="flex items-center">
          <MenuAlt1Icon
            className="w-6 h-6 mr-6 cursor-pointer text-gray-600 dark:text-gray-400"
            onClick={() => setCollapsed(!collapsed)}
          />
          <span className="dark:text-white">Flowbite React Components</span>
        </div>
        <DarkThemeToggle />
      </Navbar>
      <div className="h-full overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar collapsed={collapsed} itemsGroups={itemsGroups} />
      </div>
    </div>
  );
};
