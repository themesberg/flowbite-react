import { Children, FC, PropsWithChildren, ReactElement, useMemo } from 'react';
import { TabProps } from './Tab';
import classNames from 'classnames';

export type TabTypes = 'default' | 'underline' | 'pills' | 'fullWidth';
export type ItemStyleTypes = 'active' | 'notActive';
export const styleClasses: Record<TabTypes, string> = {
  default: '',
  underline: 'border-b border-gray-200 dark:border-gray-700',
  pills: '',
  fullWidth: '',
};

export const listStyleClasses: Record<TabTypes, string> = {
  default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
  underline: 'flex-wrap -mb-px',
  pills: 'flex-wrap',
  fullWidth: 'hidden rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700',
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
    active: 'flex-wrap',
    notActive: '',
  },
  fullWidth: {
    active: 'flex-wrap',
    notActive: '',
  },
};

export type TabsProps = {
  style?: TabTypes;
};

export const Tabs: FC<TabsProps> = ({ children, style = 'default' }) => {
  const tabs = useMemo(
    () =>
      Children.map(children as ReactElement<PropsWithChildren<TabProps>>[], (child) => ({
        title: child.props.title,
        content: child.props.children,
        active: child.props.active,
        disabled: child.props.disabled,
      })),
    [children],
  );

  return (
    <div className={classNames({ [styleClasses[style]]: style === 'underline' })}>
      <ul className={classNames('flex', listStyleClasses[style])}>
        {tabs.map((tab, index) => (
          <li
            className={classNames({
              'mr-2': style !== 'fullWidth',
              'w-full': style === 'fullWidth',
            })}
            key={index}
          >
            <a
              href="#/tabs"
              aria-current="page"
              className={classNames('inline-block rounded-t-lg py-4 px-4 text-center text-sm font-medium', {
                [itemStyleClasses[style].active]: tab.active,
                [itemStyleClasses[style].notActive]: !tab.active,
                'cursor-not-allowed text-gray-400 dark:text-gray-500': tab.disabled,
              })}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
