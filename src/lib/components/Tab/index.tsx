import { Children, cloneElement, ComponentProps, FC, PropsWithChildren, ReactElement, useMemo, useState } from 'react';
import classNames from 'classnames';

import { TabItem, TabProps } from './TabItem';

export type TabStyle = 'default' | 'underline' | 'pills' | 'fullWidth';
export type TabItemStatus = 'active' | 'notActive';

export const tabGroupStyleClasses: Record<TabStyle, string> = {
  default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
  underline: 'flex-wrap -mb-px',
  pills: 'flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400',
  fullWidth:
    'hidden text-sm font-medium rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400',
};

export const tabItemStyleClasses: Record<TabStyle, Record<TabItemStatus, string>> = {
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

export type TabsProps = PropsWithChildren<
  ComponentProps<'div'> & {
    className?: string;
    style?: TabStyle;
  }
>;

export const TabsComponent: FC<TabsProps> = ({ children, className, style = 'default' as TabStyle, ...rest }) => {
  const tabs = useMemo(
    () => Children.map(children as ReactElement<PropsWithChildren<TabProps>>[], ({ props }) => props),
    [children],
  );
  const [activeTabIndex, setActiveTabIndex] = useState(
    Math.max(
      0,
      tabs.findIndex((tab) => tab.active),
    ),
  );

  return (
    <div className="flex flex-col gap-2">
      <div aria-label="Tabs" role="tablist" {...rest}>
        <div
          className={classNames('flex text-center', tabGroupStyleClasses[style], {
            'border-b border-gray-200 dark:border-gray-700': style === 'underline',
          })}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              aria-controls={`panel-${index}`}
              aria-selected={index === activeTabIndex}
              className={classNames(
                'flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
                {
                  'ml-2 first:ml-0': style !== 'fullWidth',
                  'rounded-t-lg': style === 'underline' || style === 'default',
                  'w-full first:rounded-l-lg last:rounded-r-lg': style === 'fullWidth',
                  [tabItemStyleClasses[style].active]: index === activeTabIndex,
                  [tabItemStyleClasses[style].notActive]: index !== activeTabIndex && !tab.disabled,
                },
              )}
              disabled={tab.disabled}
              id={`tab-${index}`}
              onClick={() => setActiveTabIndex(index)}
              role="tab"
              tabIndex={index === 0 ? 0 : -1}
            >
              {tab.icon && <tab.icon className="mr-2 h-5 w-5" />}
              {tab.title}
            </button>
          ))}
        </div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            aria-labelledby={`tab-${index}`}
            className={classNames('p-4', className, tabs[activeTabIndex].className)}
            hidden={index !== activeTabIndex}
            id={`panel-${index}`}
            role="tabpanel"
          >
            {tab.children}
          </div>
        ))}
      </div>
    </div>
  );
};

TabsComponent.displayName = 'Tabs.Group';
TabItem.displayName = 'Tabs.Item';
export const Tabs = { Group: TabsComponent, Item: TabItem };
