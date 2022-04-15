import { ComponentProps, FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';
import { Tooltip } from '../Tooltip';

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

  const ItemWrapper = ({ title, children }: { title: string; children: ReactNode }) =>
    collapsed ? (
      <Tooltip content={title} placement="right">
        {children}
      </Tooltip>
    ) : (
      <>{children}</>
    );

  return (
    <aside
      className={classNames('h-full', {
        'w-64': !collapsed,
        'w-16': collapsed,
      })}
      aria-label="sidebar"
    >
      <div className="h-full overflow-y-auto border-r border-gray-200 bg-white py-4 px-3 dark:border-gray-700 dark:bg-gray-800">
        {itemsGroups.map((items, groupIndex) => (
          <ul
            key={groupIndex}
            className={classNames('space-y-2', {
              'mt-4 border-t border-gray-200 pt-4 dark:border-gray-700': groupIndex > 0,
            })}
          >
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.group === false ? (
                  <ItemWrapper title={item.title}>
                    <Link
                      className={classNames(
                        'group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                        {
                          'bg-gray-100 dark:bg-gray-700': item.href === pathname,
                        },
                      )}
                      to={item.href}
                    >
                      <div className="group-hover:text-black dark:group-hover:text-white">
                        <item.icon className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      </div>
                      {!collapsed && <span className="ml-3 flex-1 whitespace-nowrap">{item.title}</span>}
                      {!collapsed && item.label && (
                        <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-200 p-3 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                          {item.label}
                        </span>
                      )}
                    </Link>
                  </ItemWrapper>
                ) : (
                  <>
                    <ItemWrapper title={item.title}>
                      <button
                        type="button"
                        className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        onClick={toggleGroup(groupIndex)}
                      >
                        <item.icon className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        {!collapsed && (
                          <>
                            <span className="ml-3 flex-1 whitespace-nowrap text-left">{item.title}</span>
                            <HiChevronDown className="h-6 w-6" />
                          </>
                        )}
                      </button>
                    </ItemWrapper>
                    <ul
                      className={classNames('space-y-2 py-2', {
                        hidden: !groupsState[groupIndex],
                      })}
                    >
                      {item.items.map((subItem, subItemIndex) => (
                        <li key={subItemIndex}>
                          <ItemWrapper title={subItem.title}>
                            <Link
                              className={classNames(
                                'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
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
                                <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-200 p-3 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                  {subItem.label}
                                </span>
                              )}
                            </Link>
                          </ItemWrapper>
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
