import { ComponentProps, FC, useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

export type SidebarItem = {
  icon: FC<ComponentProps<'svg'>>;
  title: string;
} & (
  | {
      group: true;
      items: {
        title: string;
        href: string;
        label?: string;
      }[];
    }
  | {
      group: false;
      href: string;
      label?: string;
    }
);

export type SidebarProps = {
  collapsed: boolean;
  itemsGroups: SidebarItem[][];
};

export const Sidebar: FC<SidebarProps> = ({ collapsed, itemsGroups }) => {
  const [groupsState, setGroupsState] = useState<Record<number, boolean>>({});
  const { pathname } = useLocation();

  const toggleGroup = (index: number) => () => {
    setGroupsState((state) => ({ ...state, [index]: !state[index] }));
  };

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
              'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700': groupIndex > 0,
            })}
          >
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.group === false ? (
                  <Link
                    className={classNames(
                      'flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
                      {
                        'bg-gray-100 dark:bg-gray-700': item.href === pathname,
                      },
                    )}
                    to={item.href}
                  >
                    <div className="group-hover:text-black dark:group-hover:text-white">
                      <item.icon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </div>
                    {!collapsed && <span className="flex-1 ml-3 whitespace-nowrap">{item.title}</span>}
                    {!collapsed && item.label && (
                      <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                        {item.label}
                      </span>
                    )}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={toggleGroup(groupIndex)}
                    >
                      <item.icon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                      {!collapsed && (
                        <>
                          <span className="flex-1 ml-3 text-left whitespace-nowrap">{item.title}</span>
                          <HiChevronDown className="w-6 h-6" />
                        </>
                      )}
                    </button>
                    <ul
                      className={classNames('py-2 space-y-2', {
                        hidden: !groupsState[groupIndex],
                      })}
                    >
                      {item.items.map((subItem, subItemIndex) => (
                        <li key={subItemIndex}>
                          <Link
                            className={classNames(
                              'flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                              {
                                'pl-11': !collapsed,
                                'bg-gray-100 dark:bg-gray-700': subItem.href === pathname,
                              },
                            )}
                            to={subItem.href}
                          >
                            <span
                              className={classNames('flex-1 whitespace-nowrap', {
                                'text-left': !collapsed,
                                'text-center': collapsed,
                              })}
                            >
                              {!collapsed ? subItem.title : subItem.title[0]}
                            </span>
                            {!collapsed && subItem.label && (
                              <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                {subItem.label}
                              </span>
                            )}
                          </Link>
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
