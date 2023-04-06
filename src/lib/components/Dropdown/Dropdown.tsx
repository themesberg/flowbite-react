import type { Placement } from '@floating-ui/react';
import type { FC, PropsWithChildren } from 'react';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ButtonProps } from '../Button';
import type { FloatingProps, FlowbiteFloatingTheme } from '../Floating';
import { Floating } from '../Floating';
import { useTheme } from '../Flowbite/ThemeContext';
import type { FlowbiteDropdownDividerTheme } from './DropdownDivider';
import { DropdownDivider } from './DropdownDivider';
import type { FlowbiteDropdownHeaderTheme } from './DropdownHeader';
import { DropdownHeader } from './DropdownHeader';
import { DropdownIcon } from './DropdownIcon';
import type { FlowbiteDropdownItemTheme } from './DropdownItem';
import { DropdownItem } from './DropdownItem';
import { DropdownItems } from './DropdownItems';
import { DropdownTrigger } from './DropdownTrigger';

export interface FlowbiteDropdownFloatingTheme
  extends FlowbiteFloatingTheme,
    FlowbiteDropdownDividerTheme,
    FlowbiteDropdownHeaderTheme {
  item: FlowbiteDropdownItemTheme;
}

export interface FlowbiteDropdownTheme {
  floating: FlowbiteDropdownFloatingTheme;
  content: string;
}

export interface DropdownProps
  extends PropsWithChildren,
    Pick<FloatingProps, 'placement' | 'trigger'>,
    Omit<ButtonProps, 'theme'> {
  dismissOnClick?: boolean;
  placement?: Placement;
  theme?: FlowbiteDropdownTheme;
  trigger?: 'click' | 'hover';
  arrow?: boolean;
}

const DropdownComponent: FC<DropdownProps> = ({
  arrow = false,
  children,
  className,
  dismissOnClick = true,
  placement = 'bottom',
  theme: customTheme = {},
  trigger = 'click',
}) => {
  const theme = mergeDeep(useTheme().theme.dropdown, customTheme);

  return (
    <Floating
      arrow={arrow}
      className={className}
      dismissOnClick={dismissOnClick}
      placement={placement}
      theme={theme.floating}
      trigger={trigger}
    >
      {children}
    </Floating>
  );
};

DropdownComponent.displayName = 'Dropdown';
DropdownItem.displayName = 'Dropdown.Item';
DropdownItems.displayName = 'Dropdown.Items';
DropdownHeader.displayName = 'Dropdown.Header';
DropdownDivider.displayName = 'Dropdown.Divider';
DropdownTrigger.displayName = 'Dropdown.Trigger';
DropdownIcon.displayName = 'Dropdown.Icon';

export const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Items: DropdownItems,
  Header: DropdownHeader,
  Divider: DropdownDivider,
  Trigger: DropdownTrigger,
  Icon: DropdownIcon,
});
