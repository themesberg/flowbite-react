import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react';
import React, { Children, useMemo, useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronUp } from 'react-icons/hi';
import { uuid } from '../../helpers/uuid';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';
import type { FloatingProps } from '../Floating';
import { Floating } from '../Floating';
import { useTheme } from '../Flowbite/ThemeContext';
import { DropdownDivider } from './DropdownDivider';
import { DropdownHeader } from './DropdownHeader';
import { DropdownItem } from './DropdownItem';

export interface FlowbiteDropdownTheme {
  target: string;
  base: string;
  animation: string;
  hidden: string;
  style: {
    dark: string;
    light: string;
    auto: string;
  };
  header: string;
  content: string;
  arrow: {
    base: string;
    style: {
      dark: string;
      light: string;
      auto: string;
    };
    placement: string;
  };
  item: {
    base: string;
    icon: string;
  };
  divider: string;
}

export interface DropdownProps extends PropsWithChildren<Pick<FloatingProps, 'placement' | 'trigger'>>, ButtonProps {
  label: ReactNode;
  inline?: boolean;
  floatingArrow?: boolean;
  arrowIcon?: boolean;
}

const icons: Record<string, FC<ComponentProps<'svg'>>> = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft,
};

const DropdownComponent: FC<DropdownProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.dropdown;
  const theirProps = props as DropdownProps;
  const {
    placement = props.inline ? 'bottom-start' : 'bottom',
    trigger = 'click',
    label,
    inline,
    floatingArrow = false,
    arrowIcon = true,
    ...buttonProps
  } = theirProps;

  const Icon = useMemo(() => {
    const [p] = placement.split('-');
    return icons[p] ?? HiOutlineChevronDown;
  }, [placement]);

  const [closeRequestKey, setCloseRequestKey] = useState<string | undefined>(undefined);

  // Extends DropdownItem's onClick to trigger a close request to the Floating component
  const attachCloseListener: any = (node: ReactNode) => {
    if (!React.isValidElement(node)) return node;
    if ((node as ReactElement).type === DropdownItem)
      return React.cloneElement(node, {
        onClick: () => {
          node.props.onClick?.();
          setCloseRequestKey(uuid());
        },
      } as any);
    if (node.props.children && typeof node.props.children === 'object') {
      return React.cloneElement(node, {
        // @ts-expect-error unknown error
        children: Children.map(node.props.children, attachCloseListener),
      });
    }
    return node;
  };

  const content = useMemo(
    () => <ul className={theme.content}>{Children.map(children, attachCloseListener)}</ul>,
    [children, theme],
  );

  const TriggerWrapper: FC<ButtonProps> = ({ children }): JSX.Element =>
    inline ? <button className={theme.inlineWrapper}>{children}</button> : <Button {...buttonProps}>{children}</Button>;

  return (
    <Floating
      content={content}
      style="auto"
      animation="duration-100"
      placement={placement}
      arrow={floatingArrow}
      trigger={trigger}
      theme={theme.floating}
      closeRequestKey={closeRequestKey}
      className={className}
    >
      <TriggerWrapper>
        {label}
        {arrowIcon && <Icon className={theme.arrowIcon} />}
      </TriggerWrapper>
    </Floating>
  );
};

DropdownComponent.displayName = 'Dropdown';
DropdownItem.displayName = 'Dropdown.Item';
DropdownHeader.displayName = 'Dropdown.Header';
DropdownDivider.displayName = 'Dropdown.Divider';

export const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider,
});
