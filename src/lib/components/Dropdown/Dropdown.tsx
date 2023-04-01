
import { FC, PropsWithChildren } from 'react';
import type { ButtonProps } from '../Button';
import { Floating, FloatingOptions } from '../Floating';
import type { FlowbiteDropdownDividerTheme } from './DropdownDivider';
import { DropdownDivider } from './DropdownDivider';
import type { FlowbiteDropdownHeaderTheme } from './DropdownHeader';
import { DropdownHeader } from './DropdownHeader';
import type { FlowbiteDropdownItemTheme } from './DropdownItem';
import { DropdownItem } from './DropdownItem';
import { DropdownItems } from './DropdownItems';
import {DropdownTrigger} from './DropdownTrigger';
import { DropdownIcon } from './DropdownIcon';
import { FlowbiteFloatingTheme } from '../Floating';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteDropdownFloatingTheme
  extends FlowbiteFloatingTheme,
    FlowbiteDropdownDividerTheme,
    FlowbiteDropdownHeaderTheme {
  item: FlowbiteDropdownItemTheme;
}

export interface FlowbiteDropdownTheme {
  floating: FlowbiteDropdownFloatingTheme;
  content: string;
  inlineWrapper: string;
  arrowIcon: string;
}

export interface DropdownProps
  extends PropsWithChildren,
    Pick<FloatingOptions, 'placement' | 'trigger'>,
    Omit<ButtonProps, 'theme'> {
  arrowIcon?: boolean;
  dismissOnClick?: boolean;
  floatingArrow?: boolean;
  inline?: boolean;
  initialOpen?: boolean;
  theme: FlowbiteDropdownTheme;
}

const DropdownComponent: FC<DropdownProps> = ({
  children,
  className,
  dismissOnClick = true,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.dropdown, customTheme);
  const theirProps = props as Omit<DropdownProps, 'theme'>;
  const {
    placement = props.inline ? 'bottom-start' : 'bottom',
    trigger: triggerEventType = 'click',
    label,
    inline,
    floatingArrow = false,
    arrowIcon = true,
    ...buttonProps
  } = theirProps;
  return (
    <Floating theme={theme.floating}>
      {children}
    </Floating>
  )
}


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

