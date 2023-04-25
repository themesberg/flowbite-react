/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { ComponentProps, Dispatch, FC, PropsWithChildren, ReactElement, ReactNode, SetStateAction } from 'react';
import React, { Children, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronUp } from 'react-icons/hi';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { uuid } from '../../helpers/uuid';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';
import type { FloatingProps, FlowbiteFloatingTheme } from '../Floating';
import { Floating } from '../Floating';
import { useTheme } from '../Flowbite/ThemeContext';
import type { FlowbiteDropdownDividerTheme } from './DropdownDivider';
import { DropdownDivider } from './DropdownDivider';
import type { FlowbiteDropdownHeaderTheme } from './DropdownHeader';
import { DropdownHeader } from './DropdownHeader';
import type { FlowbiteDropdownItemTheme } from './DropdownItem';
import { DropdownItem } from './DropdownItem';

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
    Pick<FloatingProps, 'placement' | 'trigger'>,
    Omit<ButtonProps, 'theme'> {
  arrowIcon?: boolean;
  dismissOnClick?: boolean;
  floatingArrow?: boolean;
  inline?: boolean;
  label: ReactNode;
  theme?: DeepPartial<FlowbiteDropdownTheme>;
}

export interface TriggerWrapperProps extends ButtonProps {
  setButtonWidth?: Dispatch<SetStateAction<number | undefined>>;
}

const icons: Record<string, FC<ComponentProps<'svg'>>> = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft,
};

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
  const [buttonWidth, setButtonWidth] = useState<number | undefined>(undefined);

  // Extends DropdownItem's onClick to trigger a close request to the Floating component
  const attachCloseListener = useCallback(
    // @ts-ignore TODO: Rewrite Dropdown
    (node: ReactNode) => {
      if (!React.isValidElement(node)) return node;
      if ((node as ReactElement).type === DropdownItem)
        return React.cloneElement(node, {
          // @ts-ignore TODO: Rewrite Dropdown
          onClick: () => {
            node.props.onClick?.();
            dismissOnClick && setCloseRequestKey(uuid());
          },
        });
      if (node.props.children && typeof node.props.children === 'object') {
        return React.cloneElement(node, {
          // @ts-ignore TODO: Rewrite Dropdown
          children: Children.map(node.props.children, attachCloseListener),
        });
      }
      return node;
    },
    [dismissOnClick],
  );

  const content = useMemo(
    () => <ul className={theme.content}>{Children.map(children, attachCloseListener)}</ul>,
    [attachCloseListener, children, theme.content],
  );

  const TriggerWrapper: FC<TriggerWrapperProps> = ({ children, setButtonWidth }): JSX.Element => {
    const ref = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      if (ref.current) setButtonWidth?.(ref.current.clientWidth);
    }, [ref]);

    return inline ? (
      <button ref={ref} className={theme.inlineWrapper}>
        {children}
      </button>
    ) : (
      <Button ref={ref} {...buttonProps}>
        {children}
      </Button>
    );
  };

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
      minWidth={buttonWidth}
    >
      <TriggerWrapper setButtonWidth={setButtonWidth}>
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
