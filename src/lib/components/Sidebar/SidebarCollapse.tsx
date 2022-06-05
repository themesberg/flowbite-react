import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useId, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import type { SidebarItemProps } from './SidebarItem';
import { SidebarItemContext } from './SidebarItemContext';

export type SidebarCollapseProps = PropsWithChildren<ComponentProps<'button'> & SidebarItemProps>;

const SidebarCollapse: FC<SidebarCollapseProps> = ({ children, icon: Icon, label, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const [isOpen, setOpen] = useState(false);

  const Wrapper = ({ children }: PropsWithChildren<unknown>) => (
    <li>
      {isCollapsed ? (
        <Tooltip content={label} placement="right">
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </li>
  );

  return (
    <Wrapper>
      <button
        className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        id={`flowbite-sidebar-collapse-${id}`}
        onClick={() => setOpen(!isOpen)}
        type="button"
        {...theirProps}
      >
        {Icon && (
          <Icon
            aria-hidden
            className={classNames(
              'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
              { 'text-gray-900': isOpen },
            )}
          />
        )}
        {isCollapsed ? (
          <span className="sr-only">{label}</span>
        ) : (
          <>
            <span className="ml-3 flex-1 whitespace-nowrap text-left">{label}</span>
            <HiChevronDown aria-hidden className="h-6 w-6" />
          </>
        )}
      </button>
      <ul aria-labelledby={`flowbite-sidebar-collapse-${id}`} className="space-y-2 py-2" hidden={!isOpen}>
        <SidebarItemContext.Provider value={{ isInsideCollapse: true }}>{children}</SidebarItemContext.Provider>
      </ul>
    </Wrapper>
  );
};

SidebarCollapse.displayName = 'Sidebar.Collapse';
export default SidebarCollapse;
