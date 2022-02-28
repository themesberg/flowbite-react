import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { ChevronDownIcon } from '@heroicons/react/solid';

export type SidebarItem = {
  icon: ReactNode;
  title: string;
} & (
  | {
      dropdown: true;
      items: {
        title: string;
        href: string;
        label?: string;
      }[];
    }
  | {
      dropdown: false;
      href: string;
      label?: string;
    }
);

export type SidebarProps = {
  collapsed: boolean;
  itemsGroups: SidebarItem[][];
};

export const Sidebar: FC<SidebarProps> = ({ collapsed, itemsGroups }) => {
  return (
    <aside
      className={classNames('h-full', {
        'w-64': !collapsed,
        'w-16': collapsed,
      })}
      aria-label="sidebar"
    >
      <div className="h-full overflow-y-auto py-4 px-3 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        {itemsGroups.map((items, groupIndex) => (
          <ul
            key={groupIndex}
            className={classNames('space-y-2', {
              'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700':
                groupIndex > 0,
            })}
          >
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.dropdown === false ? (
                  <a
                    href={item.href}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {item.icon}
                    {!collapsed && (
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        {item.title}
                      </span>
                    )}
                    {!collapsed && item.label && (
                      <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                        {item.label}
                      </span>
                    )}
                  </a>
                ) : (
                  <>
                    <button
                      type="button"
                      className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls={`dropdown-group-${groupIndex}`}
                      data-collapse-toggle={`dropdown-group-${groupIndex}`}
                    >
                      {item.icon}
                      {!collapsed && (
                        <>
                          <span className="flex-1 ml-3 text-left whitespace-nowrap">
                            {item.title}
                          </span>
                          <ChevronDownIcon className="w-6 h-6" />
                        </>
                      )}
                    </button>
                    <ul
                      id={`dropdown-group-${groupIndex}`}
                      className="hidden py-2 space-y-2"
                    >
                      {item.items.map((subItem, subItemIndex) => (
                        <li key={subItemIndex}>
                          <a
                            href={subItem.href}
                            className={classNames(
                              'flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                              {
                                'pl-11': !collapsed,
                              },
                            )}
                          >
                            <span
                              className={classNames(
                                'flex-1 whitespace-nowrap',
                                {
                                  'text-left': !collapsed,
                                  'text-center': collapsed,
                                },
                              )}
                            >
                              {!collapsed ? subItem.title : subItem.title[0]}
                            </span>
                            {!collapsed && subItem.label && (
                              <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                {subItem.label}
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
};
