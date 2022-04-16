import { Children, FC, PropsWithChildren, ReactElement, useMemo, useState } from 'react';
import { TabProps } from './Tab';
import classNames from 'classnames';
import { max } from '@popperjs/core/lib/utils/math';

export type TabTypes = 'default' | 'underline' | 'pills' | 'fullWidth';
export type ItemStyleTypes = 'active' | 'notActive';

export const listStyleClasses: Record<TabTypes, string> = {
  default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
  underline: 'flex-wrap -mb-px',
  pills: 'flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400',
  fullWidth:
    'hidden text-sm font-medium hidden rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400',
};
export const itemStyleClasses: Record<TabTypes, Record<ItemStyleTypes, string>> = {
  default: {
    active: 'bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-500',
    notActive:
      'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300',
  },
  underline: {
    active: 'text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
    notActive:
      'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
  },
  pills: {
    active: 'rounded-lg bg-blue-600 text-white',
    notActive: 'rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
  },
  fullWidth: {
    active:
      'inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white',
    notActive:
      'bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
  },
};

export type TabsProps = PropsWithChildren<{
  style?: TabTypes;
}>;

export const Tabs: FC<TabsProps> = ({ children, style = 'default' }) => {
  const tabs = useMemo(
    () =>
      Children.map(children as ReactElement<PropsWithChildren<TabProps>>[], (child) => ({
        title: child.props.title,
        content: child.props.children,
        active: child.props.active,
        icon: child.props.icon,
        className: child.props.className,
        disabled: child.props.disabled,
      })),
    [children],
  );
  const [activeTabIndex, setActiveTabIndex] = useState(
    max(
      0,
      tabs.findIndex((tab) => tab.active),
    ),
  );

  return (
    <div>
      <div
        className={classNames('flex text-center', listStyleClasses[style], {
          'border-b border-gray-200 dark:border-gray-700': style === 'underline',
        })}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={classNames(
              'flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
              {
                'ml-2 first:ml-0': style !== 'fullWidth',
                'rounded-t-lg': style === 'underline' || style === 'default',
                'w-full first:rounded-l-lg last:rounded-r-lg': style === 'fullWidth',
                [itemStyleClasses[style].active]: index === activeTabIndex,
                [itemStyleClasses[style].notActive]: index !== activeTabIndex && !tab.disabled,
              },
            )}
            onClick={() => setActiveTabIndex(index)}
            disabled={tab.disabled}
          >
            {tab.icon && <tab.icon className="mr-2 h-5 w-5" />}
            {tab.title}
          </button>
        ))}
      </div>
      <div className={tabs[activeTabIndex].className ? tabs[activeTabIndex].className : 'm-4'}>
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};
