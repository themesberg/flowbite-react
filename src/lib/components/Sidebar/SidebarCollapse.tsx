import classNames from 'classnames';
import { FC, PropsWithChildren, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { SidebarItem } from './SidebarItem';
import { SidebarItemContext } from './SidebarItemContext';

export type SidebarCollapseProps = PropsWithChildren<SidebarItem>;

const SidebarCollapse: FC<SidebarCollapseProps> = ({ children, icon: Icon, label, ...rest }) => {
  const { collapsed } = useSidebarContext();
  const [open, setOpen] = useState(false);

  const Wrapper = ({ children: wrapperChildren }: PropsWithChildren<Record<string, unknown>>) => (
    <li>
      {collapsed ? (
        <Tooltip content={label} placement="right">
          {wrapperChildren}
        </Tooltip>
      ) : (
        wrapperChildren
      )}
    </li>
  );

  return (
    <Wrapper>
      <button
        className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        data-testid="sidebar-collapse-button"
        onClick={() => setOpen(!open)}
        type="button"
        {...rest}
      >
        {Icon && (
          <Icon
            className={classNames(
              'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
              { 'text-gray-900': open },
            )}
          />
        )}
        {collapsed ? (
          <span className="sr-only">{label}</span>
        ) : (
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
        data-testid="sidebar-collapse"
      >
        <SidebarItemContext.Provider value={{ insideCollapse: true }}>{children}</SidebarItemContext.Provider>
      </ul>
    </Wrapper>
  );
};

SidebarCollapse.displayName = 'Sidebar.Collapse';
export default SidebarCollapse;
