import classNames from 'classnames';
import { cloneElement, FC, ReactElement, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import childrenAsArray from '../../helpers/childrenAsArray';
import { SidebarItemProps } from './SidebarItem';

type SidebarCollapseProps = Omit<SidebarItemProps, 'href'>;

const SidebarCollase: FC<SidebarCollapseProps> = (props) => {
  const { children, collapsed, label } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={() => setOpen(!open)}
      >
        {props.icon && (
          <>
            <props.icon className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          </>
        )}
        {!collapsed && (
          <>
            <span className="ml-3 flex-1 whitespace-nowrap text-left">{label}</span>
            <HiChevronDown className="h-6 w-6" />
          </>
        )}
      </button>
      <ul
        className={classNames('space-y-2 py-2', {
          hidden: !open,
        })}
      >
        {childrenAsArray(children).map((child, i) =>
          cloneElement(child as ReactElement, {
            key: i,
            className:
              'flex items-center p-2 pl-8 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
          }),
        )}
      </ul>
    </>
  );
};

SidebarCollase.displayName = 'Sidebar.Collapse';
export default SidebarCollase;
