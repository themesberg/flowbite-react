import type { ComponentProps, FC, ReactNode } from 'react';
import { Dropdown } from '../Dropdown';

export interface MegaMenuCollapseProps extends ComponentProps<'div'> {
  dropdown?: ReactNode;
}

export const MegaMenuCollapse: FC<MegaMenuCollapseProps> = ({ children, dropdown, ...props }) => {
  return dropdown ? (
    <Dropdown
      label={dropdown}
      theme={{
        floating: {
          target: '!p-0 !bg-transparent !text-gray-700 !border-0 !ring-0 [&_*]:!p-0 [&>span]:items-center',
        },
      }}
    >
      {children}
    </Dropdown>
  ) : (
    <div data-testid="flowbite-mega-menu-collapse" className="hidden" {...props}>
      {children}
    </div>
  );
};

MegaMenuCollapse.displayName = 'MegaMenu.Collapse';
